import { useEffect } from "react";
import { useSelector } from "react-redux";
import "css/List.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function List() {
    const selectResult = useSelector((state) => {
        return state.selectResultList.resultList;
    });

    useEffect(() => {
        console.log("aa");
    }, [selectResult]);

    return (
        <div className="awww">
            <p>aaaaa</p>
            <Stack spacing={2}>
                <Pagination
                    count={10}
                    defaultPage={1}
                    showFirstButton
                    showLastButton
                    onChange={(event, page) => console.log(page, event)}
                />
            </Stack>
        </div>
    );
}

export default List;
