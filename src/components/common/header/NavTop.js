import { useState } from "react";
import "css/NavTop.css";

function NavTop() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <header className="header_nav">
            <div className="wrapper_logo">
                <a href="/aaaa" className="logo">
                    <img
                        src={process.env.PUBLIC_URL + "/img/logo.png"}
                        alt="Logo"
                    />
                    <p>Evento</p>
                </a>
            </div>
            <div className="wrapper_login">
                {isLogin ? (
                    <a href="/스크랩">
                        <strong>스크랩</strong>
                    </a>
                ) : (
                    <a href="/로그인">
                        <strong>로그인</strong>
                    </a>
                )}
            </div>
        </header>
    );
}

export default NavTop;
