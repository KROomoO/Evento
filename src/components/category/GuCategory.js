import Axios from "axios";
import { useState, useEffect } from "react";

function GuCategory({ guname }) {
    const [selectCategory, setSelectCategory] = useState();
    const [selectGuname, setSelectGuname] = useState("");

    useEffect(() => {
        document.querySelector(".main_category").childNodes.forEach((item) => {
            item.addEventListener("click", handleSelectCategory);
        });
        document
            .querySelector(".middle_category")
            .childNodes.forEach((item) => {
                item.addEventListener("click", handleSelectCategory);
            });
    }, []);

    useEffect(() => {
        if (selectCategory !== undefined) {
            selectCategory.classList.add("selected");
        }
    }, [selectCategory]);

    useEffect(() => {
        if (selectGuname !== "") {
            Axios.post("/api/list/guname", { guname: selectGuname })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((err) => {
                    console.error(err);
                })
                .finally(() => {
                    setSelectGuname("");
                });
        }
    }, [selectGuname]);

    const selectCategoryPromise = (props) => {
        return new Promise(function (resolve, reject) {
            const parent = props.target.parentNode;

            parent.childNodes.forEach((item) => {
                item.classList.remove("selected");
            });

            resolve(props.target);
        });
    };

    const handleSelectCategory = (props) => {
        selectCategoryPromise(props).then((item) => {
            setSelectCategory(item);
        });
    };

    const handleClickGuname = (selectGu) => {
        setSelectGuname(selectGu);
    };

    return (
        <>
            {guname !== "None" ? (
                <li value={guname} onClick={() => handleClickGuname(guname)}>
                    {guname}
                </li>
            ) : null}
        </>
    );
}

export default GuCategory;
