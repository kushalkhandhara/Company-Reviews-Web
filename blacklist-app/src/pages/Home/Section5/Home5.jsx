import "./Home5.css"
import image from "../../../assets/scroll-side1.jpg"
export default function Home5() {
  return (
    <div className="home5">
        <div className="home5-main">
            <div className="home5-side1">
                <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="home5-side2">
                <div className="home5-side2-header">
                    <h2>
                        Verified Reviews For Authentic Feedback 
                    </h2>
                </div>
                <div className="home5-side2-para">
                    <p>
                    Our verified reviews ensure that you get the most reliable and unbiased feedback from real employees in various companies. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
