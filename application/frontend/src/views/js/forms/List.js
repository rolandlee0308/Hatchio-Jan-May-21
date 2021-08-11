/*
 * File: List.js
 * Functionality: Modal for Students and Companies to add or edit their Lists of Benefits or Strengths
 * Author: Jose (Component & Structure) | Aaron (API)
 */

import "../../css/Forms.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// POPUP List will be used to add benefits (for comapany), qualities (for students)
const List = (props) => {
  // Adds empty inputs if qualities prop are less than 10
  let empty = [];
  for (let i = 0; i < 10 - props.qualities.length; i++) {
    empty.push("");
  }

  // Submits the 'qualities' or 'benefits' to the DB
  const handleSubmit = (e) => {
    e.preventDefault();
    const formCount = 10;
    let str;
    // iterates throught the list input
    for (let i = 1; i <= formCount; i++) {
      try {
        // combines all qualities into string for DB storing
        if (e.target[i].value.localeCompare("")) str += e.target[i].value;
      } catch (e) {
        console.log(e);
      }
    }
    //removes the first 'undefined' (tmp fix)
    let allQualities = str.replace("undefined", "");
    console.log(allQualities);
  };

  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Add Top Qualities
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol style={{ paddingLeft: "1rem" }}>
            {props.qualities.map((quality) => (
              <li>
                <Form.Group>
                  <Form.Control type='text' defaultValue={quality} />
                </Form.Group>
              </li>
            ))}
            {empty.map((quality) => (
              <li>
                <Form.Group>
                  <Form.Control type='text' defaultValue={quality} />
                </Form.Group>
              </li>
            ))}
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant='dark'>
            {empty.length === 10 ? "Save" : "Update"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default List;
