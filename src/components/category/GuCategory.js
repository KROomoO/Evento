import { useDispatch } from "react-redux";
import { selectedGuname } from "store/reducer/selectListSlice";

import handleSelectCategory from "js/handleSelectCategory";

function GuCategory({ gulist }) {
    const dispatch = useDispatch();

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
                    {gulist &&
                        gulist.map((item, index) => {
                            return item.guname !== "None" ? (
                                <li
                                    key={index}
                                    onClick={handleClickGunameEvent}
                                >
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
