import "./Footer.css"
import {Link} from "react-router-dom";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">

        <div className="footer-main">
            <div className="footer1">
                <div className="footer1-header">
                    <h2>Join Our Exclusive Platform Now</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo ullam sed expedita, rem laudantium architecto maxime temporibus, laborum odio facilis ipsa dolores fugit vel.
                    </p>
                </div>
                <div className="footer-icons">
                    <FaFacebookSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaLinkedin size={30}/>
                    <FaTwitterSquare size={30}/>
                </div>
            </div>

            <div className="footer2">
                <div className="footer2-links">
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Add Reviews</Link>
                    <Link>View Reviews</Link>
                    <Link>Contact</Link>
                    <Link>Network</Link>
                    <Link>BlackList</Link>
                    <Link>Create Account</Link>
                    <Link>Login</Link>
                </div>
            </div>
        </div>
        <hr  />
        <div className="footer-rights">
            &copy; 2024 Copyright & we love our users
        </div>
    </div>
  )
}
