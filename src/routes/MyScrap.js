import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import { Bookmark } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "css/MyScrap.css";
import "css/List.css";

import NavTop from "components/common/header/NavTop";
import replaceErrorImg from "js/replaceErrorImg";

import customAxios from "js/axiosConfig";

const MyPage = () => {
    const [scrapList, setScrapList] = useState();

    const userId = useSelector((state) => state.userInfo.user_id);

    useEffect(() => {
        const MyScrapList = async () => {
            if (userId !== "") {
                const scrapResult = await customAxios.post(
                    "/api/mypage/myscrap",
                    {
                        user_id: userId,
                    }
                );
                // const scrapResult = await Axios.post("/api/mypage/myscrap", {
                //     user_id: userId,
                // });

                setScrapList(scrapResult.data);
            }
        };

        MyScrapList();
    }, [userId]);

    return (
        <>
            <NavTop />
            <div className="scrap_list_container">
                <div className="scrap_list_header">
                    <Bookmark />
                    <span>내 스크랩</span>
                </div>
                <div className="scrap_list_content">
                    <div className="listItem_container">
                        {scrapList && scrapList.length > 0 ? (
                            scrapList.map((item, index) => {
                                return (
                                    <Link
                                        to={`/detail/${item.id}`}
                                        key={index}
                                        className="link_tag"
                                    >
                                        <div
                                            className="wrapper_listItem"
                                            key={item.id}
                                        >
                                            <img
                                                id="listItem_img"
                                                src={item.main_img}
                                                alt="event_img"
                                                onError={(e) =>
                                                    replaceErrorImg(e)
                                                }
                                            />
                                            <p id="listItem_title">
                                                {item.title.length >= 15
                                                    ? item.title.substr(0, 15) +
                                                      "..."
                                                    : item.title}
                                            </p>
                                            <p id="listItem_date">
                                                {item.date}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })
                        ) : (
                            <div className="empty_container">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/img/empty.png"
                                    }
                                    alt="empty"
                                />
                                <p>저장된 이벤트가 없습니다.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyPage;
