import React from 'react'
import introduceGIF1 from "../assets/img/introduce2.gif"
import introduce2 from "../assets/img/introduce1.jpg"
import featureGIFT from "../assets/img/feature1.gif"
import feature1 from "../assets/img/feature2.jpg"
import banner from "../assets/img/banner.png"
import logo from "../assets/img/Logo_white.png"
import Header from '../components/Header'
import hrspike from "../assets/img/hrspike.png"
import steamlogo from "../assets/img/STEAM_logo.png"
import humblestorelogo from "../assets/img/HUMBLESTORE_logo.png"
import xboxlogo from "../assets/img/XBOXOne_logo.png"
import ps4logo from "../assets/img/PS4_logo.png"
import ioslogo from "../assets/img/IOS_logo.png"
import androidlogo from "../assets/img/android_logo.png"
import Footer from '../components/Footer'

export const HomePage = () => {
  return (
    <div className='' style={{backgroundColor: "#86DF93"}}>
        <div className='position-relative' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Header />

            <div className='h-100' style={{ minHeight: "800px" }}>
                <div className='h-100' style={{ height: "500px" }}></div>
            </div>

            {/* Blur overlay ở dưới */}
            <div 
                className="position-absolute bottom-0 start-0 w-100"
                style={{
                height: "120px",
                background: "linear-gradient(to bottom, rgba(0,128,0,0) 0%, #88db88 100%)"
                }}
            />
        </div>

        <div className='row mt-5 mb-5'>
            <div className='my-auto'>
                <h3 className='fw-bold'>Welcome to PYCORE!</h3>
                <p>Experience the thrill of our one-of-a-kind game.</p>
            </div>
            <div className='d-flex w-50 mx-auto justify-content-center'>
                <img src={introduceGIF1} alt="" className='img-fluid rounded'/>
            </div>
        </div>
        <hr style={{background: `url(${hrspike}) repeat-x 0 0`, height: "6px", border: "0"}}/>

        <div className='row mt-5'>
            <h2 className='fw-bold mb-5'>Features</h2>
            <div className='col-md-1'></div>
            <div className='col-md-5 text-center my-auto'>
                <img src={
                    featureGIFT
                } alt="" />
            </div>
            <div className='col-md-5 text-start'>
                <div className=''>
                    <p className=''>
                        <p><span className='fw-bold'>Create the farm of your dreams:</span> Turn your overgrown fields into a lively and bountiful farm!</p>
                        <p><span className='fw-bold'>Learn to live off the land:</span> Raise animals, go fishing, tend to crops, craft items, or do it all! The choice is yours...</p>
                        <p><span className='fw-bold'>Become a part of the local community:</span> Pelican Town is home to over 30 residents you can befriend!</p>
                        <p><span className='fw-bold'>Meet someone special:</span> With 12 townsfolk to date, you may even find someone to start a family with!</p>
                        <p><span className='fw-bold'>Explore vast, mysterious caves:</span> Encounter dangerous monsters & valuable treasures deep underground!</p>
                        <p><span className='fw-bold'>Customize:</span> There are hundreds of character & home decoration options to choose from!</p>
                    </p>
                </div>
            </div>
        </div> <hr/>

        <div className='row'>
            <div className='mx-auto mb-5'>
                <h3 className='fw-bold text-center'>Explore More!</h3>
                <p className='text-center'>Learn more about our game.</p>
                <div className='d-flex border p-2 mt-5 w-50 mx-auto custom-pointer'>
                    <img src={introduce2} alt="" className='img-fluid' style={{maxWidth: "100px"}}/>
                    <div className='text-start ms-2'>
                        <p className='fw-bold'>Game modes</p>
                        <p>Discover various game modes.</p>
                        <div className='d-flex'>
                            <small className='px-1 me-2' style={{backgroundColor: "#e0e0e0"}}>Multiplayer</small>
                            <small className='px-1' style={{backgroundColor: "#e0e0e0"}}>Farming</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <img src={introduce2} alt="" className='img-fluid rounded w-50'/>
            </div>
        </div> <hr style={{background: `url(${hrspike}) repeat-x 0 0`, height: "6px", border: "0"}}/>
        
        <div className='mt-5'>
            <div className='d-flex justify-content-center'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={steamlogo} alt="" className=''/>
                            </td>
                            <td>
                                <img src={humblestorelogo} alt="" className='me-3'/>
                            </td>
                            <td>
                                <img src={xboxlogo} alt="" className='me-3'/>
                            </td>
                            <td>
                                <img src={ps4logo} alt="" className='me-3'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src={ioslogo} alt="" className='me-3'/>
                            </td>
                            <td>
                                <img src={androidlogo} alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
