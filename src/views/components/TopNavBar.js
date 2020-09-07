import React, {useState, useContext}  from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeTogglerButton from "../themes/theme-toggler.js";
import { Link } from "react-router-dom";
import { ThemeContext } from "../themes/theme-context.js";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  
function TopNavBar(){
    const { theme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar
          className={"navbar-main navbar-transparent navbar-light headroom ".concat(
            theme.navbar_color
          )}
          expand="lg"
          id="navbar-main"
        >
            <Container>
                <NavbarBrand className="mr-lg-5" to="/" tag={Link} >
                    <img
                        alt="..."
                        src={require("../../assets/images/logo-fundo-colorido.png")}
                        style={{height:"30px"}}
                    />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                        </NavLink>
                    </NavItem>
                </Nav>
                <ThemeTogglerButton/>
                </Collapse>
            </Container>
        </Navbar>
      </div>

    );
}

export default TopNavBar;