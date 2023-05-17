import { useEffect } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectedGuname } from "store/reducer/selectListSlice";

import handleSelectCategory from "js/handleSelectCategory";

function GuCategory({ gulist }) {
    const dispatch = useDispatch();

    const selectedListGuname = useSelector((state) => {
        return state.selectedList.guname;
    });

    const selectedListFree = useSelector((state) => {
        return state.selectedList.free;
    });

    // load selected list
    useEffect(() => {
        Axios.post("/api/list/guname", {
            selectGuname: selectedListGuname,
            checkedFree: selectedListFree,
        })
            .then((response) => {
                console.log(
                    response.data && response.data.length !== 0
                        ? response.data
                        : "없음"
                );
            })
            .catch((err) => {
                console.error(err);
            });
    }, [selectedListGuname, selectedListFree]);

    const handleClickGunameEvent = (props) => {
        handleSelectCategory(props);
        dispatch(selectedGuname(props.target.innerText));
    };

    return (
        <div className="middle_type_container">
            <div className="middle_type">
                <ul className="middle_category">
                    {gulist.map((item, index) => {
                        return item.guname !== "None" ? (
                            <li key={index} onClick={handleClickGunameEvent}>
                                {item.guname}
                            </li>
                        ) : null;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default GuCategory;
