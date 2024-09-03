import "./Contact.css";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

import axios from "axios";


export default function Contact() {

  // Setting Inputs data
  const [inputs, setInputs] = useState({});
  
  // handle Change Function
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values=>({...values,[name] : value}))
  }

  // Handle Submit Form
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8804/api/msgContact/msgContactForm",inputs);
      console.log(response.data);
      setInputs({
        name : "",
        email : "",
        message : "" 
      })
    }catch(error){
      console.log(error.message);
    }
  }



  return (
    <div className="contact">
      <div className="contact-main">

        <div className="contact-side1">
          <p>
            We&apos;re Here to Help 
          </p>
          <h3>
          Contact Us 
          </h3>
          <p>
          Reach out for collaborations or inquiries. 
          </p>
          <div className="contact-det">
            <FaMailBulk size={20} />
            <span className="ps-3">hello@companyreviews.com</span> 
          </div>
          <div className="contact-det mt-3">
            <FaPhoneAlt size={20} />
            <span className="ps-3">+1 9847998822 </span> 
          </div>
          <div className="contact-det mt-3">
            <FaLocationDot size={20} />
            <span className="ps-3">1234 Elm Street, NY 10001 </span> 
          </div>
        </div>

        <div className="contact-side2">

          <div className="contact-form">
            <form autoComplete="off" onSubmit={handleSubmit} method="POST">

            <div className="form-data mt-3">
              <div className="form-labe ps-2 mb-1">
                <label htmlFor="contactName">
                  Name
                </label>
              </div>
              <div className="form-inp">
                <input type="text" name="name" id="contactName" value={inputs.name || ""} onChange={handleChange} placeholder="Enter Your Name" />
              </div>
            </div>
            <div className="form-data mt-3">
              <div className="form-labe ps-2 mb-1">
                <label htmlFor="contactEmail">
                  Email
                </label>
              </div>
              <div className="form-inp">
                <input type="email" name="email" id="contactEmail" value={inputs.email || ""} onChange={handleChange} placeholder="Enter Your Email" />
              </div>
            </div>

            <div className="form-data mt-3">
              <div className="form-labe ps-2 mb-1">
                <label htmlFor="">
                  Message
                </label>
              </div>
              <div className="form-inp">
                <textarea  cols="20" rows="10" name="message" value={inputs.message || ""} onChange={handleChange} placeholder="Enter Your Name" />
              </div>
            </div>

            <div className="form-data ps-3 mt-3">
              <button>Submit</button>
            </div>


            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
