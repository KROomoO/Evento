const GoogleLoginButton = () => {
    const client_id = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID;
    const redirect_uri = process.env.REACT_APP_GOOGLE_OAUTH2_REDIRECT_URI;
    const scope = process.env.REACT_APP_GOOGLE_OAUTH2_SCOPE;
    const state = process.env.REACT_APP_GOOGLE_OAUTH2_STATE;
    const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code&state=${state}&access_type=offline`;

    const GoogleLogin = () => {
        window.location.href = googleURL;
    };

    return (
        <div className="wrapper_social_login">
            <button style={{ backgroundColor: "white" }} onClick={GoogleLogin}>
                <img
                    src={process.env.PUBLIC_URL + "/img/google_logo.png"}
                    alt="google_login_button"
                />
            </button>
            <span>Google 로그인</span>
        </div>
    );
};

export default GoogleLoginButton;
