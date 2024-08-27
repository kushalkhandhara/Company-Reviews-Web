import "./Add_Review1.css";
import heroImg from "../../../assets/reviews-hero.png"

export default function Add_Review1() {
  return (
    <>
    <div className="addreview">
        <div className="addreview1-main">
            <div className="addreview1">
                <div className="addreview1-header">
                    <h2>Submit 
                    Your Company
                    Reviews Here </h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat natus ex. Expedita magnam iusto, consequuntur reprehenderit consectetur enim facere error vero odit autem sunt reiciendis facilis neque exercitationem ipsam!
                    </p>
                    <button>Add Review Now</button>
                </div>
            </div>
            
            <div className="addreview2 mt-0">
                <img src={heroImg} className="img-fluid" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}
