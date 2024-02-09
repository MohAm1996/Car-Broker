import React, { useEffect,useState } from 'react';

import { IoIosCloseCircle } from "react-icons/io";


function Navbar({menuState,closeMenu}) {


    const navbar = <div className={`navbar ${menuState ? "show" : "hidden"}`}>
        <ul className="menu">
            <li className="listItem">
                <a href="/" className='link' >Used Cars</a>
            </li>
            <li className="listItem">
                <a href="/" className='link' >New Cars</a>
            </li>
            <li className="listItem">
                <a href="/" className='link' >Aucation</a>
            </li>
            <li className="listItem">
                <a href="/" className='link' >Sellers</a>
            </li>
        </ul>
        <IoIosCloseCircle className="icon closeIcon" onClick={closeMenu} />
    </div>
    return navbar;
}
export default Navbar