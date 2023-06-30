import { useEffect, useState } from "react";
import Axios from "axios";

function ListItem({ listdata }) {
    const [resultList, setResultList] = useState();

    useEffect(() => {
        Axios.get("/api/list/guname/list", {
            params: {
                selectGuname: listdata.guname,
                checkedFree: listdata.free,
                selectedPage: listdata.selectedPage,
            },
        }).then((response) => setResultList(response.data));
    }, [listdata]);

    useEffect(() => {
        console.log(resultList);
    }, [resultList]);

    return (
        <div>
            {resultList &&
                resultList.map((item, index) => {
                    return <p>{item.id}</p>;
                })}
        </div>
    );
}

export default ListItem;
