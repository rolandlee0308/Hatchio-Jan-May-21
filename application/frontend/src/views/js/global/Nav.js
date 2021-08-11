/*
 * File: Nav.js
 * Functionality: Navbar for users to navigate the website
 * Author: Jose (Component & Structure) | Aaron (Cookie)
 */

import { NavLink, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "../../css/Nav.css";
// Image(s) or SVG
import { ReactComponent as Logo } from "../../content/svg/logo.svg";
//Cookie
import { useCookies } from "react-cookie";

const DefaultNav = () => {
  const history = useHistory();
  //Set Current User
  const [cookie, removeCookie] = useCookies([
    "Type_User",
    "ID_OF_USER",
    "First_Name",
  ]);

  //Remove User
  const handleRemoveCookie = () => {
    removeCookie("Type_User");
    removeCookie("ID_OF_USER");
    removeCookie("First_Name");
    history.push("/");
    window.location.reload();
  };

  if (cookie.Type_User === "employer") {
    return (
      <Navbar collapseOnSelect expand="lg" className="nav-bar">
        <Navbar.Brand id="nav-logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav-left">
            <NavDropdown
              title="Search "
              id="collasible-nav-dropdown"
              className="nav-search"
            >
              <NavDropdown.Item>
                <NavLink to="/search-jobs">Jobs</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/search-candidates">Students</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/about" className="mr-5 pt-2">
              About
            </NavLink>
            <NavLink to="/help" className="mr-5 pt-2">
              Help
            </NavLink>
            <NavLink to="/insert-jobs" className="mr-5 pt-2">
              Insert Jobs
            </NavLink>
          </Nav>
          <Nav className="nav-right">
            <DropdownButton
              id="dropdown-item-button"
              title={cookie.First_Name + "'s Account"}
              variant="dark"
            >
              <Dropdown.Item href="/profile" className="dark-a">
                Profile
              </Dropdown.Item>
              <Dropdown.Item href="/notifications">Notifications</Dropdown.Item>
              <Dropdown.Item href="/" onClick={handleRemoveCookie}>
                Sign Out
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  if (
    cookie.Type_User === "professor" ||
    cookie.Type_User === "student"
    //cookie.Type_User === "employer"
  ) {
    return (
      <Navbar collapseOnSelect expand="lg" className="nav-bar">
        <Navbar.Brand id="nav-logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav-left">
            <NavDropdown
              title="Search "
              id="collasible-nav-dropdown"
              className="nav-search"
            >
              <NavDropdown.Item>
                <NavLink to="/search-jobs">Jobs</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/search-candidates">Students</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/about" className="mr-5 pt-2">
              About
            </NavLink>
            <NavLink to="/help" className="mr-5 pt-2">
              Help
            </NavLink>
          </Nav>
          <Nav className="nav-right">
            <DropdownButton
              id="dropdown-item-button"
              title={cookie.First_Name + "'s Account"}
              variant="dark"
            >
              <Dropdown.Item href="/profile" className="dark-a">
                Profile
              </Dropdown.Item>
              <Dropdown.Item href="/notifications">Notifications</Dropdown.Item>
              <Dropdown.Item href="/" onClick={handleRemoveCookie}>
                Sign Out
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bar" bg="#fff">
      <Navbar.Brand id="nav-logo">
        <NavLink to="/">
          <Logo />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto nav-left">
          <NavLink to="/search-jobs" className="mr-5">
            Search
          </NavLink>
          <NavLink to="/about" className="mr-5">
            About
          </NavLink>
          <NavLink to="/help">Help</NavLink>
        </Nav>
        <Nav className="nav-right">
          <NavLink to="/signup" className="navbar-btn">
            My Account
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DefaultNav;
