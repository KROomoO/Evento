import "./css/App.css";
import Banner from "components/common/banner/Banner";
import NavTop from "components/common/header/NavTop";
import Category from "components/category/Category";

function App() {
    return (
        <div className="App">
            <NavTop />
            <Banner />
            <Category />
            <div className="awww">aa</div>
        </div>
    );
}

export default App;
