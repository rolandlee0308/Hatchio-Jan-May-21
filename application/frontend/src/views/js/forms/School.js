/*
 * File: School.js
 * Functionality: Modal for Students and Profesosrs to add or edit the schools they attend(ed)
 * Author: Jose (Component & Structure) | Aaron (API)
 */

import "../../css/Forms.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CourseList from "./CourseList";

const School = (props) => {
  // saves school name, start year, end year
  const [school, setSchool] = useState({
    schoolName: "",
    startYear: "",
    endYear: "",
  });
  // stores all courses inputted by the professor
  const [courseList, setCourseList] = useState([
    {
      id: 0,
      courseName: "",
      section: "",
      term: "",
      year: "",
    },
  ]);

  const addCourse = () => {
    setCourseList((currentState) => [
      ...currentState,
      {
        id: courseList.length,
        courseName: "",
        section: "",
        term: "",
        year: "",
      },
    ]);
  };

  const updateCourse = (e) => {
    let newList = [...courseList];
    console.log("id: " + e.target.id);
    switch (e.target.name) {
      case "courseName":
        newList[e.target.id] = {
          ...newList[e.target.id],
          courseName: e.target.value,
        };
        setCourseList(newList);
        break;
      case "section":
        newList[e.target.id] = {
          ...newList[e.target.id],
          section: e.target.value,
        };
        setCourseList(newList);
        break;
      case "term":
        newList[e.target.id] = {
          ...newList[e.target.id],
          term: e.target.value,
        };
        setCourseList(newList);
        break;
      case "year":
        newList[e.target.id] = {
          ...newList[e.target.id],
          year: e.target.value,
        };
        setCourseList(newList);
        break;
      default:
        break;
    }
  };

  const removeCourse = () => {
    // removes the last added course
    setCourseList(courseList.filter((item, i) => i !== courseList.length - 1));
  };

  // Submits Professor's school info to the DB
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(school);
    console.log(courseList);
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
            Add School & Course(s)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* School Name */}
          <Form.Group>
            <Form.Label>School</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setSchool({ ...school, schoolName: e.target.value })
              }
            />
          </Form.Group>

          {/* Start Year */}
          <Form.Group>
            <Form.Label>Start Year</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setSchool({ ...school, startYear: e.target.value })
              }
            />
          </Form.Group>

          {/* End Year */}
          <Form.Group>
            <Form.Label>End Year</Form.Label>
            <Form.Control
              type='text'
              onChange={(e) =>
                setSchool({ ...school, endYear: e.target.value })
              }
            />
          </Form.Group>

          {/* Courses(s) within form */}
          <Form.Group>
            <Form.Label>Course(s)</Form.Label>
            {courseList.map((course) => (
              <Form.Group>
                <Form.Control
                  type='text'
                  placeholder='Course Name'
                  name='courseName'
                  id={course.id}
                  onChange={updateCourse}
                />
                <Form.Control
                  type='text'
                  placeholder='Course Section'
                  name='section'
                  id={course.id}
                  onChange={updateCourse}
                />
                <Form.Control
                  as='select'
                  name='term'
                  id={course.id}
                  onChange={updateCourse}
                  defaultValue='Fall'>
                  <option>Fall</option>
                  <option>Winter</option>
                  <option>Spring</option>
                  <option>Summer</option>
                </Form.Control>
                <Form.Control
                  type='text'
                  placeholder='Course Year'
                  name='year'
                  id={course.id}
                  onChange={updateCourse}
                />
              </Form.Group>
            ))}
            <Button onClick={addCourse}>Add</Button>
            <Button onClick={removeCourse}>Delete</Button>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default School;
