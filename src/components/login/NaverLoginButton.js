const NaverLoginButton = () => {
    const client_id = process.env.REACT_APP_NAVER_OAUTH2_CLIENT_ID;
    const redirect_uri = process.env.REACT_APP_NAVER_OAUTH2_REDIRECT_URI;
    const state = process.env.REACT_APP_NAVER_OAUTH2_STATE;
    const naver_auth_url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`;

    const NaverLogin = () => {
        window.location.href = naver_auth_url;
    };

    return (
        <div className="wrapper_social_login">
            <button style={{ backgroundColor: "#1ec800" }} onClick={NaverLogin}>
                <img
                    src={process.env.PUBLIC_URL + "/img/naver_logo.png"}
                    alt="naver_login_button"
                />
            </button>
            <span>Naver 로그인</span>
        </div>
    );
};

export default NaverLoginButton;
