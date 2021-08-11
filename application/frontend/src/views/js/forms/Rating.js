/*
 * File: Rating.js
 * Functionality: Modal for Professors to rate students
 * Author: Jose (Component & Structure) | Aaron (API)
 */
import { useState } from "react";
import "../../css/Forms.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//API
import API_PROFESSOR_RATE_STUDENT from "../../../models/POST/Professors/professor_rate";

const Rating = (props) => {
  //Form Inputs
  const [recommendation, setRecommendation] = useState("");
  const [responsible, setResponsible] = useState(0);
  const [teamwork, setTeamWork] = useState(0);
  const [leadership, setLeadership] = useState(0);
  const [committedToSuccess, setCommittedToSuccess] = useState(0);

  //Rate Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const sent_bool = await API_PROFESSOR_RATE_STUDENT(
      props.student, //Student ID
      props.professor, //Professor ID
      responsible, //Responsible int
      teamwork, //Teamwork int
      leadership, //leaderhsip int
      committedToSuccess, //int
      recommendation, //str
      (responsible + teamwork + leadership + committedToSuccess) / 4 //total rating by average
    );
    //If Succesful Sent, Reload Page
    if (sent_bool === true) {
      window.location.reload();
    }
    if (sent_bool === false) {
      console.log("Ratings Unsuccesful");
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Rate Student
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Recommendation</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              onChange={(e) => setRecommendation(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="responsibility">
            <Form.Label>Responsibility</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setResponsible(e.target.value)}
              required
            >
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="teamwork">
            <Form.Label>Team Work</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setTeamWork(e.target.value)}
              required
            >
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="leadership">
            <Form.Label>Leadership</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setLeadership(e.target.value)}
              required
            >
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="success">
            <Form.Label>Committed to Success</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setCommittedToSuccess(e.target.value)}
              required
            >
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" type="submit">
            Rate Student
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Rating;
