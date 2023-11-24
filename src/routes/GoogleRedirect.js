import Axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleRedirect = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const result_code = queryParams.get("code");
    const result_state = queryParams.get("state");

    useEffect(() => {
        async function GoogleLoginResult() {
            await Axios.post("/api/login/google", {
                code: result_code,
                state: result_state,
            })
                .catch((error) => {
                    alert(
                        "로그인 요청이 잘못되었습니다. 다시 로그인 해주세요."
                    );
                    console.error(error);
                })
                .finally(() => {
                    navigate("/");
                });
        }

        GoogleLoginResult();
    }, [result_code, result_state, navigate]);

    return;
};

export default GoogleRedirect;
