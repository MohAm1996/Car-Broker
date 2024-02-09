import React, { useState } from 'react';
import './Header.css'
import logo from "../../Assets/logo.png"
import { TbGridDots } from "react-icons/tb";
import Navbar from './Navbar';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(true);
      };
    const closeMenu = () => {
        setShowMenu(false);
      };
    return (
       
        <div className="header flex" >
            <div className='logoDiv'>
                <img src={logo} alt='' className='logo' />
            </div>
           <Navbar closeMenu={closeMenu} menuState={showMenu} />

            <div className="signUp flex ">
                <div className="text btn primaryBtn">Sign Up</div>
                <TbGridDots className="icon gridDotsIcon" onClick={toggleMenu}   />

            </div>
        </div>
    )
}
export default Header;