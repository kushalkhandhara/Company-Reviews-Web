import Card from "./Cards/Card";
import "./Home7.css";

export default function Home7() {
  return (
    <div className="home7">
        <div className="home7-header">
            <p>
                Testimonials
            </p>
            <h3>
                What People Say 
            </h3>
        </div>
        <div className="home7-cards">
            <Card title="Trusted By Many Users "
            para1="Company Reviews is a game-changer. "
            para2 = "I always check reviews before applying. "
             />
            <Card title="Highly Reliable Platform " para1="Trustworthy and thorough reviews by employees. " para2="Extremely helpful in career decisions. "/>
            <Card title="An Essential Resource "
            para1="Trustworthy and thorough reviews by employees. "
            para2="Extremely helpful in career decisions. "
             />
        </div>
    </div>
  )
}