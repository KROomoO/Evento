import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import Axios from "axios";
import GuCategory from "./GuCategory";
import { useDispatch } from "react-redux";
import { checkedFree } from "store/reducer/selectListSlice";
import "css/Category.css";

import handleSelectCategory from "js/handleSelectCategory";

function Category() {
    const dispatch = useDispatch();
    const [gulist, setGulist] = useState();

    // load guname list
    useEffect(() => {
        Axios.post("/api/list")
            .then((response) => {
                setGulist(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleCheckedFree = (event) => {
        dispatch(checkedFree(event.target.checked));
    };

    return (
        <>
            <div className="main_type_container">
                <div className="main_type">
                    <ul className="main_category">
                        <li className="selected" onClick={handleSelectCategory}>
                            자치구
                        </li>
                        {/* <li>추후 카테고리 추가 고려</li> */}
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
            {gulist && <GuCategory gulist={gulist} />}
        </>
    );
}

export default Category;
