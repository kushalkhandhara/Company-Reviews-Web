import "./Login.css";
import {Link} from "react-router-dom";

export default function Login() {

  const handleSubmit = (event) => {
    event.preventDefault();
  }



  return (
    <div className="signup">
      <div className="signup-main">
        <div className="signup-header">
          <h2>
            Login
          </h2>
        </div>
        <div className="signup-form">
          <form action="" autoComplete="off" onSubmit={handleSubmit}>
  
            <div className="signup-inp">
              <input type="text" placeholder="Enter Your Email" />
            </div>
            <div className="signup-inp">
              <input type="password" placeholder="Enter Your Password" />
            </div>

            <div className="signup-inp">
              Not Have An Account ? <Link to="/signup"><b>Create Account</b></Link>
            </div>

            <div className="signup-btn">
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
