import React, { useEffect,useState } from 'react';

import { IoIosCloseCircle } from "react-icons/io";


function Navbar(props) {
    const [showMenu, setShowMenu] = useState(props.menuStats);
    useEffect(() => {
        setShowMenu(props.menuStats);
    }, [props.menuStats]);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        console.log(showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 767) {
          setShowMenu(false);
        }
      };
    const navbar = <div className={`navbar ${showMenu ? "show" : "hidden"}`}>
        <ul className="menu">
            <li className="listItem">
                <a href="/" className='link' onClick={closeMenuOnMobile}>Used Cars</a>
            </li>
            <li className="listItem">
                <a href="/" className='link' onClick={closeMenuOnMobile}>New Cars</a>
            </li>
            <li className="listItem">
                <a href="/" className='link' onClick={closeMenuOnMobile}>Aucation</a>
            </li>
            <li className="listItem">
                <a href="/" className='link' onClick={closeMenuOnMobile}>Sellers</a>
            </li>
        </ul>
        <IoIosCloseCircle className="icon closeIcon" onClick={toggleMenu} />
    </div>
    return navbar;
}
export default Navbar