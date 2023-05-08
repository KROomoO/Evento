import Carousel from "react-material-ui-carousel";
import BannerItem from "./BannerItem";

function Banner() {
    const bannerDescription = [
        {
            title: "서울시에서 열리는 행사, 공연, 축제를 찾는 가장 쉬운 방법",
            sub: "Evento에서 다양한 경험을 해보세요 👀",
            imgSrc: `${process.env.PUBLIC_URL}/img/bannerImg1.jpg`,
            bannerLink: "https://github.com/KROomoO/Evento",
            bannerColor: "#fbe292",
        },
        {
            title: "각 자치구별 행사 관련 정보를 보고 싶다면",
            sub: "원하는 자치구를 선택해 주세요 📌",
            imgSrc: `${process.env.PUBLIC_URL}/img/bannerImg2.jpg`,
            bannerColor: "#bcefff",
        },
    ];
    return (
        <Carousel>
            {bannerDescription.map((item, index) => {
                return <BannerItem key={index} {...item} />;
            })}
        </Carousel>
    );
}

export default Banner;
