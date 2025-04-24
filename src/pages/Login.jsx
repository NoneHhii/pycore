import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import bgImg_login from "../assets/img/bg_login.gif"
import logo_white from "../assets/img/Logo_white.png"
import ggl_logo from "../assets/img/GoogleLogo.png"

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleLogin =  async (e) => {
        e.preventDefault();
        setMessage("");

        if (!emailRegex.test(email)) {
            setMessage("Email không hợp lệ!");
            return;
        }

        const Email = email;
        const Password = password;

        try {
            const res = await axios.post("https://pycore.onrender.com/api/v1/login", {
                Email,
                Password,
            })

            // localStorage.setItem("user", JSON.stringify(res.data.user));
            // localStorage.setItem('token', res.data.token);
            Cookies.set("userID", res.data.user, { expires: 24 });
            Cookies.set("token", res.data.token, { expires: 24 });
            navigate("/");
            window.location.reload();
        } catch (error) {
            if (error.response) {
                console.error("Response data:", error.response?.data);
                setMessage(error.response?.data?.message || "Có lỗi xảy ra!");
            } else if (error.request) {
                console.error("No response received:", error.request);
                setMessage("Không nhận được phản hồi từ server.");
            } else {
                console.error("Error message:", error.message);
                setMessage("Đã xảy ra lỗi khi thực hiện yêu cầu.");
            }
        }
    }

    return (
        <div className="h-100"
            style={{backgroundImage: `url(${bgImg_login})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
        >

            <div className="login-form">
                <div>
                    <img src={logo_white} alt="" className='mt-3'/>
                </div>

                <div className='mt-4'>
                    <input 
                        type="text" 
                        style={{backgroundColor: "#2a2731", minWidth: "350px", boxShadow: "0 0 0 0.5px #fff"}}
                        className="rounded px-2 py-1 border-0 mb-2 text-white"
                        placeholder='Email...'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    /> <br />

                    <input 
                        type="password" 
                        style={{backgroundColor: "#2a2731", minWidth: "350px", boxShadow: "0 0 0 0.5px #fff"}}
                        className="rounded px-2 py-1 border-0 text-white"
                        placeholder='Mật khẩu...'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>

                <Button
                    className='btn border-0 text-dark fw-bold rounded mt-3'
                    style={{backgroundColor: "#ccff00", minWidth: "350px"}}
                    onClick={handleLogin}
                >
                    Đăng nhập
                </Button>

                <div className='my-3 d-flex align-items-center justify-content-center mx-auto' style={{maxWidth: "350px"}}>
                    <div className='flex-grow-1 border-bottom'></div>
                    <div className='text-white mx-5'>hoặc</div>
                    <div className='flex-grow-1 border-bottom'></div>
                </div>

                <Button
                    className='btn border-0 text-dark bg-white mt-4 fw-bold p-2'
                    style={{minWidth: "350px"}}
                    // onClick={handleGoogleLogin}
                > 
                    <img src={ggl_logo} alt="" className='img-fluid me-3' style={{maxHeight: "25px"}}/>
                    Đăng nhập với Google
                </Button>

                <div className="login-link text-white mt-1">
                    Don't have an account? <Link to="/register" className='text-decoration-none' style={{color: "#ccff00"}}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;