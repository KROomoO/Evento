import "./css/App.css";
import Banner from "components/common/banner/Banner";
import NavTop from "components/common/header/NavTop";
import Category from "components/category/Category";
import List from "components/list/List";

function App() {
    return (
        <div className="App">
            <NavTop />
            <Banner />
            <Category />
            <List />
        </div>
    );
}

export default App;
