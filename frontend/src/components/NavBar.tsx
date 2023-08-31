import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavbarBs className="bg-white shadow-sm mb-3">
        <Container>
          <Nav>
            <Nav.Link to={"/"} as={NavLink}>
              Menu
            </Nav.Link>
            <Nav.Link to={"/kitchen"} as={NavLink}>
              Kitchen
            </Nav.Link>
            <Nav.Link to={"/orders"} as={NavLink}>
              Orders
            </Nav.Link>
          </Nav>
        </Container>
      </NavbarBs>
    </>
  );
};

export default NavBar;
