/*
 * File: Education.js
 * Functionality: Modal for Students to add or edit their Education
 * Author: Jose (Component & Structure) | Aaron (API)
 */

import "../../css/Forms.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
// Import API
import API_STUDENT_INSERT_EDUCATION from "../../../models/POST/Students/insert_student_education";

const Education = (props) => {
  const [education, setEducation] = useState({
    Student_ID: props.userID,
    school: "",
    degree: "",
    school_gpa: 0,
    study_major: "",
    start_year: 0,
    end_year: 0,
  });

  // Submits the Student Education to the DB
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(education);
    const response = await API_STUDENT_INSERT_EDUCATION(education);
    if (response === 400) {
      console.log("error");
    }
    if (response === 200) {
      window.location.reload();
      console.log("success");
    }
  };

  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {props.popupName} Education
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* School Names */}
          <Form.Group>
            <Form.Label>School</Form.Label>
            <Form.Control
              required
              type='text'
              defaultValue={props.popupName === "Edit" ? props.school : ""}
              onChange={(e) =>
                setEducation({ ...education, school: e.target.value })
              }
            />
          </Form.Group>
          {/* Degree */}
          <Form.Group>
            <Form.Label>Degree</Form.Label>
            <Form.Control
              required
              type='text'
              defaultValue={props.popupName === "Edit" ? props.degree : ""}
              onChange={(e) =>
                setEducation({ ...education, degree: e.target.value })
              }
            />
          </Form.Group>
          {/* Major */}
          <Form.Group>
            <Form.Label>Major</Form.Label>
            <Form.Control
              required
              type='text'
              defaultValue={props.popupName === "Edit" ? props.major : ""}
              onChange={(e) =>
                setEducation({ ...education, study_major: e.target.value })
              }
            />
          </Form.Group>
          {/* GPA */}
          <Form.Group>
            <Form.Label>GPA</Form.Label>
            <Form.Control
              type='text'
              defaultValue={props.popupName === "Edit" ? props.gpa : ""}
              onChange={(e) =>
                setEducation({ ...education, school_gpa: e.target.value })
              }
            />
          </Form.Group>
          {/* Start Year */}
          <Form.Row>
            <Col>
              <Form.Label>Start Year</Form.Label>
              <Form.Control
                required
                type='date'
                defaultValue={props.popupName === "Edit" ? props.startYear : ""}
                onChange={(e) =>
                  setEducation({ ...education, start_year: e.target.value })
                }
              />
            </Col>
            {/* End Year */}
            <Col>
              <Form.Label>End Year</Form.Label>
              <Form.Control
                required
                type='date'
                defaultValue={props.popupName === "Edit" ? props.endYear : ""}
                onChange={(e) =>
                  setEducation({ ...education, end_year: e.target.value })
                }
              />
            </Col>
          </Form.Row>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant='dark'>
            {props.popupName === "Edit" ? "Update" : "Save"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Education;
