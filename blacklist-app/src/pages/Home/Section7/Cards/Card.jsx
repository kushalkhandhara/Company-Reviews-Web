import "./Card.css";
import { FaQuoteRight } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className="home7-card">
        
        <div className="home7-card-header">
            <h3>
                {props.title}
            </h3>
            <p>
                {props.para1} 
            </p>
            <p>
                {props.para1} 
            </p>
        </div>
        <div className="home7-card-icon">
            <FaQuoteRight/>
        </div>
    </div>
  )
}
