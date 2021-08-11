/*
 * File: SubNav.js
 * Functionality: Authentication Navbar for users to navigate between Sign In & Sign Up
 * Author: Jose
 */

import { NavLink } from "react-router-dom";
// CSS
import "../../css/Theme.css";
import "../../css/Nav.css";
// React Bootstrap
import Navbar from "react-bootstrap/Navbar";
// Image(s) or SVG
import { ReactComponent as Logo } from "../../content/svg/logo.svg";

function SubNav() {
  return (
    <Navbar id='sub-navbar'>
      <Navbar.Brand>
        <NavLink to='/'>
          <Logo />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <NavLink to='/signup' className='navbar-btn'>
          Sign Up
        </NavLink>
        <NavLink to='/signin' className='navbar-btn'>
          Sign In
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SubNav;
