function GuCategory({ guname, handleSelectCategory, handleClickGuname }) {
    return (
        <>
            {guname !== "None" ? (
                <li
                    onClick={(e) => {
                        handleSelectCategory(e);
                        handleClickGuname(e.target.innerText);
                    }}
                >
                    {guname}
                </li>
            ) : null}
        </>
    );
}

export default GuCategory;
