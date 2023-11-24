import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import replaceErrorImg from "js/replaceErrorImg";
import { IconButton } from "@mui/material";
import Link from "@mui/joy/Link";
import {
    Launch,
    Bookmark,
    BookmarkBorder,
    ArrowBackIos,
} from "@mui/icons-material";
import {
    Container as MapDiv,
    NaverMap,
    Marker,
    useNavermaps,
} from "react-naver-maps";
import { useSelector } from "react-redux";

import NavTop from "components/common/header/NavTop";
import "css/Detail.css";

function MyMap({ address }) {
    const navermaps = useNavermaps();

    return (
        <>
            <NaverMap
                defaultCenter={
                    new navermaps.LatLng(
                        Number(address.lat),
                        Number(address.lng)
                    )
                }
                defaultZoom={16}
            >
                <Marker
                    defaultPosition={
                        new navermaps.LatLng(
                            Number(address.lat),
                            Number(address.lng)
                        )
                    }
                />
            </NaverMap>
        </>
    );
}

function Detail() {
    const itemId = useParams().itemId;

    const [selectItem, setSelectItem] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isScrap, setIsScrap] = useState(false);
    const [iconIsLoading, setIconIsLoading] = useState();

    const navigate = useNavigate();

    const userId = useSelector((state) => state.userInfo.user_id);

    useEffect(() => {
        Axios.get("/api/detail", {
            params: {
                itemId: itemId,
            },
        })
            .then((response) => setSelectItem(...response.data))
            .then(() => setIsLoading(true));
    }, [itemId]);

    useEffect(() => {
        if (userId !== "") {
            Axios.post("/api/detail/check_scrap", {
                user_id: userId,
                post_id: itemId,
            }).then((response) => setIsScrap(response.data));
        }
    }, [userId, itemId]);

    const itemLinkStyle = {
        width: 90,
        height: 20,
        fontSize: 14,
    };

    const handleScrapButton = async () => {
        if (userId !== "") {
            setIconIsLoading(true);
            if (isScrap === false) {
                Axios.post("/api/detail/save_scrap", {
                    user_id: userId,
                    post_id: itemId,
                })
                    .then(() => {
                        setIsScrap(true);
                    })
                    .then(() => setIconIsLoading(false));
            } else {
                Axios.post("/api/detail/delete_scrap", {
                    user_id: userId,
                    post_id: itemId,
                })
                    .then(() => {
                        setIsScrap(false);
                    })
                    .then(() => setIconIsLoading(false));
            }
        } else {
            alert("로그인 후 이용해주세요.");
        }
    };

    return (
        <>
            <NavTop />
            {isLoading ? (
                <div className="detail_container">
                    <div className="detail_icon">
                        <IconButton
                            aria-label="arrowBackIosNew"
                            sx={{
                                color: (theme) => theme.palette.grey[500],
                            }}
                            onClick={() => navigate(-1)}
                        >
                            <ArrowBackIos />
                        </IconButton>
                        {isScrap ? (
                            <IconButton
                                aria-label="bookmark"
                                sx={{
                                    color: (theme) => theme.palette.grey[500],
                                }}
                                onClick={handleScrapButton}
                                disabled={iconIsLoading}
                            >
                                <Bookmark />
                            </IconButton>
                        ) : (
                            <IconButton
                                aria-label="bookmarkBorder"
                                sx={{
                                    color: (theme) => theme.palette.grey[500],
                                }}
                                onClick={handleScrapButton}
                                disabled={iconIsLoading}
                            >
                                <BookmarkBorder />
                            </IconButton>
                        )}
                    </div>
                    <div className="detail_header">
                        <div className="wrapper_selectItem_title">
                            <p className="selectItem_title_foreword">
                                이벤트명
                            </p>
                            <p id="selectItem_title">{selectItem.title}</p>
                        </div>
                        <div className="selectItem_info">
                            <img
                                src={selectItem.main_img}
                                alt="selectItem_img"
                                onError={(e) => replaceErrorImg(e)}
                            />
                            <ul>
                                <li>
                                    <span>진행 일자</span>
                                    <span>{selectItem.date}</span>
                                </li>
                                <li>
                                    <span>예약 일자</span>
                                    <span>{selectItem.rgstdate}</span>
                                </li>
                                <li>
                                    <span>유료 무료</span>
                                    <span>{selectItem.is_free}</span>
                                </li>
                                <li>
                                    <span>참가 연령</span>
                                    <span>{selectItem.use_trgt}</span>
                                </li>
                                <li>
                                    <span>상세 링크</span>
                                    <span>
                                        <Link
                                            href={selectItem.org_link}
                                            target="_blank"
                                            rel="noopener"
                                            endDecorator={<Launch />}
                                            sx={itemLinkStyle}
                                        >
                                            바로가기
                                        </Link>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="map_container">
                        <p className="selectItem_address_foreword">
                            이벤트 장소
                        </p>
                        <div className="wrapper_address">
                            <span>{selectItem.guname}</span>
                            <span>
                                {selectItem.place.length >= 55
                                    ? selectItem.place.substr(0, 55) + "..."
                                    : selectItem.place}
                            </span>
                        </div>
                        <MapDiv
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <MyMap
                                address={{
                                    lat: selectItem.lot,
                                    lng: selectItem.lat,
                                }}
                            />
                        </MapDiv>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Detail;
