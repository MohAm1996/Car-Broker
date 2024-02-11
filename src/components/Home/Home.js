import './Home.css'
import homeImage from "../../Assets/HomeImages.png"
import { useState } from 'react';
function Home() {
    const [btnsActive,setbtnActive] = useState("testdrive")
    const testDriveActive = () => {
        setbtnActive("testdrive")
    }
    const moreDetailsActive = () => {
        setbtnActive("moredetails")
    }

    return (
        <div className="home">
            <div className='secContainer'>
                <div className="homeText">
                    <span className='homeSpan'>
                        Meet your new car
                    </span>
                    <h1 className="homeTitle">
                        Honda Civic Type R
                    </h1>
                    <div className='btns flex'>
                        <button className={` btn ${btnsActive =="moredetails"? "primaryBtn": "secondbtn"}`} onClick={()=>setbtnActive("moredetails")}>More Details</button>
                        <button className={`btn ${btnsActive =="testdrive"? "primaryBtn": "secondbtn"}`} onClick={()=>setbtnActive("testdrive")}>Test Drive</button>
                    </div>

                </div>
                <div className='homeImage'>
                    <img src={homeImage} alt="" />
                </div>,
            </div>
        </div>
    )
}
export default Home;