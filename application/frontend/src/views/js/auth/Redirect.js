/*
 * File: Redirect.js
 * Functionality: Informative Page for users to confirm their email
 * Author: Jose
 */

import { useState } from "react";
import { Link } from "react-router-dom";
// Redirect After Clicking "Create Account"
import { useHistory } from "react-router-dom";
// CSS
import "../../css/Theme.css";
import "../../css/Auth.css";
import Button from "react-bootstrap/esm/Button";

const Redirect = () => {
  // user's name
  const [user, setUser] = useState("Jose");

  //Redirect with useHistory
  const history = useHistory();

  const routeChange = () => {
    history.push("/signin");
  };

  return (
    <div className='redirect'>
      <h1>Verify Your Email Address</h1>
      <p>{user}, to start using hatchio, we need to verify your email.</p>
      {/* Asks the user to open Mail Client and then verify email */}
      <p>After verifying, click on the button below to signin!</p>
      <Button
        variant='dark'
        type='submit'
        id='redirect-btn'
        onClick={routeChange}>
        Sign In
      </Button>
      <footer>
        <p>
          Questions?{" "}
          <Link
            to='#'
            onClick={(e) => {
              window.location = "mailto:hatchionoreply9@gmail.com";
              e.preventDefault();
            }}>
            help@hatchio.io
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Redirect;
