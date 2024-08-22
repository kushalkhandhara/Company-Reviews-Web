import "./Home3.css"
import image from "../../../assets/scroll-side3.jpg"
export default function Home3() {
  return (
    <div className="home3">
        <div className="home3-main">
            <div className="home3-side1">
                <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="home3-side2">
                <div className="home3-side2-header">
                    <h2>
                        In-Depth Company Reviews By Real Employees 
                    </h2>
                </div>
                <div className="home3-side2-para">
                    <p>
                    Gain deeper understanding of work environments through detailed employee reviews and make your career moves with confidence. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
