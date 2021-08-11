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
// Gif
import sent from "../../content/gif/sent.gif";

const Hire = (props) => {
  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Notification Sent!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={sent} alt='loading...' style={{ width: "100%" }} id='gif' />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='dark' onClick={() => props.setHirePopup(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Hire;
