import "./Add_Review3.css";
import Card from "./Card/Card";
import img from "../../../assets/submitreview.jpg"

export default function Add_Review3() {
  return (
    <>
        <div className="addreview3">
            <div className="addreview3-header">
                <h2>
                    Our Offered Services at
                </h2>
                <h2>
                Company Reviews 
                </h2>
            </div>
            <div className="addreview3-main">
                <div className="addreview3-side1">
                    <Card numb="1" header="Review Submission Portal " desc="Easily submit your feedback quickly."/>
                    <Card numb="2" header="Analytics Dashboard Access  " desc="Visualize trends and patterns in feedback. "/>
                </div>
                <div className="addreview3-side2">
                    <div className="addreview3-side2-img">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="addreview3-side1">
                    <Card numb="3" header="Anonymous Reporting" desc="Keep your identity fully secure. "/>
                    <Card numb="4" header="Custom Surveys " desc="Create tailored surveys for employees. "  />
                </div>
            </div>
        </div>
    </>
  )
}
