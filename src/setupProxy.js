const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        createProxyMiddleware("/api", {
            // target: "http://3.35.218.75:4000/",
            target: "http://localhost:4000",
            changeOrigin: true,
        })
    );
};
