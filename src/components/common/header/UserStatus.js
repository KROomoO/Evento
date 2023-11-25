import { useEffect, useState } from "react";
// import Axios from "axios";
import { Person } from "@mui/icons-material";
import { Menu, MenuItem, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser_id } from "store/reducer/userInfoSlice";
import { Link, useNavigate, useLocation } from "react-router-dom";

import LoginDialog from "./LoginDialog";

import "css/UserStatus.css";

import customAxios from "js/axiosConfig";

const UserStatus = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [userId, setUserId] = useState();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const location = useLocation();

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        async function checkJwt() {
            const response = await customAxios.get("/api/login/verify_jwt");
            // const response = await Axios.get("/api/login/verify_jwt");

            if (
                response.data.verify === false &&
                response.data.message === "verify jwt failed"
            ) {
                alert("로그인 보안 오류! 다시 로그인 해주세요.");
                window.location.reload();
            } else if (
                response.data.verify === false &&
                response.data.message === "jwt not exists"
            ) {
                if (location.pathname === "/myscrap") {
                    navigate("/");
                }
            } else {
                setUserId(response.data.user_id);
            }
        }

        checkJwt();
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (userId !== undefined) {
            console.log(userId);
            dispatch(setUser_id(userId));
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [userId, dispatch]);

    const handleLogout = async () => {
        const response = await customAxios.get("/api/login/logout");
        // const response = await Axios.get("/api/login/logout");

        if (response.data === "잘못된 접근입니다.") {
            alert(response.data);
            navigate("/");
        } else {
            if (location.pathname === "/") {
                window.location.reload();
            } else {
                navigate("/");
            }
        }
    };

    return (
        <>
            {isLogin ? (
                <div className="on_success_login_container">
                    <button className="logout_button" onClick={handleLogout}>
                        로그아웃
                    </button>
                    <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    >
                        <Person fontSize="large" color="action" />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                width: "65px",
                                height: "20px",
                                fontSize: "14px",
                                padding: "15px 3px",
                            }}
                        >
                            <Link
                                to={"/myscrap"}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                내 스크랩
                            </Link>
                        </MenuItem>
                    </Menu>
                </div>
            ) : (
                <>
                    <LoginDialog />
                </>
            )}
        </>
    );
};

export default UserStatus;
