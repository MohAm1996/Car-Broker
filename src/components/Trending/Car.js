function Car(props) {
    const carObj=props.car;
    return (
        <div className='car'>
            <div className='imageCar'>
                <img src={carObj.image} alt="" />
            </div>
            <div className='description'>
                <h3>{carObj.title}</h3>
                <span className='melage'>{carObj.miles} Miles</span>
                <h4>{carObj.engeen}</h4>
            </div>
            <div className="inforamtion">
                <div className='price'>${carObj.price}</div>
                <div className='bestSeller'>Best Seller</div>
            </div>
        </div>
    )
}


export default Car;