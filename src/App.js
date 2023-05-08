import "./css/App.css";
import Banner from "components/common/banner/Banner";
import NavTop from "components/common/header/NavTop";
import Category from "components/category/Category";

function App() {
    // const test = () => {
    //     Axios.post('/api/list',).then((response) => {
    //         console.log(response.data);
    //     }).catch((err) => {
    //         console.error(err);
    //     });
    // }

    return (
        <div className="App">
            <NavTop />
            <Banner />
            {/* ToDoList - 대분류(자치구), 중분류(ex.도봉구) 컴포넌트 분리 */}
            <Category />
        </div>
    );
}

export default App;
