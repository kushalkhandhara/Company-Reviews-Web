import Navbar from "./components/Navbar/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
// import Blacklist from "./pages/Blacklist/Blacklist"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import AddReview from "./pages/Add_Review/AddReview"
import ViewReview from "./pages/View_Review/ViewReview"
import Network from "./pages/Network/Network"
import Profile from "./pages/Profile/Profile"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="/blacklist" element={<Blacklist/>} /> */}
          <Route path="/login" element={<Login/>} /> 
          <Route path="/signup" element={<SignUp/>} /> 
          <Route path="/addReview" element={<AddReview/>} />  
          <Route path="/viewReviews" element={<ViewReview/>} />  
          <Route path="/network" element={<Network/>} />  
          <Route path="/profile" element={<Profile/>} />  
        </Routes>
      <Footer/>
    </>
  )
}

export default App
