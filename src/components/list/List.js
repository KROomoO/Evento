import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "css/List.css";

import ListItem from "./ListItem";

function List() {
    const [pagelength, setPagelength] = useState(0);
    const [selectPage, setSelectPage] = useState(1);
    const [pageResult, setPageResult] = useState([]);
    const [countPage, setCountPage] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const selectResult = useSelector(
        (state) => state.selectResultList.resultList
    );

    // ToDoList : 선택된 page 값을 이용해서 selectResult값 중 해당하는 페이지에 보여질 데이터 정렬

    useEffect(() => {
        if (selectResult && selectResult.length > 0) {
            setPagelength(Math.ceil(selectResult.length / 20));
            setPageResult(selectResult.slice(0, 20));
            setSelectPage(1);
            setCountPage(20);
            setIsLoading(true);
        }
    }, [selectResult]);

    useEffect(() => {
        if (selectPage === 1) {
            setPageResult(selectResult.slice(0, 20));
            setCountPage(20);
        } else {
            setPageResult(selectResult.slice(countPage, selectPage * 20));
            setCountPage(selectPage * 20);
        }
    }, [selectPage]);

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
                        {pageResult.length !== 0 && (
                            <ListItem pageResult={pageResult} />
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default List;
