
import { LuArrowRight } from "react-icons/lu";
import { LuArrowLeft} from "react-icons/lu";
import "./NavigationScroll.css"
function NavigationScroll(props){
    return (
        <div className="boxHeader">
        <h2>{props.title}</h2>
        <div className='navigation'>
            <div className="left-arrow"><LuArrowLeft /></div>
            <div className="right-arrow"><LuArrowRight /></div>
        </div>
    </div>
    )
}
export default NavigationScroll;