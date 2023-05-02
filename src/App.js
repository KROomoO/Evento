import "./css/App.css";
import Axios from "axios";
import { useState } from "react";
import Banner from "./components/common/banner/Banner";
import NavTop from "./components/common/header/NavTop";

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
        </div>
    );
}

export default App;
