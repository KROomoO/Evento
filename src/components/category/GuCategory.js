import { useEffect } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectedGuname } from "store/reducer/selectListSlice";
import { setResult } from "store/reducer/selectResultListSlice";

import handleSelectCategory from "js/handleSelectCategory";

function GuCategory({ gulist }) {
    const dispatch = useDispatch();

    const selectedListGuname = useSelector(
        (state) => state.selectedList.guname
    );

    const selectedListFree = useSelector((state) => state.selectedList.free);

    const selectResultList = useSelector(
        (state) => state.selectResultList.resultList
    );

    // ToDoList : 데이터 redux state에 저장까지 진행했음 이제 하단에 리스트 만들고(월별 선택 selectbox) 데이터 뿌려주기 진행 ㄱㄱ
    useEffect(() => {
        if (selectResultList && selectResultList.length !== 0) {
            // console.log(selectResultList);
        }
        // else {
        //     // 강서구 무료 행사 없음 이것도 리스트에 결과 없다고 따로 처리 해줘야함(월별 선택 시 해당 월 and 지역구 or 무료 행사가 없을 경우와 동일하게)
        //     console.log("없음");
        // }
    }, [selectResultList]);

    // load selected list
    useEffect(() => {
        Axios.get("/api/list/guname", {
            params: {
                selectGuname: selectedListGuname,
                checkedFree: selectedListFree,
            },
        })
            .then((response) => {
                dispatch(setResult(response.data));
            })
            .catch((err) => {
                console.error(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedListGuname, selectedListFree]);

    const handleClickGunameEvent = (props) => {
        handleSelectCategory(props);
        dispatch(selectedGuname(props.target.innerText));
    };

    return (
        <div className="middle_type_container">
            <div className="middle_type">
                <ul className="middle_category">
                    <li className="selected" onClick={handleClickGunameEvent}>
                        전체
                    </li>
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
