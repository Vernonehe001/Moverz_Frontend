import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "./Navbar.css"
import mylogo from "../asset/mylogo.png"
import Image from 'react-bootstrap/Image'


function NavigationBar() {
  return (
    <Navbar 
    collapseOnSelect 
    expand="lg" 
    className='navbar_parent_container'
    >
      <Container
      className='navbar_container'
      >
        <Navbar.Brand href="/">
          <Image
          fluid
          roundedCircle
          width="100"
          src={mylogo}
          className="logo_image"
          />
        </Navbar.Brand>
        <Navbar.Brand fluid href="/">Moverz Shipping</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Couriers</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;