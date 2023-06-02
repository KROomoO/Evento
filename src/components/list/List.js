import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "css/List.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function List() {
    const [isLoading, setIsLoading] = useState(false);
    const [pageLength, setPageLength] = useState(0);

    const selectResult = useSelector(
        (state) => state.selectResultList.resultList
    );

    useEffect(() => {
        if (selectResult && selectResult.length > 0) {
            setIsLoading(true);
            setPageLength(parseInt(selectResult.length / 10));
            console.log(parseInt(selectResult.length / 10));
        }
    }, [selectResult]);

    return (
        <div className="awww">
            {isLoading ? (
                <Stack spacing={2}>
                    <Pagination
                        count={pageLength}
                        defaultPage={1}
                        showFirstButton
                        showLastButton
                        onChange={(event, page) => console.log(page)}
                    />
                </Stack>
            ) : null}
        </div>
    );
}

export default List;
