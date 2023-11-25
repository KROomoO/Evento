import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "css/List.css";

import ListItem from "./ListItem";
import Axios from "axios";

import customAxios from "js/axiosConfig";

function List() {
    const [pagelength, setPagelength] = useState(0);
    const [selectPage, setSelectPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [resultLength, setResultLength] = useState(0);

    const selectedListGuname = useSelector(
        (state) => state.selectedList.guname
    );

    const selectedListFree = useSelector((state) => state.selectedList.free);
    const selectedMonth = useSelector((state) => state.selectedList.month);

    useEffect(() => {
        customAxios
            .get("/api/listlength", {
                params: {
                    selectGuname: selectedListGuname,
                    checkedFree: selectedListFree,
                    selectedMonth: selectedMonth,
                },
            })
            .then((response) => {
                setResultLength(response.data[0].listLength);
                return response.data[0].listLength;
            });
        // Axios.get("/api/listlength", {
        //     params: {
        //         selectGuname: selectedListGuname,
        //         checkedFree: selectedListFree,
        //         selectedMonth: selectedMonth,
        //     },
        // }).then((response) => {
        //     setResultLength(response.data[0].listLength);
        //     return response.data[0].listLength;
        // });
    }, [selectedListGuname, selectedListFree, selectedMonth]);

    useEffect(() => {
        if (resultLength > 0) {
            setPagelength(Math.ceil(resultLength / 10));
            setSelectPage(1);
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [resultLength]);

    return (
        <div className="list_container">
            {isLoading ? (
                <>
                    {resultLength !== 0 && (
                        <ListItem selectedPage={selectPage * 10 - 10} />
                    )}
                    <div className="wrapper_pagination">
                        <Stack spacing={2}>
                            <Pagination
                                count={pagelength}
                                defaultPage={1}
                                page={selectPage}
                                showFirstButton
                                showLastButton
                                onChange={(event, page) => setSelectPage(page)}
                            />
                        </Stack>
                    </div>
                </>
            ) : (
                <div className="empty_container">
                    <img
                        src={process.env.PUBLIC_URL + "/img/empty.png"}
                        alt="empty"
                    />
                    <p>검색된 이벤트가 없습니다. 다시 검색해주세요.</p>
                </div>
            )}
        </div>
    );
}

export default List;
