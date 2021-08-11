/*
 * File: Location.js
 * Functionality: Modal for Students, Profesosrs, & Companies to add or edit their Location
 * Author: Jose (Component & Structure) | Aaron (API)
 */

import "../../css/Forms.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Location = (props) => {
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Control type='text' defaultValue={props.location} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button type='submit' variant='dark'>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Location;
