import "./About.css";
import img from "../../assets/mission.png"
import img1 from "../../assets/goals.png"

export default function About() {
  return (
    <div className="about">
      <div className="about-main1">

        <div className="about-side1">
          <div className="about-header">
            <h2>Our Mission</h2>

          </div>
          <div className="about-para pt-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, possimus doloribus suscipit ex sapiente est libero corporis quos magnam esse ipsum soluta placeat hic! Quisquam iure sapiente itaque cumque, dicta natus qui iste numquam et maiores. Natus facilis laudantium doloremque impedit dicta fuga, ipsa doloribus voluptas ducimus ex, repellat, voluptatum numquam? Earum reiciendis sit fugiat adipisci alias consequatur atque illo.
            </p>
          </div>
        </div>
      
        <div className="about-side2">
          <img src={img} className="img-fluid" alt="" />
        </div>

      </div>
      <div className="about-main2">

        <div className="about-side1">
          <div className="about-header">
            <h2>Our Story</h2>

          </div>
          <div className="about-para pt-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, possimus doloribus suscipit ex sapiente est libero corporis quos magnam esse ipsum soluta placeat hic! Quisquam iure sapiente itaque cumque, dicta natus qui iste numquam et maiores. Natus facilis laudantium doloremque impedit dicta fuga, ipsa doloribus voluptas ducimus ex, repellat, voluptatum numquam? Earum reiciendis sit fugiat adipisci alias consequatur atque illo.
            </p>
          </div>
        </div>
      
        <div className="about-side2">
          <img src={img1} className="img-fluid" alt="" />
        </div>

      </div>



    </div>
  )
}
