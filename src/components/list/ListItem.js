import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import { Link } from "react-router-dom";
import replaceErrorImg from "js/replaceErrorImg";

import customAxios from "js/axiosConfig";

function ListItem({ selectedPage }) {
    const [resultList, setResultList] = useState();

    const selectedListGuname = useSelector(
        (state) => state.selectedList.guname
    );

    const selectedListFree = useSelector((state) => state.selectedList.free);
    const selectedMonth = useSelector((state) => state.selectedList.month);

    useEffect(() => {
        customAxios
            .get("/api/resultlist", {
                params: {
                    selectGuname: selectedListGuname,
                    checkedFree: selectedListFree,
                    selectedPage: selectedPage,
                    selectedMonth: selectedMonth,
                },
            })
            .then((response) => setResultList(response.data));
        // Axios.get("/api/resultlist", {
        //     params: {
        //         selectGuname: selectedListGuname,
        //         checkedFree: selectedListFree,
        //         selectedPage: selectedPage,
        //         selectedMonth: selectedMonth,
        //     },
        // }).then((response) => setResultList(response.data));
    }, [selectedListGuname, selectedListFree, selectedPage, selectedMonth]);

    return (
        <div className="listItem_container">
            {resultList &&
                resultList.map((item, index) => {
                    return (
                        <Link
                            to={`/detail/${item.id}`}
                            key={index}
                            className="link_tag"
                        >
                            <div className="wrapper_listItem" key={item.id}>
                                <img
                                    id="listItem_img"
                                    src={item.main_img}
                                    alt="event_img"
                                    onError={(e) => replaceErrorImg(e)}
                                />
                                <p id="listItem_title">
                                    {item.title.length >= 15
                                        ? item.title.substr(0, 15) + "..."
                                        : item.title}
                                </p>
                                <p id="listItem_date">{item.date}</p>
                            </div>
                        </Link>
                    );
                })}
        </div>
    );
}

export default ListItem;
