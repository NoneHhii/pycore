import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/img/Logo.png"
import logo_white from "../assets/img/Logo_white.png"
import bgImg from "../assets/img/bg_Img.png"
import bgImg_login from "../assets/img/bg_login.gif"
import ggl_logo from "../assets/img/GoogleLogo.png"
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const handleGoogleLogin = async() => {
  window.location.href = "https://pycore.onrender.com/auth/google";
};

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate("");
  const [user, setUser] = useState();


  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  const handleSignUp = async (e) => {
      e.preventDefault();
      setMessage("");
  
      // Validate email
      if (!emailRegex.test(email)) {
        setMessage("Email không hợp lệ!");
        return;
      }
  
      // Validate password
      // if (!passwordRegex.test(password)) {
      //   setMessage("Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ cái, số và ký tự đặc biệt.");
      //   return;
      // }

      const UserName = name;
      const Email = email;
      const Password = password;
  
      try {
        const res = await axios.post("https://pycore.onrender.com/api/v1/register", {
          Email,
          Password,
          UserName,
        });
  
        setMessage(res.data.user);
        console.log(res.data);
        Cookies.set("token", res.data.token, { expires: 24 });
        Cookies.set("userID", res.data.user, { expires: 24 });
        navigate('/');
        window.location.reload();
      } catch (error) {
        console.error("Error details:", error); // Log lỗi chi tiết
        console.error("Response data:", error.response?.data);
        setMessage(error.response?.data?.message || "Có lỗi xảy ra!");
      }
  };

  

  useEffect(() => {
    // Check if the URL contains the Google callback path
    if (window.location.pathname.includes("/auth/google/callback")) {
      // Extract the code from URL
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (code) {
        // Call the backend API to fetch user data using the code
        axios
          .get(`https://pycore.onrender.com/auth/google/callback?code=${code}`)
          .then((res) => {
            setUserData(res.data); // Store user data
            localStorage.setItem("authUser", JSON.stringify(res.data)); // Save in localStorage
            navigate("/"); // Redirect to homepage
          })
          .catch((error) => {
            setMessage("Lỗi khi lấy dữ liệu từ Google. Vui lòng thử lại."); // Show a user-friendly error message
            console.error("Lỗi lấy dữ liệu từ Google:", error);
          });
      } else {
        setMessage("Mã xác thực Google không có trong URL.");
      }
    }
  }, [navigate]);

  return (
    <div 
      className="signup-container h-100" 
      style={{backgroundImage: `url(${bgImg_login})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
    >
      
      <div className="signup-form">
        {/* <h1 className="signup-title">Create an account</h1> */}
        <div>
          <img src={logo_white} alt="" className='mt-3'/>
        </div>
        {/* <p className="signup-subtitle">Enter your details below</p> */}
        
        <Button
          className='btn border-0 text-dark bg-white mt-4 fw-bold p-2'
          style={{maxWidth: "350px"}}
          onClick={handleGoogleLogin}
        > 
          <img src={ggl_logo} alt="" className='img-fluid me-3' style={{maxHeight: "25px"}}/>
          Đăng nhập với Google
        </Button>

        <div className='my-3 d-flex align-items-center justify-content-center mx-auto' style={{maxWidth: "350px"}}>
          <div className='flex-grow-1 border-bottom'></div>
          <div className='text-white mx-5'>hoặc</div>
          <div className='flex-grow-1 border-bottom'></div>
        </div>

        <div>
          <input 
            type="text" 
            style={{backgroundColor: "#2a2731", minWidth: "350px", boxShadow: "0 0 0 0.5px #fff"}}
            className="rounded px-2 py-1 border-0 mb-2 text-white"
            placeholder='Tên đăng nhập...'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          /> <br />
          
          <input 
            type="email" 
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
        
        {message && <div className="message">{message}</div>}
        
        <Button
          className='btn border-0 text-dark fw-bold rounded mt-3'
          style={{backgroundColor: "#ccff00", minWidth: "350px"}}
          onClick={handleSignUp}
        >
          Đăng ký
        </Button>
        <div className="login-link text-white mt-1">
          Already have an account? <Link to="/login" className='text-decoration-none' style={{color: "#ccff00"}}>Log In</Link>
        </div>
      </div>
    </div>
  );
}
