import { useState } from "react";
import "./Add_Review2.css";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import axios from "axios";

export default function Add_Review2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    company_website: "",
    offer_letter : "",
    bond: "",
    stay: "",
    rating: "",
    workMsg: "",
    workprofile: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleComplete = async() => {
    console.log("Form completed!", formData);
    // Handle form completion logic here
    try {
      const response = await axios.post("http://localhost:8804/api/msgReview/msgReviewForm",formData);
      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        company_name: "",
        company_website: "",
        offer_letter : "",
        bond: "",
        stay: "",
        rating: "",
        workMsg: "",
        workprofile: ""
      })
    }
    catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="addreview2">
      <div className="addreview2-header">
        <h2>Fill the Data in the Form</h2>
      </div>
      <div className="addreview2-note">
        <h3>Note</h3>
        <ul>
          <li>
            Please add your honest review. If you add any false review, your
            profile will be blocked, and the company rating will be brought down.
          </li>
          <li>
            Your review matters because lots of students and employees will read
            this review and apply to the company. If the company has any <b>bond</b>,
            their rating will <b>automatically be brought down</b>.
          </li>
        </ul>
      </div>

      <div className="review-form mt-5">
        <FormWizard stepSize="sm" onComplete={handleComplete}>
          <FormWizard.TabContent title="Personal details" icon="ti-user">
            <div className="form-personal mt-5">
              <div className="form-side">
                <div className="form-data">
                  <div className="form-label">
                    <label htmlFor="name">
                      Please Enter Your Name<span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="form-inp">
                    <input
                      autoComplete="off"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-data">
                  <div className="form-label">
                    <label htmlFor="email">
                      Please Enter Your Email <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="form-inp">
                    <input
                      autoComplete="off"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-side">
                <div className="form-data">
                  <div className="form-label">
                    <label htmlFor="compname">
                      Please Enter Your Company Name<span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="form-inp">
                    <input
                      autoComplete="off"
                      type="text"
                      id="compname"
                      name="company_name"
                      placeholder="Enter Your Company Name"
                      value={formData.compname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-data">
                  <div className="form-label">
                    <label htmlFor="compweb">
                      Please Enter Your Company Website <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="form-inp">
                    <input
                      autoComplete="off"
                      type="text"
                      id="compweb"
                      name="company_website"
                      placeholder="Enter Your Company Website"
                      value={formData.compweb}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-side">
                <div className="form-data">
                  <div className="form-label">
                    <label htmlFor="bond">
                      Does Your Company Have a Bond?<span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="form-inp">
                    <select
                      name="bond"
                      id="bond"
                      value={formData.bond}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled >
                        Please Select One Option
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-side">
                <div className="form-data">
                  <div className="form-label">
                    <label htmlFor="offerLetter">
                    Please Attach Your Offer Letter For Verification (No Need to Worry We are not gonna send to anyone)<span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="form-inp">
                    <input type="file" className="p-2" name="offer_letter" autoComplete="off" id="offerLetter" value={formData.offer_letter} onChange={handleInputChange}  placeholder="Please Attach Your Offer Letter" />
                  </div>
                </div>
              </div>


            </div>
          </FormWizard.TabContent>

          <FormWizard.TabContent title="Additional Info" icon="ti-settings">
            <div className="form-personal mt-5">
              <div className="form-side">
                <div className="form-data">
                  <div className="form-label">
                    <label htmlFor="stayDuration">
                      How Long Did You Stay at the Company?
                      <span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="form-inp">
                    <input
                      autoComplete="off"
                      type="text"
                      id="stayDuration"
                      name="stay"
                      placeholder="Enter Your Time"
                      value={formData.stayDuration}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-data">
                  <div className="form-label">
                    <label htmlFor="workProfile">
                      Are You Working as an<span style={{ color: "red" }}>*</span>
                    </label>
                  </div>
                  <div className="form-inp">
                    <select
                      name="workprofile"
                      id="workProfile"
                      value={formData.workprofile}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled >
                        Please Select One Option
                      </option>
                      <option value="intern">Intern</option>
                      <option value="full time employee">Full Time Employee</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-side">
                <div className="form-data">
                  <div className="form-label">
                    <label htmlFor="rating">
                      Enter the Rating You Give to the Company
                      <span style={{ color: "red" }}>*</span>
                      <p style={{ marginBottom: "1px" }}>
                        <b>(Note: Your Identity Will Not Be Revealed, So Give Honest Reviews)</b>
                      </p>
                    </label>
                  </div>
                  <div className="form-inp">
                    <select
                      name="rating"
                      id="rating"
                      value={formData.rating}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled >
                        Please Select One Option
                      </option>
                      <option value="1">1 Star</option>
                      <option value="1.5">1.5 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="2.5">2.5 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="3.5">3.5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="4.5">4.5 Stars</option>
                      <option value="5">5 Stars</option>
                    </select>
                  </div>
                </div>

                <div className="form-data">
                  <div className="form-label">
                    <label htmlFor="workExperience">
                      Please Write About Your Work Experience
                      <span style={{ color: "red" }}>*</span>
                      <p style={{ marginBottom: "1px" }}>
                        <b>(At Least 100 Words)</b>
                      </p>
                    </label>
                  </div>
                  <div className="form-inp">
                    <textarea
                      rows="10"
                      cols="10"
                      autoComplete="off"
                      id="workExperience"
                      name="workMsg"
                      placeholder="Enter Your Work Experience"
                      value={formData.workMsg}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </FormWizard.TabContent>

          <FormWizard.TabContent title="Last step" icon="ti-check">
            <div className="form-personal mt-5">
              <h3>Review Your Data</h3>
              <p><b>Name:</b> {formData.name}</p>
              <p><b>Email:</b> {formData.email}</p>
              <p><b>Company Name:</b> {formData.company_name}</p>
              <p><b>Company Website:</b> {formData.company_website}</p>
              <p><b>Bond:</b> {formData.bond}</p>
              <p><b>Stay Duration:</b> {formData.stay}</p>
              <p><b>Work Profile:</b> {formData.workprofile}</p>
              <p><b>Rating:</b> {formData.rating} Stars</p>
              <p><b>Work Experience:</b> {formData.workMsg}</p>
            </div>
          </FormWizard.TabContent>
        </FormWizard>
        {/* Add style */}
        <style>{`
          @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
        `}</style>
      </div>
    </div>
  );
}
