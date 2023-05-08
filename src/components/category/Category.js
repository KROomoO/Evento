import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import Axios from "axios";
import GuCategory from "./GuCategory";

function Category() {
    const [guname, setGuname] = useState();
    const [checkedFree, setCheckedFree] = useState(false);

    useEffect(() => {
        Axios.post("/api/list")
            .then((response) => {
                setGuname(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    // useEffect(() => {
    //     Axios.post("/api/list/free").then((response) => {
    //         console.log(response.data);
    //     });
    // }, [checkedFree]);

    const handleCheckedFree = (event) => {
        setCheckedFree(event.target.checked);
    };
    return (
        <>
            <div className="main_type_container">
                <div className="main_type">
                    <ul className="main_category">
                        <li>자치구</li>
                        {/* <li>추후 추가 카테고리</li> */}
                    </ul>
                    <div>
                        <strong>무료</strong>
                        <Switch
                            onChange={handleCheckedFree}
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    </div>
                </div>
            </div>
            <div className="middle_type_container">
                <div className="middle_type">
                    <ul className="middle_category">
                        {guname &&
                            guname.map((item, index) => {
                                return <GuCategory key={index} {...item} />;
                            })}
                        {useEffect(() => {}, [])}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Category;
