import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Register } from './pages/Register'
import Login from './pages/Login'
import { useEffect } from "react"
import Cookies from "js-cookie"
import axios from "axios"
import { useState } from "react"
import GamePage from "./pages/GamePage"
import { HomePage } from "./pages/HomePage"

function App() {

  const [userID, setUserID] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const id = Cookies.get("userID");
    const token = Cookies.get("token");
    if(id) {
      console.log(userID);
      console.log(token);
      setUserID(id);
      
    }
  }, []);

  useEffect(() => {
    if(userID) {
      handleGetUser();
    }
  }, [userID]);

  const handleGetUser = async() => {
    try {
      const res = await axios.get(`https://pycore.onrender.com/api/v1/user?id=${userID}`);

      setUser(res.data.user);
      console.log(user);
    } catch (error) {
      console.error("Lỗi khi lấy user: ", error);
    }
  }

  const handleLogOut = () => {
    Cookies.remove("userID");
    setUser(null);
  }

  return (
    <Router>
      {/* <div className='app-contain'> */}
        {/* <Header user={user} handleLogOut={handleLogOut}/>  */}
          {/* <div className='main-content'> */}
            <Routes>
            <Route path='/' element={<HomePage/>}/>
              <Route path='/gamepage' element={<GamePage/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          {/* </div> */}
        
      {/* </div> */}
    </Router>
  )
}

export default App

