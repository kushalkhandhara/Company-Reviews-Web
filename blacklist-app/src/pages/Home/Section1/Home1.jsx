import "./Home1.css";
import HeroImg1 from "../../../assets/hero-side1.jpg"
import HeroImg2 from "../../../assets/hero-side2.jpg"
export default function Home1() {
  return (
    <div className="home1">
        <div className="home1-main">
        
            <div className="home1-side1">
                <div className="home1-header">
                    <h1>
                        Discover Genuine 
                    </h1>
                    <h1>
                    Employee Reviews For 
                    </h1>
                    <h1>
                    Top Companies 
                    </h1>
                </div>
                <div className="home1-para">
                    <p>Our platform provides authentic insights by employees on various companies, helping you make informed career decisions based on real experiences. </p>
                </div>
                <div className="home1-button mt-4">
                    <button>
                        Create Your Account Now
                    </button>
                </div>
            </div>

            <div className="home1-side2">
                <div className="img-main">
                    <div className="img-side1">
                        <img src={HeroImg1} className="img-fluid" alt="" />
                    </div>
                    <div className="img-side2">
                        <img src={HeroImg2} className="img-fluid" alt="" />
                    </div>
                    <div className="img-service">
                        <h3>24H</h3>
                        <h6>Service</h6>
                    </div>
                    <div className="img-recommend">
                        <q>
                            
                            Highly Recommend Platform
                            
                        </q>
                    </div>
                </div>


            </div>
            
        </div>
    </div>
  )
}
