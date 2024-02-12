function Brand(props){
    const brand =props.brand;
    return (
        <div data-aos='fade-up' className='brand'>
        <div className='imageDiv'>
            <img src={brand.logo} alt="" />
        </div>
        <div className='info'>
            <h3>{brand.name}</h3>
            <span>from ${brand.price}k</span>
        </div>
    </div>
    )
}
export default Brand