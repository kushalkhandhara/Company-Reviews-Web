import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.png"
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";
import { MdNightsStay } from "react-icons/md";
import { FaCloudSun } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';


export default function Navbar1() {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 900px)' });


  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container fluid>
            <Navbar.Brand as={Link} to="/">
                <img src={logo} className="img-fluid" alt="Error" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="ms-auto me-auto">
                    <Nav.Link  as={Link} to="/">Home</Nav.Link>
                    <Nav.Link  as={Link} to="/addReview">Add Review</Nav.Link>
                    <Nav.Link  as={Link} to="/viewReviews">View Reviews</Nav.Link>
                    <Nav.Link as={Link} to="/blacklist">Blacklist</Nav.Link>
                    <Nav.Link as={Link} to="/network">Network</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link as={Link} to="/signup">Create Account</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                </Nav>


                {/* <NavDropdown  title={<CgProfile color='grey' fontSize={35}/>} id="collapsible-nav-dropdown"
                    align={isSmallScreen ? "center" : "end"} >
                    <NavDropdown.Item href="#action/3.2">
                        Visit Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                       Logout
                    </NavDropdown.Item>
                </NavDropdown> */}

 
                {/* <Nav>
                    <Nav.Link>
                        <MdNightsStay color='grey' fontSize={35}/>
                    </Nav.Link>
                    <Nav.Link>
                        <FaCloudSun color='grey' fontSize={35}/>
                    </Nav.Link>
                </Nav> */}
                


            </Navbar.Collapse>
            </Container>
            
        </Navbar>
  </>
  )
}