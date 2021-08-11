/*
 * File: Experience.js
 * Functionality: Modal for Students to add or edit their Experience
 * Author: Jose (Component & Structure) | Aaron (API)
 */

import "../../css/Forms.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
// Import API
import API_STUDENT_INSERT_EXPERIENCE from "../../../models/POST/Students/insert_student_experience";

const Experience = (props) => {
  // saves role, employement type, tools used, company, location, start year, and end year
  const [experience, setExperience] = useState({
    Student_ID: props.userID,
    company_name: "",
    date_end: "fulltime",
    date_start: "",
    description_experience: "",
    employement_type: "",
    experience_title_position: "",
    location: "",
    arr_work_done_keywords: "",
  });

  // Submits the Student Experience to the DB
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await API_STUDENT_INSERT_EXPERIENCE(experience);
    if (response === 400) {
      console.log("error-insert student experience");
    }
    if (response === 200) {
      window.location.reload();
      console.log("success-insert student experience");
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.popupName} Experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Company */}
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              required
              defaultValue={props.popupName === "Edit" ? props.company : ""}
              onChange={(e) =>
                setExperience({ ...experience, company_name: e.target.value })
              }
            />
          </Form.Group>

          {/* Role / Position */}
          <Form.Group>
            <Form.Label>Role / Position</Form.Label>
            <Form.Control
              type="text"
              required
              defaultValue={props.popupName === "Edit" ? props.position : ""}
              onChange={(e) =>
                setExperience({
                  ...experience,
                  experience_title_position: e.target.value,
                })
              }
            />
          </Form.Group>

          {/* Employment Type */}
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>Employement Type</Form.Label>
                <Form.Control
                  as="select"
                  required
                  defaultValue={
                    props.popupName === "Edit" ? props.employementType : ""
                  }
                  onChange={(e) =>
                    setExperience({
                      ...experience,
                      employement_type: e.target.value,
                    })
                  }
                >
                  <option name="fulltime">Full Time</option>
                  <option name="parttime">Part Time</option>
                  <option name="internship">Internship</option>
                  <option name="contract">Contract</option>
                  <option name="remote">Remote</option>
                </Form.Control>
              </Col>

              {/* Location */}
              <Col>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  required
                  defaultValue={
                    props.popupName === "Edit" ? props.location : ""
                  }
                  onChange={(e) =>
                    setExperience({ ...experience, location: e.target.value })
                  }
                />
              </Col>
            </Form.Row>
          </Form.Group>

          {/* Description */}
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              required
              defaultValue={props.popupName === "Edit" ? props.description : ""}
              onChange={(e) =>
                setExperience({
                  ...experience,
                  description_experience: e.target.value,
                })
              }
            />
          </Form.Group>

          {/* Experience Top 3 */}
          <Form.Group>
            <Form.Label>3 Keywords Describing The Job</Form.Label>
            <Form.Control
              type="text"
              required
              defaultValue={props.popupName === "Edit" ? props.keywords : ""}
              onChange={(e) =>
                setExperience({
                  ...experience,
                  arr_work_done_keywords: e.target.value,
                })
              }
            />
            <Form.Text className="text-muted">
              Add a comma between keywords
            </Form.Text>
          </Form.Group>

          {/* Start Year */}
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>Start Year</Form.Label>
                <Form.Control
                  type="date"
                  required
                  defaultValue={
                    props.popupName === "Edit" ? props.dateStart : ""
                  }
                  onChange={(e) =>
                    setExperience({ ...experience, date_start: e.target.value })
                  }
                />
              </Col>
              <Col>
                {/* End Year */}
                <Form.Label>End Year</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={props.popupName === "Edit" ? props.dateEnd : ""}
                  onChange={(e) =>
                    setExperience({ ...experience, date_end: e.target.value })
                  }
                />
                <Form.Text className="text-muted">
                  Leave blank if current position
                </Form.Text>
              </Col>
            </Form.Row>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="dark">
            {props.popupName === "Edit"
              ? "Update Experience"
              : "Add Experience"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Experience;
