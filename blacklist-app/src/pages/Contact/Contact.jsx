import "./Contact.css";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const handleSubmit = (event) => {
  event.preventDefault();
}

export default function Contact() {
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
            <form action="" onSubmit={handleSubmit}>

            <div className="form-data mt-3">
              <div className="form-labe ps-2 mb-1">
                <label htmlFor="contactName">
                  Name
                </label>
              </div>
              <div className="form-inp">
                <input type="text" name="contactName" id="contactName" placeholder="Enter Your Name" />
              </div>
            </div>
            <div className="form-data mt-3">
              <div className="form-labe ps-2 mb-1">
                <label htmlFor="contactEmail">
                  Email
                </label>
              </div>
              <div className="form-inp">
                <input type="email" name="contactEmail" id="contactEmail" placeholder="Enter Your Email" />
              </div>
            </div>

            <div className="form-data mt-3">
              <div className="form-labe ps-2 mb-1">
                <label htmlFor="">
                  Message
                </label>
              </div>
              <div className="form-inp">
                <textarea  cols="20" rows="10" name="message"  placeholder="Enter Your Name" />
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
