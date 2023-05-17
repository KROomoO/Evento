import { useEffect } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectedGuname } from "store/reducer/selectListSlice";
import { setResult } from "store/reducer/selectResultListSlice";

import handleSelectCategory from "js/handleSelectCategory";

function GuCategory({ gulist }) {
    const dispatch = useDispatch();

    const selectedListGuname = useSelector((state) => {
        return state.selectedList.guname;
    });

    const selectedListFree = useSelector((state) => {
        return state.selectedList.free;
    });

    const selectResultList = useSelector((state) => {
        return state.selectResultList.resultList;
    });

    // ToDoList : 데이터 redux state에 저장까지 진행했음 이제 하단에 리스트 만들고(월별 선택 selectbox) 데이터 뿌려주기 진행 ㄱㄱ
    useEffect(() => {
        if (selectResultList.length !== 0) {
            console.log(selectResultList);
        }
    }, [selectResultList]);

    // load selected list
    useEffect(() => {
        Axios.post("/api/list/guname", {
            selectGuname: selectedListGuname,
            checkedFree: selectedListFree,
        })
            .then((response) => {
                dispatch(setResult(response.data));

                // console.log(
                //     response.data && response.data.length !== 0
                //         ? response.data
                //         : "없음"
                // );
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
