import './Search.css'
import { IoIosSearch } from "react-icons/io";
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Search() {
    useEffect(()=>{
        Aos.init(
          {
            duration: 1000
          }
        )
        }, [])
    return (
        <div className='search'>
            <div className="setContainer container">
                <h2 data-aos='fade-up' className='title'>Which vehicle you are looking for?</h2>
                <div className="searchinput">
                    <input data-aos='fade-up' type="text" placeholder='Type' />
                    <input data-aos='fade-up' type="number" placeholder='Year' />
                    <input data-aos='fade-up' type="text" placeholder='Model' />
                    <input data-aos='fade-up' type="number" placeholder='Price' />
                    <button data-aos='fade-up' className='btn primaryBtn'><IoIosSearch className='searchIcon'/><span>Search</span></button>
                </div>
            </div>
        </div>
    )
}
export default Search;

