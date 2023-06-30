import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "css/List.css";

import ListItem from "./ListItem";
import Axios from "axios";

function List() {
    const [pagelength, setPagelength] = useState(0);
    const [selectPage, setSelectPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [resultLength, setResultLength] = useState(0);

    const selectedListGuname = useSelector(
        (state) => state.selectedList.guname
    );

    const selectedListFree = useSelector((state) => state.selectedList.free);

    useEffect(() => {
        Axios.get("/api/list/guname/length", {
            params: {
                selectGuname: selectedListGuname,
                checkedFree: selectedListFree,
            },
        }).then((response) => {
            setResultLength(response.data[0].listLength);
            return response.data[0].listLength;
        });
    }, [selectedListGuname, selectedListFree]);

    useEffect(() => {
        if (resultLength > 0) {
            setPagelength(Math.ceil(resultLength / 10));
            setSelectPage(1);
            setIsLoading(true);
        }
    }, [resultLength]);

    // useEffect(() => {
    //     if (selectPage === 1) {
    //         setPageResult(selectResult.slice(0, 20));
    //         setCountPage(20);
    //     } else {
    //         setPageResult(selectResult.slice(countPage, selectPage * 20));
    //         setCountPage(selectPage * 20);
    //     }
    // }, [selectPage]);

    return (
        <div className="list_container">
            <div className="wrapper_pagination">
                {isLoading ? (
                    <div>
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
                        {resultLength !== 0 && (
                            <ListItem
                                listdata={{
                                    guname: selectedListGuname,
                                    free: selectedListFree,
                                    selectedPage: selectPage * 10 - 10,
                                }}
                            />
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default List;
