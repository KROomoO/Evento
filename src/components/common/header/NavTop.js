import "css/NavTop.css";

import UserStatus from "./UserStatus";

function NavTop() {
    return (
        <header className="header_nav">
            <div className="wrapper_logo">
                <a href="/" className="logo">
                    <img
                        src={process.env.PUBLIC_URL + "/img/logo.png"}
                        alt="Logo"
                    />
                    <p>Evento</p>
                </a>
            </div>
            <div className="wrapper_login">
                <UserStatus />
            </div>
        </header>
    );
}

export default NavTop;
