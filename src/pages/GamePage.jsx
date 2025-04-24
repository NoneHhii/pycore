import React from 'react'
import { Button } from 'react-bootstrap'
import banner from "../assets/img/Illustration_1.png"
import userImg from "../assets/img/user.png"
import locationImg from "../assets/img/location.png"
import serverImg from "../assets/img/Server.png"
import gameImg from "../assets/img/Standard.png"
import { useState } from 'react'

const buttons = ["Relax", "Action", "Farming", "Online", "Offline"];

const games = [
    {
        id: 1,
        name: "Farming",
        img: gameImg
    },
    {
        id: 2,
        name: "Farming",
        img: gameImg
    },
    {
        id: 3,
        name: "Farming",
        img: gameImg
    },
    {
        id: 4,
        name: "Farming",
        img: gameImg
    },
    {
        id: 5,
        name: "Farming",
        img: gameImg
    },
    {
        id: 6,
        name: "Farming",
        img: gameImg
    },
    {
        id: 7,
        name: "Farming",
        img: gameImg
    },
    {
        id: 8,
        name: "Farming",
        img: gameImg
    },
    {
        id: 9,
        name: "Farming",
        img: gameImg
    },
    {
        id: 10,
        name: "Farming",
        img: gameImg
    },
]

const GamePage = () => {
    const [activeType, setActiveType] = useState("Relax");

  return (
    <div className='mb-5'>
        <div className='d-flex justify-content-center'>
            <div className='my-auto text-start me-3'>
                <h2 className='mb-2'>Want to experience quality 2D game?</h2>
                <p className='mb-4'>You can find quality and interesting 2D games to immerse yourself in your past memories.</p>

                <Button className='text-white shadow border-0 px-5 py-2' style={{backgroundColor: "#F53838"}}>Get Started</Button>
            </div>
            <div className=''>
                <img src={banner} alt="" className='img-fluid'/>
            </div>
        </div>
        <div className='d-flex justify-content-around shadow p-3' style={{marginTop: "100px"}}>
            <div className='d-flex justify-content-center'>
                <img src={userImg} alt="" className='img-fluid' style={{maxHeight: "55px"}}/>
                <div className='text-start ms-4'>
                    <p className='fw-bold m-0'>90+</p>
                    <p>Users</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <img src={locationImg} alt="" className='img-fluid' style={{maxHeight: "55px"}}/>
                <div className='text-start ms-4'>
                    <p className='fw-bold m-0'>10+</p>
                    <p>Countries</p>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <img src={serverImg} alt="" className='img-fluid' style={{maxHeight: "55px"}}/>
                <div className='text-start ms-4'>
                    <p className='fw-bold m-0'>50+</p>
                    <p>Games</p>
                </div>
            </div>
        </div>
        <div className='d-flex text-start mt-4 flex-wrap'>
            {buttons.map((btn, index) => (
                <Button
                    key={index}
                    className={`bg-white text-dark fw-bold border-0 me-3 px-4 mb-2 ${activeType === btn ? "active" : ""}`}
                    onClick={() => setActiveType(btn)}
                >
                    {btn}
                </Button>
            ))}
        </div>  
        <div className='row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 justify-content-center'>
                {games.map((game) => (
                    <div key={game.id} className='col shadow p-3 m-4' style={{borderRadius: "20px", maxWidth: "200px"}}>
                        <div className='position-relative' style={{}}>
                            <img src={game.img} alt="" className='img-fluid'/>
                            <p className='position-absolute' style={{top: "0", right: "0", color: "#4F5665"}}>Free</p>
                        </div>
                        <div className='text-start mt-3 fw-bold'>
                            <p>{game.name}</p>
                        </div>
                        <div>
                            <Button 
                                className='bg-light fw-bold me-2' 
                                style={{color: "#F53838", border: "2px solid #F53838", borderRadius: "20px", paddingLeft: "30px", paddingRight: "30px"}}
                            >
                                Get
                            </Button>
                            <Button 
                                className='bg-light fw-bold' 
                                style={{color: "#3BD200", border: "2px solid #3BD200", borderRadius: "15px"}}
                                
                            >
                                +
                            </Button>
                        </div>
                    </div>
                ))}
        </div>
        {/* Wishlist */}
        <div className='mt-5'>
            <h3>Choose Your Wishlists</h3>
            <p style={{color: "#4F5665"}}>Add the game you want to your wishlist and we'll notify you when it's ready.</p>
        </div>
        <div className='row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 justify-content-center'>
            {games.map((game) => (
                <div className='col shadow p-3 m-4' style={{borderRadius: "20px", maxWidth: "200px"}}>
                    <div className='position-relative' style={{}}>
                        <img src={game.img} alt="" className='img-fluid'/>
                        <p className='position-absolute' style={{top: "0", right: "0", color: "#4F5665"}}>Free</p>
                    </div>
                    <div className='text-start mt-3 fw-bold'>
                        <p>{game.name}</p>
                    </div>
                    <div>
                        <Button 
                            className='bg-light fw-bold me-2' 
                            style={{color: "#F53838", border: "2px solid #F53838", borderRadius: "20px", paddingLeft: "30px", paddingRight: "30px"}}
                        >
                            Get
                        </Button>
                        <Button 
                            className='bg-light fw-bold' 
                            style={{color: "#3BD200", border: "2px solid #3BD200", borderRadius: "15px"}}
                            
                        >
                            +
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default GamePage
