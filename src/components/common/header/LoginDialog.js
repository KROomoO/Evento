import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

import GoogleLoginButton from "../../login/GoogleLoginButton";
import KakaoLoginButton from "../../login/KakaoLoginButton";
import NaverLoginButton from "../../login/NaverLoginButton";
import { useState } from "react";

const LoginDialog = () => {
    const [open, setOpen] = useState(false);

    const handleDialogOpen = () => {
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };

    return (
        <>
            <button className="login_button" onClick={handleDialogOpen}>
                로그인
            </button>
            <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle
                    sx={{
                        m: 0,
                        p: 2,
                        width: "100%",
                        height: "60px",
                        backgroundColor: "#f8f9fa",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={process.env.PUBLIC_URL + "/img/logo.png"}
                        alt="Logo"
                        style={{ width: "40px", height: "40px" }}
                    />
                    <span
                        style={{
                            display: "inline-block",
                            fontSize: "25px",
                            padding: "15px 0px 0px 10px",
                            color: "#c59a83",
                            fontWeight: "600",
                        }}
                    >
                        Evento
                    </span>
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleDialogClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 10,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <Close />
                </IconButton>
                <DialogContent
                    sx={{
                        width: "600px",
                        height: "350px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className="social_login_container">
                        <GoogleLoginButton />
                        <NaverLoginButton />
                        <KakaoLoginButton />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default LoginDialog;
