import { useEffect } from "react";

function ListItem({ pageResult }) {
    useEffect(() => {
        // console.log("aa");
    }, []);
    return (
        <div>
            {pageResult &&
                pageResult.map((item) => {
                    return <p key={item.id}>{item.id}</p>;
                })}
            {console.log("bb")}
        </div>
    );
}

export default ListItem;
