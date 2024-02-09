import { IoIosCloseCircle } from "react-icons/io";


function Navbar() {
    return (<div className='navbar'>
        <ul className="menu">
            <li className="listItem">
                <a href="/" className='link'>Used Cars</a>
            </li>
            <li className="listItem">
                <a href="/" className='link'>New Cars</a>
            </li>
            <li className="listItem">
                <a href="/" className='link'>Aucation</a>
            </li>
            <li className="listItem">
                <a href="/" className='link'>Sellers</a>
            </li>
        </ul>
        <IoIosCloseCircle className="icon closeIcon" />

    </div>)
}
export default Navbar