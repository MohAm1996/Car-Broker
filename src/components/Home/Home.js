import './Home.css'
import homeImage from "../../Assets/HomeImages.png"
import { useState,useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
function Home() {
    const [btnsActive,setbtnActive] = useState("testdrive")
    const testDriveActive = () => {
        setbtnActive("testdrive")
    }
    const moreDetailsActive = () => {
        setbtnActive("moredetails")
    }

    useEffect(()=>{
        Aos.init(
          {
            duration: 2000
          }
        )
        }, [])

    return (
        <div className="home">
            <div className='secContainer'>
                <div data-aos='fade-up' className="homeText">
                    <span className='homeSpan'>
                        Meet your new car
                    </span>
                    <h1 className="homeTitle">
                        Honda Civic Type R
                    </h1>
                    <div className='btns flex'>
                        <button  data-aos='fade-right' className={` btn ${btnsActive =="moredetails"? "primaryBtn": "secondbtn"}`} onClick={()=>setbtnActive("moredetails")}>More Details</button>
                        <button data-aos='fade-left'  className={`btn ${btnsActive =="testdrive"? "primaryBtn": "secondbtn"}`} onClick={()=>setbtnActive("testdrive")}>Test Drive</button>
                    </div>

                </div>
                <div data-aos='fade-down-right' className='homeImage'>
                    <img src={homeImage} alt="" />
                </div>,
            </div>
        </div>
    )
}
export default Home;