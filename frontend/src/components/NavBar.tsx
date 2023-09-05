import { useState } from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = ({ handleOrderItems }) => {
  const [onMenu, setOnMenu] = useState<boolean>(true);

  const handleExitMenu = () => {
    setOnMenu(false);
  };
  const handleEnterMenu = () => {
    setOnMenu(true);
  }
  return (
    <>
      <NavbarBs className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link onClick={handleEnterMenu} to={"/"} as={NavLink}>
              Menu
            </Nav.Link>
            <Nav.Link onClick={handleExitMenu} to={"/kitchen"} as={NavLink}>
              Kitchen
            </Nav.Link>
            <Nav.Link onClick={handleExitMenu} to={"/orders"} as={NavLink}>
              Orders
            </Nav.Link>
          </Nav>
          {onMenu ? (
            <button
              onClick={handleOrderItems}
              type="button"
              className="btn btn-outline-primary"
            >
              Order Now!
            </button>
          ) : null}
        </Container>
      </NavbarBs>
    </>
  );
};

export default NavBar;
