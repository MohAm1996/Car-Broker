import './Reviews.css'
import user1 from "../../Assets/user1.png"
import user2 from "../../Assets/user2.png"
import user3 from "../../Assets/user3.png"

import image1 from "../../Assets/image1.png"
import image2 from "../../Assets/image8.png"
import image3 from "../../Assets/image9.png"

import { useEffect } from 'react'
import NavigationScroll from "../NavigationScroll/NavigationScroll"
import Review from './Review';
import Aos from 'aos'
import 'aos/dist/aos.css'
function Reviews() {
    useEffect(() => {
        Aos.init(
            {
                duration: 2000
            }
        )
    }, [])
    const reviews = [
        {
            image: image1,
            title: "2023 Cadiallac",
            description: "Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.",
            clientName: "Jakline Nelson",
            clienImage: user1,
            clienJob: "Chief Editor",
            rating: "4.89"
        },
        {
            image: image2,
            title: "2023 Cadiallac",
            description: "Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.",
            clientName: "Nicole Webb",
            clienImage: user2,
            clienJob: "Manager Atlantis",
            rating: "4.89"
        },
        {
            image: image3,
            title: "2023 Cadiallac",
            description: "Good cars are safe, fast, affordable to purchase, economical to operate, reliable, capacious, comfortable, and attractive.",
            clientName: "MedDev",
            clienImage: user3,
            clienJob: "YT Admin",
            rating: "4.89"
        }
    ]
    return (
        <div className='Review container'>
            <NavigationScroll title={"Recent Reviews"} />
            <div className="reviewsBox">
                {reviews.map((review) => {
                    return <Review review={review} />
                })}
            </div>

        </div>
    )
}
export default Reviews;