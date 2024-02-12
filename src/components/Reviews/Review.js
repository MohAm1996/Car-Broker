import { FaStar } from "react-icons/fa";

function Review(props) {
    const rv = props.review;
    return (
        
        <div data-aos='fade-up' className='review'>
            <div className='car'>
                <div className='imageCar'>
                    <img src={rv.image} alt="" />
                </div>
                <div className='carInfo'>
                    <h3>{rv.title}</h3>
                    <span className='description'>{rv.description}</span>
                </div>
                <div className="client">
                    <div className='clientInfo'>
                        <div className='image'>
                            <img src={rv.clienImage} alt="" />
                        </div>
                        <div className="info">
                            <h3>{rv.clientName}</h3>
                            <p>{rv.clienJob}</p>
                        </div>
                    </div>
                    <div className='rating'>
                        <FaStar className='starIcon' /><span className="rate">{rv.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review;