/*
 * File: Signin.js
 * Functionality: User Log In Page
 * Author: Jose (Component & Structure) | Aaron (API)
 */

import { useHistory } from "react-router-dom";
import { useState } from "react";
// CSS
import "../../css/Theme.css";
import "../../css/Auth.css";
// React Boostrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
// Image(s) or SVG
import { ReactComponent as Student } from "../../content/svg/student.svg";
import { ReactComponent as Professor } from "../../content/svg/professor.svg";
import { ReactComponent as Company } from "../../content/svg/company.svg";
//API
import API_USER_LOG_IN from "../../../models/user_sign_in";

function Signin() {
  const [email, setEmail] = useState("Email"); //School Email
  const [userType, setUserType] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Boolean if User Exists | Incorrect authentication field
    console.log(event.target[3].value);
    console.log(event.target[4].value);
    console.log(userType);
    let bool_user_auth = await API_USER_LOG_IN(
      event.target[3].value,
      event.target[4].value,
      userType
    );
    //Auth True
    if (bool_user_auth === true) {
      //auth true
      history.push("/profile");
      window.location.reload();
      console.log("THE BOOL OF USER: " + bool_user_auth);
    }
    //Auth False
    if (bool_user_auth === false) {
      console.log("false");
      //Control UI response
    }
  };

  return (
    <>
      <h1 id='h1-signup'>Welcome Back!</h1>
      <Form className='auth-form' onSubmit={handleSubmit}>
        <Form.Row id='profiles'>
          <Col>
            <label>
              <input
                type='radio'
                name='account'
                value='student'
                onClick={() => {
                  setEmail("Enter Your Student Email");
                  setUserType("student");
                }}
              />
              <Student id='student-radio' fill='#EEEEEE' />
            </label>
          </Col>
          <Col>
            <label>
              <input
                type='radio'
                name='account'
                value='professor'
                onClick={() => {
                  setEmail("Enter Your School Email");
                  setUserType("professor");
                }}
              />
              <Professor id='professor-radio' fill='#EEEEEE' />
            </label>
          </Col>
          <Col>
            <label>
              <input
                type='radio'
                name='account'
                value='employer'
                onClick={() => {
                  setEmail("Enter Your Company Email");
                  setUserType("employer");
                }}
              />
              <Company id='company-radio' fill='#EEEEEE' />
            </label>
          </Col>
        </Form.Row>
        <Form.Control type='email' placeholder={email} required />
        <Form.Group id='passwd'>
          <Form.Control type='password' placeholder='Password' required />
          <Form.Text className='text-muted'>Forgot Password?</Form.Text>
        </Form.Group>
        <Button variant='dark' type='submit'>
          Sign in
        </Button>
      </Form>
    </>
  );
}

export default Signin;
