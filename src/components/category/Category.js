import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import Axios from "axios";
import GuCategory from "./GuCategory";
import { useSelector, useDispatch } from "react-redux";
import {
    selectedGuname,
    checkedFree,
    selectedMonth,
} from "store/reducer/selectListSlice";

import "css/Category.css";

import handleSelectCategory from "js/handleSelectCategory";

function Category() {
    const dispatch = useDispatch();
    const [gulist, setGulist] = useState();

    const currentMonth = useSelector((state) => state.selectedList.month);

    // load guname list
    useEffect(() => {
        Axios.get("/api/guname")
            .then((response) => {
                setGulist(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    useEffect(() => {
        dispatch(selectedGuname("전체"));
        dispatch(checkedFree(0));
        //eslint-disable-next-line
    }, []);

    const handleCheckedFree = (event) => {
        if (event.target.checked) {
            dispatch(checkedFree(1));
        } else {
            dispatch(checkedFree(0));
        }
    };

    const handleSelectMonth = (e) => {
        dispatch(selectedMonth(e.target.value));
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
                    <select
                        className="selectMonth"
                        onChange={handleSelectMonth}
                        defaultValue={currentMonth}
                    >
                        <option value={"00"}>전체</option>
                        <option value={"01"}>1월</option>
                        <option value={"02"}>2월</option>
                        <option value={"03"}>3월</option>
                        <option value={"04"}>4월</option>
                        <option value={"05"}>5월</option>
                        <option value={"06"}>6월</option>
                        <option value={"07"}>7월</option>
                        <option value={"08"}>8월</option>
                        <option value={"09"}>9월</option>
                        <option value={"10"}>10월</option>
                        <option value={"11"}>11월</option>
                        <option value={"12"}>12월</option>
                    </select>
                    <div>
                        <strong>무료</strong>
                        <Switch
                            onChange={handleCheckedFree}
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    </div>
                </div>
            </div>
            <GuCategory gulist={gulist} />
        </>
    );
}

export default Category;
