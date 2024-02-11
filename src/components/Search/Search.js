import './Search.css'
import { IoIosSearch } from "react-icons/io";

function Search() {
    return (
        <div className='search'>
            <div className="setContainer container">
                <h2 className='title'>Which vehicle you are looking for?</h2>
                <div className="searchinput">
                    <input type="text" placeholder='Type' />
                    <input type="number" placeholder='Year' />
                    <input type="text" placeholder='Model' />
                    <input type="number" placeholder='Price' />
                    <button className='btn primaryBtn'><IoIosSearch className='searchIcon'/><span>Search</span></button>
                </div>
            </div>
        </div>
    )
}
export default Search;

