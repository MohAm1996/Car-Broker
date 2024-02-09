import React, { useState } from 'react';
import './Header.css'
import logo from "../../Assets/logo.png"
import { TbGridDots } from "react-icons/tb";
import Navbar from './Navbar';

function Header() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    const toggleNavbar = () => {
        console.log(isNavbarVisible);
        setIsNavbarVisible(!isNavbarVisible);
    };
    return (

        <div className="header flex" >
            <div className='logoDiv'>
                <img src={logo} alt='' className='logo' />
            </div>
            {isNavbarVisible && <Navbar />}

            <div className="signUp flex ">
                <div className="text btn primaryBtn">Sign Up</div>
                <TbGridDots className="icon gridDotsIcon" onClick={toggleNavbar}  />

            </div>
        </div>
    )
}
export default Header;