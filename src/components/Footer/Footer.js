import './Footer.css'
function Footer() {
    return (
        <div className='Footer container'>
            <div className="content">
            <div className="items">
                <section className="sec">
                    <h3 className='title'>About</h3>
                    <ul>
                        <li>How it works</li>
                        <li>Careers</li>
                        <li>Affliates</li>
                        <li>Media</li>
                    </ul>
                </section>
                <section className="sec">
                    <h3 className='title'>Become Seller</h3>
                    <ul>
                        <li>Add Vehicles</li>
                        <li>Resourcce center</li>
                        <li>Bonds</li>
                        <li>Release Dates</li>
                    </ul>
                </section>
                <section className="sec">
                    <h3 className='title'>Community</h3>
                    <ul>
                        <li>Recommendations</li>
                        <li>Gift Cards</li>
                        <li>Top Ups</li>
                        <li>Selling</li>
                    </ul>
                </section>
                <section className="sec">

                    <h3 className='title'>Booking Support</h3>
                    <ul>
                        <li> Updates for Covid-19</li>
                        <li>Help center</li>
                        <li>Garages</li>
                        <li>Trust & Safety</li>
                    </ul>
                </section>
            </div>
            </div>
            <div className="copyright">
                <div>
                    2023 All right reserved
                </div>
                <div className='dev'>
                    MedDev
                </div>
            </div>
        </div>
    )
}
export default Footer;