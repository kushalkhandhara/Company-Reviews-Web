import Card from "./Card/Card"
import "./Home6.css"
import { AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { AiFillThunderbolt } from "react-icons/ai";
export default function Home6() {
  return (
    <div className="home6">
        <center>
            <div className="home6-header">
                <h2>
                    See What We Can Offer You ?
                </h2>
                <p>
                Discover key advantages and unique aspects from genuine employee reviews to aid your career decisions. 
                </p>
            </div>
        </center>
        <div className="home6-cards">
            <Card icon={ <AiFillLike />}
            title="Honest Feedback" para = " Get authentic insights from employees about their companies." />
            <Card icon={ <FaHeart  />}
            title="Verified Reviews " para = "Trustworthy feedback from verified company employees. " />
            <Card icon={ <AiFillLike />}
            title="Career Moves  " para = "Make informed career decisions backed by reviews. " />
            <Card icon={ <AiFillThunderbolt />}
            title="Real Experiences " para = " Read real experiences shared by employees. " />
            <Card icon={ <AiFillLike />}
            title="Work Environment " para = " Understand the work environment before joining. " />
            <Card icon={ <TiTick />}
            title="Company Culture " para = " Learn about company culture from employees' perspectives. " />
        </div>
    </div>
  )
}
