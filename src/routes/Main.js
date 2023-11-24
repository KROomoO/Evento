import Banner from "components/common/banner/Banner";
import NavTop from "components/common/header/NavTop";
import Category from "components/category/Category";
import List from "components/list/List";

function Main() {
    return (
        <>
            <NavTop />
            <Banner />
            <Category />
            <List />
        </>
    );
}

export default Main;
