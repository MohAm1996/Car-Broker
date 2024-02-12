import './Sellers.css'
import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'
import logo5 from '../../Assets/logo5.png'
import Brand from './Brand';
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Sellers() {
    const brands = [
        {
            logo: logo1,
            name: "Toyota",
            price: "20"
        },
        {
            logo: logo2,
            name: "Volkswagen",
            price: "50"
        },
        {
            logo: logo3,
            name: "Mercedes Benz",
            price: "60"
        },
        {
            logo: logo4,
            name: "Honda",
            price: "30"
        },
        {
            logo: logo5,
            name: "Hyundia",
            price: "20"
        },
        {
            logo: logo2,
            name: "Volkswagen",
            price: "30"
        }
    ];
    useEffect(()=>{
        Aos.init(
          {
            duration: 2000
          }
        )
        }, [])
    return (
        <div className='Sellers'>
            <div data-aos='fade-up' className='container'>
                <h1 className='title'>Explore top sellers in town</h1>
                <p className='description'>Joseph Samuel Girard holds the Guinness World Record for being the greatest salesman in the world.</p>
                <div className='brands'>
                {
                    brands.map((brand)=> {
                        return  <Brand brand={brand}/>
                    })
                }
                </div>

            </div>
        </div>
    )
}
export default Sellers;