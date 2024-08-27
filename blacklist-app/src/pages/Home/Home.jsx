import "./Home.css";
import Home1 from "./Section1/Home1";
import Home2 from "./Section2/Home2";
import Home3 from "./Section3/Home3";
import Home4 from "./Section4/Home4";
import Home5 from "./Section5/Home5";
import Home6 from "./Section6/Home6";
import Home7 from "./Section7/Home7";

export default function Home() {
  return (
    <div className="home">
      <Home1/>
      <Home2/>
      <Home3/>
      <Home4/>
      <Home5/>
      <Home6/>
      <Home7/>
    </div>
  )
}
