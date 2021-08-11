/*
 * File: Job.js
 * Functionality: Modal for Companies to add or edit their available Job Positions
 * Author: Jose (Component & Structure) | Aaron (API)
 */

import "../../css/Forms.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Job = (props) => {
  // saves role, employement type, tools used, company, location, start year, and end year
  const [experience, setExperience] = useState({
    position: "",
    employementType: "fulltime",
    description: "",
    company: "",
    location: "",
    startYear: "",
    endYear: "",
  });
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Add Job</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Job title */}
        <Form.Label>Job Title</Form.Label>
        <Form.Group>
          <Form.Control type='text' />
        </Form.Group>
        {/* Job Type */}
        <Form.Group>
          <Form.Label>Employement Type</Form.Label>
          <Form.Control
            as='select'
            onChange={(e) =>
              setExperience({
                ...experience,
                employementType: e.target.value,
              })
            }>
            <option name='fulltime'>Full Time</option>
            <option name='parttime'>Part Time</option>
            <option name='internship'>Internship</option>
            <option name='contract'>Contract</option>
            <option name='remote'>Remote</option>
          </Form.Control>
        </Form.Group>
        {/* Experience Level */}
        <Form.Group>
          <Form.Label>Employement Level</Form.Label>
          <Form.Control as='select'>
            <option name='entry'>Entry Level</option>
            <option name='mid'>Mid Level</option>
            <option name='senior'>Senior Level</option>
            <option name='director'>Directors</option>
            <option name='vp'>VP or Above</option>
          </Form.Control>
        </Form.Group>
        {/* Salary */}
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Check aria-label='option 1' label='Unpaid' />
          <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text id='basic-addon1'>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              placeholder='Salary'
              aria-label='Salary'
              aria-describedby='basic-addon1'
            />
          </InputGroup>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Job;
