import { Paper } from "@mui/material";

function BannerItem({ title, sub, imgSrc, bannerLink, bannerColor }) {
    const handleBannerLink = () => {
        window.open(bannerLink);
    };

    return (
        <Paper className="wrapper_banner">
            <div
                className="wrapper_bannerItem"
                style={{ backgroundColor: bannerColor }}
            >
                <div className="wrapper_bannerContent">
                    <div className="banner_description">
                        <p>{title}</p>
                        <p>{sub}</p>
                        {bannerLink ? (
                            <button onClick={handleBannerLink}>
                                Github 방문하기
                            </button>
                        ) : null}
                    </div>
                    <div className="banner_img">
                        <img src={imgSrc} alt="bannerImg" />
                    </div>
                </div>
            </div>
        </Paper>
    );
}

export default BannerItem;
