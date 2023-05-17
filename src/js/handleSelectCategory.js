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

export default handleSelectCategory;
