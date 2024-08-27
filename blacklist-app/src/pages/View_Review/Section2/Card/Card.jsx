import "./Card.css";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import VerticallyCenterModal from "../Modal/VerticallyCenterModal";




export default function Card() {

    const [modalShow, setModalShow] = useState(false);




  return (
    <div className="review-card ">
        <div className="review-card-header">
            <h6>Company Name</h6>
            <h6>Company Website: </h6>
            <h6>Secret Name</h6>
            <h6>Worked As An : Intern</h6>
            <div className="rating d-flex gap-1">
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStarHalfAlt color="orange" />
            </div>
        </div>
        <div className="review-card-para mt-3">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet sapiente, nostrum repudiandae, quaerat est corporis illo mollitia assumenda fuga libero maiores. Architecto eligendi modi maxime quas rem! Eligendi vero, nostrum quaerat tempora ad repellat hic 
            </p>
        </div>
        <div className="view-button">
            <button onClick={() => setModalShow(true)}>View Review</button>
        </div>
        <VerticallyCenterModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
    </div>
  )
}
