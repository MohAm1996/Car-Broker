import './Auction.css'
import NavgationScroll from "../NavigationScroll/NavigationScroll"
import pic1 from '../../Assets/pngcars1.png'
import pic2 from '../../Assets/pngcars2.png'
import pic3 from '../../Assets/pngcars3.png'
import pic4 from '../../Assets/pngcars4.png'
import pic5 from '../../Assets/pngcars5.png'
import pic6 from '../../Assets/pngcars6.png'
import CarAuction from './CarAuction'
function Auction() {
    const carObj = [
        {
            image: pic1,
            title: "BMW 3 Series",
            miles: "7500",
            engine: "2.0L Inline-4 Turbo",
            price: "40,000"
        },
        {
            image: pic2,
            title: "Kia Forte",
            miles: "8500",
            engine: "2.0L Inline-4",
            price: "18,000"
        },
        {
            image: pic3,
            title: "Kia Telluride",
            miles: "5000",
            engine: "3.8L V6",
            price: "42,000"
        },
        {
            image: pic4,
            title: "Used 2019 Audi S4 Premium Plus",
            miles: "11457 ",
            engine: "AWD 4-Cylinder Turbo",
            price: "41,566"
        },
        {
            image: pic5,
            title: "Mercedes-Benz E-Class",
            miles: "6000",
            engine: "3.0L Inline-6 Turbo",
            price: "55,000"
        },
        {
            image: pic6,
            title: "Mercedes-Benz S-Class",
            miles: "8500",
            engine: "4.0L V8 Biturbo",
            price: "85,000"
        }





    ]
    return (
        <div className='auction container'>
            <NavgationScroll title="Active Auctions" />
            <div className="carBox">
                {carObj.map((car)=>{
                    return <CarAuction car ={car}/>
                })}
            </div>  
        </div>
    )
}
export default Auction;