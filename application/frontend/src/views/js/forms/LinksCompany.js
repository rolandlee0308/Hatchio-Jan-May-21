/*
 * File: LinkCompany.js
 * Functionality: Modal for Companies to add or edit their Social Media Links and Company Website
 * Author: Jose (Component & Structure) | Aaron (API)
 */

import "../../css/Forms.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LinksCompany = (props) => {
  // saves website, facebook, instagram, twitter, and tik tok URL links
  const [links, setLinks] = useState({
    website: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: "",
    tiktok: "",
  });

  // Submits the Student Links to the DB
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(links);
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Add Links
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Website */}
          <Form.Group>
            <Form.Label>Website</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) => setLinks({ ...links, website: e.target.value })}
            />
          </Form.Group>
          {/* Linkedin */}
          <Form.Group>
            <Form.Label>Linkedin</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) => setLinks({ ...links, linkedin: e.target.value })}
            />
          </Form.Group>
          {/* Facebook */}
          <Form.Group>
            <Form.Label>Facebook</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) => setLinks({ ...links, facebook: e.target.value })}
            />
          </Form.Group>
          {/* Instagram */}
          <Form.Group>
            <Form.Label>Instagram</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setLinks({ ...links, instagram: e.target.value })
              }
            />
          </Form.Group>
          {/* Twitter */}
          <Form.Group>
            <Form.Label>Twitter</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) => setLinks({ ...links, twitter: e.target.value })}
            />
          </Form.Group>
          {/* Tike Tok */}
          <Form.Group>
            <Form.Label>Tik Tok</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) => setLinks({ ...links, tiktok: e.target.value })}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default LinksCompany;
