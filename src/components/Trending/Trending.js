import NavigationScroll from '../NavigationScroll/NavigationScroll';
import './Trending.css'
import image3 from '../../Assets/image4.png'
import image2 from '../../Assets/image6.png'
import image1 from '../../Assets/image7.png'
import Car from './Car';
import { useEffect } from 'react';

import Aos from 'aos'
import 'aos/dist/aos.css'

function Trending() {
    const cars = [
        {
            image: image1,
            title: "Used 2019 Audi S4 Premium Plus",
            miles: "15698",
            engine: "AWD 4-Cylinder Turbo",
            price: "41,400"
        },
        {
            image: image2,
            title: "Used 2019 Audi S4 Premium Plus",
            miles: "2305",
            engine: "AWD 4-Cylinder Turbo",
            price: "26,400"
        },
        {
            image: image3,
            title: "Used 2019 Audi S4 Premium Plus",
            miles: "12635",
            engine: "AWD 4-Cylinder Turbo",
            price: "89,400"
        },
    ]
    useEffect(() => {
        Aos.init(
            {
                duration: 2000
            }
        )
    }, [])
    return (
        <div className='trending container'>
            <NavigationScroll title={"Trending Near You"} />
            <div className="carBox">
                {
                    cars.map((car) => {
                        return <Car car={car} />
                    })
                }
            </div>


        </div>
    )
}
export default Trending;