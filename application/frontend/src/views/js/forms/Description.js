/*
 * File: Description.js
 * Functionality: Modal for Students, Professors, and Companies to add or edit their About Me
 * Author: Jose (Component & Structure) | Aaron (API)
 */

import "../../css/Forms.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//API
import API_UPDATE_STUDENT_ABOUT_ME from "../../../models/PUT/Students/update_about";
const Description = (props) => {
  // Submits the 'About' or 'Why us' to the DB
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props.userID);
    const response = await API_UPDATE_STUDENT_ABOUT_ME(
      props.userID,
      e.target[1].value //about me description
    );
    //Refresh if Update is Succesful
    if (response.status === 200) {
      window.location.reload();
    }
    if (response.status === 400) {
      console.log("request failed");
    }
  };

  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {props.about === "" ? "Add About Me" : "Edit About Me"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type='text'
              as='textarea'
              rows='15'
              defaultValue={props.about}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant='dark'>
            {props.about === "" ? "Save" : "Update"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Description;
