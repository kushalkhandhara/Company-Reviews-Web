import "./Home4.css"
import image from "../../../assets/scroll-side2.jpg"
export default function Home4() {
  return (
    <div className="home4">
        <div className="home4-main">
            <div className="home4-side1">
                <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="home4-side2">
                <div className="home4-side2-header">
                    <h2>
                    Detailed Insights Into Work Cultures 
                    </h2>
                </div>
                <div className="home4-side2-para">
                    <p>
                    Gain deeper understanding of work environments through detailed employee reviews and make your career moves with confidence. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
