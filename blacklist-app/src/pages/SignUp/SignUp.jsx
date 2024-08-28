import "./SignUp.css"
import {Link} from "react-router-dom";

export default function SignUp() {

  const handleSubmit = (event) => {
    event.preventDefault();
  }


  return (
    <div className="signup">
      <div className="signup-main">
        <div className="signup-header">
          <h2>
            SignUp
          </h2>
        </div>
        <div className="signup-form">
          <form action="" autoComplete="off" onSubmit={handleSubmit}>
            <div className="signup-inp">
              <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="signup-inp">
              <input type="text" placeholder="Enter Your Email" />
            </div>
            <div className="signup-inp">
              <input type="password" placeholder="Enter Your Password" />
            </div>

            <div className="signup-inp">
              Already Have An Account ? <Link to="/login"><b>Login</b></Link>
            </div>

            <div className="signup-btn">
              <button>Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
