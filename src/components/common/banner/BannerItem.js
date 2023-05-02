import { Paper } from "@mui/material";
import "css/Banner.css";

function BannerItem({ title, sub, imgSrc, bannerLink, bannerColor }) {
    console.log(title);
    console.log(sub);
    console.log(imgSrc);

    const handleBannerLink = () => {
        if (bannerLink === "/") {
            window.location.href = bannerLink;
        } else {
            // todoList : 깃허브 페이지 만들고 링크 변경
            window.open(bannerLink);
        }
    };

    return (
        <Paper className="wrapper_banner">
            <div
                className="wrapper_bannerItem"
                onClick={handleBannerLink}
                style={{ backgroundColor: bannerColor }}
            >
                <div className="wrapper_bannerContent">
                    <div className="banner_description">
                        <p>{title}</p>
                        <p>{sub}</p>
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
