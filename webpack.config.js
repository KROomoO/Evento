const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

const env = dotenv.config().parsed;

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "[name].[contenthash].js",
    },
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                include: path.resolve(__dirname, "public"),
                type: "asset/resource",
                generator: {
                    filename: "img/[name][ext]",
                },
            },
            {
                // JSON 파일 처리
                test: /\.json$/,
                type: "javascript/auto",
                use: "json-loader",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".png", ".jpg"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{ from: "public/img", to: "img" }],
        }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(env),
            "process.env.PUBLIC_URL": JSON.stringify(""),
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        hot: true,
        historyApiFallback: true,
        proxy: [
            {
                context: ["/api"],
                // target: "http://localhost:4000/",
                target: "http://ec2-52-79-59-223.ap-northeast-2.compute.amazonaws.com:8080/",
                changeOrigin: true,
                // pathRewrite: { "^/api": "" },
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
        runtimeChunk: "single", // 런타임 청크 분리
        usedExports: true,
    },
    devtool: "source-map",
};
