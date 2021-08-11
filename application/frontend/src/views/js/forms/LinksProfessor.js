/*
 * File: LinkProfessor.js
 * Functionality: Modal for Professor's to add or edit their Social Media Links
 * Author: Jose (Component & Structure) | Aaron (API)
 */

import "../../css/Forms.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LinksProfessor = (props) => {
  // saves website and linkedin URL links
  const [links, setLinks] = useState({ website: "", linkedin: "" });

  // Submits the Student Links to the DB
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(links);
  };

  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Add Links
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* website */}
          <Form.Group>
            <Form.Label>Website</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Personal Website URL'
              onChange={(e) => setLinks({ ...links, website: e.target.value })}
            />
          </Form.Group>
          {/* linkedin */}
          <Form.Group>
            <Form.Label>Linkedin</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Linkedin URL'
              onChange={(e) => setLinks({ ...links, linkedin: e.target.value })}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant='dark'>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default LinksProfessor;
