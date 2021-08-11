/*
 * File: Signup.js
 * Functionality: User Create Account Page
 * Author: Jose (Component & Structure) | Aaron (API)
 */

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

import {
  api_send_email,
  api_register_user,
} from "../../../models/register_user";

function Signup() {
  const [validated, setValidated] = useState(false);
  const [inputName, setInputName] = useState("School Name"); //School Name
  const [email, setEmail] = useState("School Email"); //School Email
  const [firstName, setFirstName] = useState(""); //First Name
  const [lastName, setLastName] = useState(""); //Last Name
  const [password, setPassword] = useState(""); //Password
  const [userType, setUserType] = useState("");
  const [subtext, SetSubtext] = useState("Do you attend multiple schools?");

  //Form Submission
  const handleSubmit = (event) => {
    const FORM_REQUEST = {
      usertype: userType,
      firstName: firstName,
      lastName: lastName,
      schoolname: inputName,
      password: password,
      email: email,
    };
    console.log(FORM_REQUEST);
    const form = event.currentTarget;
    if ((form.checkValidity() === false) | true) {
      event.preventDefault();
      event.stopPropagation();
      alert("Verification email has been sent to " + email);
      api_send_email(FORM_REQUEST);
      api_register_user(FORM_REQUEST);
      window.location.href = "/signup-redirect";
    }

    setValidated(true);
  };

  return (
    <>
      <h1 id='h1-signup'>Create An Account</h1>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className='auth-form'>
        <Form.Row id='profiles'>
          <Col>
            <label>
              <input
                type='radio'
                name='account'
                value='student'
                onClick={() => {
                  setUserType("students");
                  setInputName("School Name");
                  setEmail("Student Email");
                  SetSubtext("Do you attend multiple schools?");
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
                  setUserType("professors");
                  setInputName("School Name");
                  setEmail("Work Email");
                  SetSubtext("Do you work at multiple schools?");
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
                value='company'
                onClick={() => {
                  setUserType("employers");
                  setInputName("Company Name");
                  setEmail("Company Email");
                  SetSubtext("");
                }}
              />
              <Company id='company-radio' fill='#EEEEEE' />
            </label>
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md='6'>
            <Form.Control
              required
              type='text'
              id='first-name'
              placeholder='First Name'
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='6'>
            <Form.Control
              required
              type='text'
              id='last-name'
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='12'>
            <Form.Control
              type='text'
              id='organization-name'
              placeholder={inputName}
              onChange={(e) => setInputName(e.target.value)}
              required
            />
            <Form.Text className='text-muted'>{subtext}</Form.Text>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md='12'>
            {/**Email */}
            <Form.Control
              type='email'
              id='email'
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          {/**Password */}
          <Form.Group as={Col} md='6'>
            <Form.Control
              type='password'
              id='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Form.Text className='text-muted'>
              Must be 8-20 characters long.
            </Form.Text>
            <Form.Control.Feedback type='invalid'>
              Password is weak
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='6'>
            <Form.Control
              type='password'
              id='confirm-password'
              placeholder='Confim Password'
              required
            />
            <Form.Control.Feedback type='invalid'>
              Password does not match.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label='I Agree to the  Privacy Policy, Terms & Conditions, and Cookie Policy'
            feedback='You must agree before submitting.'
            className='subtext'
          />
        </Form.Group>
        <Button variant='dark' type='submit'>
          Create Account
        </Button>
      </Form>
    </>
  );
}

export default Signup;
