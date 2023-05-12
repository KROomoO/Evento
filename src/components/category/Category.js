import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import Axios from "axios";
import GuCategory from "./GuCategory";

function Category() {
    const [guname, setGuname] = useState();
    const [selectGuname, setSelectGuname] = useState("");
    const [checkedFree, setCheckedFree] = useState(false);

    // load guname list
    useEffect(() => {
        Axios.post("/api/list")
            .then((response) => {
                setGuname(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    // load selected guname list
    useEffect(() => {
        if (selectGuname !== "") {
            Axios.post("/api/list/guname", {
                guname: selectGuname,
                checkedFree: checkedFree,
            })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [checkedFree, selectGuname]);

    // toggle selected category underline effect Promise
    const selectCategoryPromise = (props) => {
        return new Promise(function (resolve, reject) {
            const parent = props.target.parentNode;

            parent.childNodes.forEach((item) => {
                item.classList.remove("selected");
            });

            resolve(props.target);
        });
    };

    // toggle selected category underline effect
    const handleSelectCategory = (props) => {
        selectCategoryPromise(props).then((item) => {
            item.classList.add("selected");
        });
    };

    // selectGuname Axios Trigger
    const handleClickGuname = (selectGu) => {
        setSelectGuname(selectGu);
    };

    // set useState checkedFree handler
    const handleCheckedFree = (event) => {
        setCheckedFree(event.target.checked);
    };
    return (
        <>
            <div className="main_type_container">
                <div className="main_type">
                    <ul className="main_category">
                        <li className="selected" onClick={handleSelectCategory}>
                            자치구
                        </li>
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
                                return (
                                    <GuCategory
                                        key={index}
                                        {...item}
                                        handleSelectCategory={
                                            handleSelectCategory
                                        }
                                        handleClickGuname={handleClickGuname}
                                    />
                                );
                            })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Category;
