import Main from "./routes/Main";
import Detail from "./routes/Detail";
import NaverRedirect from "./routes/NaverRedirect";
import KakaoRedirect from "./routes/KakaoRedirect";
import GoogleRedirect from "./routes/GoogleRedirect";
import MyScrap from "./routes/MyScrap";

import { NavermapsProvider } from "react-naver-maps";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <NavermapsProvider
            ncpClientId={process.env.REACT_APP_NAVER_MAP_CLIENT_ID}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/detail/:itemId" element={<Detail />} />
                    <Route path="/myscrap" element={<MyScrap />} />
                    <Route path="/authnaver" element={<NaverRedirect />} />
                    <Route path="/authkakao" element={<KakaoRedirect />} />
                    <Route path="/authgoogle" element={<GoogleRedirect />} />
                </Routes>
            </BrowserRouter>
        </NavermapsProvider>
    );
}

export default App;
