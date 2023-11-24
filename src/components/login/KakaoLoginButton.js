const KakaoLoginButton = () => {
    const rest_api_key = process.env.REACT_APP_KAKAO_OAUTH_REST_API_KEY;
    const redirect_uri = process.env.REACT_APP_KAKAO_OAUTH_REDIRECT_URI;
    const state = process.env.REACT_APP_KAKAO_OAUTH_STATE;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code&state=${state}`;

    const KakaoLogin = () => {
        window.location.href = kakaoURL;
    };

    return (
        <div className="wrapper_social_login">
            <button style={{ backgroundColor: "#ffeb3b" }} onClick={KakaoLogin}>
                <img
                    src={process.env.PUBLIC_URL + "/img/kakao_logo.png"}
                    alt="kakao_login_button"
                />
            </button>
            <span>Kakao 로그인</span>
        </div>
    );
};

export default KakaoLoginButton;
