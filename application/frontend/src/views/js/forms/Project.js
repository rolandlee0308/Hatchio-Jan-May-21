/*
 * File: Project.js
 * Functionality: Modal for Students to add or edit their project(s)
 * Author: Jose (Component & Structure) | Aaron (API)
 */

import "../../css/Forms.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
// Import API
import API_STUDENT_INSERT_PROJECTS from "../../../models/POST/Students/insert_student_projects";

const Project = (props) => {
  const [project, setProject] = useState({
    Student_ID: props.userID,
    project_name: "",
    summary: "",
    professor: "",
    arr_tools_used: "",
    links_website: "",
    arr_collaborators_arr: "",
  });

  // Submits the Student Education to the DB
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (props.popupName === "Edit") {
      console.log("edited"); //TODO:: Add Update API
    } else {
      console.log(project);
      const response = await API_STUDENT_INSERT_PROJECTS(project);
      //Check Response Status Code
      if (response === 200) {
        //Reload if success -- alternative might be just to refresh the userProfile props but idk how to do this yet
        window.location.reload();
      } else {
        console.log(`Response Error: ${Response}`);
      }
    }
  };

  return (
    <Modal
      {...props}
      aria-labelledby='contained-modal-title-vcenter'
      centered
      scrollable={true}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {props.popupName} Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Row>
              {/* Project Name */}
              <Col>
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  defaultValue={props.popupName === "Edit" ? props.project : ""}
                  onChange={(e) =>
                    setProject({ ...project, project_name: e.target.value })
                  }
                />
              </Col>
              {/* Project Date */}
              <Col>
                <Form.Label>URL</Form.Label>
                <Form.Control
                  required
                  type='text'
                  defaultValue={props.popupName === "Edit" ? props.website : ""}
                  onChange={(e) =>
                    setProject({ ...project, links_website: e.target.value })
                  }
                />
              </Col>
            </Form.Row>
          </Form.Group>

          {/* Project Collaborator(s) */}
          <Form.Group>
            <Form.Label>Collaborator(s)</Form.Label>
            <Form.Control
              type='text'
              defaultValue={
                props.popupName === "Edit" ? props.collaborators : ""
              }
              onChange={(e) =>
                setProject({
                  ...project,
                  arr_collaborators_arr: e.target.value,
                })
              }
            />
            <Form.Text className='text-muted'>
              Add a comma between collaborators
            </Form.Text>
          </Form.Group>

          {/* Project Professor */}
          <Form.Group>
            <Form.Label>Professor</Form.Label>
            <Form.Control
              type='text'
              defaultValue={props.popupName === "Edit" ? props.professor : ""}
              onChange={(e) =>
                setProject({ ...project, professor: e.target.value })
              }
            />
            <Form.Text className='text-muted'>
              If a school project, include your professor
            </Form.Text>
          </Form.Group>

          {/* Project Description */}
          <Form.Group>
            <Form.Label>Summary</Form.Label>
            <Form.Control
              type='text'
              as='textarea'
              rows='2'
              maxLength='150'
              required
              defaultValue={props.popupName === "Edit" ? props.summary : ""}
              onChange={(e) =>
                setProject({ ...project, summary: e.target.value })
              }
            />
            <Form.Text className='text-muted'>150 characters</Form.Text>
          </Form.Group>

          {/* Project Top 3 */}
          <Form.Group>
            <Form.Label>Top 3 Tools Used</Form.Label>
            <Form.Control
              type='text'
              required
              defaultValue={props.popupName === "Edit" ? props.tools : ""}
              onChange={(e) =>
                setProject({ ...project, arr_tools_used: e.target.value })
              }
            />
            <Form.Text className='text-muted'>
              Add a comma between tools
            </Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant='dark'>
            {props.popupName === "Edit" ? "Update Project" : "Add Project"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Project;
