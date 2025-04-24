import React from "react";
import { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/img/Logo.png"

const Header = ({user, handleLogOut}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [isShowDropMenu, setIsShowDropMenu] = useState(false);


    if (location.pathname === "/register" || location.pathname === "/login") return null;

    return (
        <Navbar expand="lg" className="mx-2">

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center">
                <Nav.Link as={Link} to="/" style={{marginRight: "40px", color: "#86DF93"}}>Home</Nav.Link>
                <Nav.Link as={Link} to="/" style={{marginRight: "40px", color: "#86DF93"}}>Game</Nav.Link>
                <Nav.Link as={Link} to="/" style={{marginRight: "40px", color: "#86DF93"}}>Group</Nav.Link>
                <Nav.Link as={Link} to="/" style={{marginRight: "40px", color: "#86DF93"}}>Developer</Nav.Link>
                <Nav.Link as={Link} to="/" style={{marginRight: "40px", color: "#86DF93"}}>About us</Nav.Link>
            </Navbar.Collapse>
            {!user ? (
                <div>
                    <Button 
                        className="bg-transparent border-0 text-white fw-bold"
                        onClick={() => navigate("/login")}
                    >
                        Sign In
                    </Button>

                    <Button 
                        className="bg-transparent fw-bold px-4 regis-hover" 
                        style={{
                            border: "1px solid #86DF93", 
                            borderRadius: "20px", 
                            color: "#86DF93",
                        }}
                        onClick={() => navigate("/register")}
                    >
                        Sign Up
                    </Button>
                </div>
            ): (
                <div className="position-relative">
                    <div 
                        onClick={() => setIsShowDropMenu(!isShowDropMenu)}
                    >
                        <img src={user.photo_url} alt="" className="img-fluid rounded-circle" style={{maxHeight: "30px"}}/>
                    </div>

                    <div 
                        className={`bg-dark dropdown-menu dropdown-menu-end ${isShowDropMenu ? "show" : ""}`}
                        style={{right: "0", left: "auto"}}
                    >
                        <h5 className="dropdown-item text-white ">{user.username}</h5>
                        <div className="w-100 mx-auto" style={{borderBottom: "1px solid #fff"}}></div>
                        <Button className="dropdown-item text-white" onClick={handleLogOut}>
                            Đăng xuất
                        </Button>
                    </div>
                </div>
            )}
        </Navbar>
    )
}

export default Header;