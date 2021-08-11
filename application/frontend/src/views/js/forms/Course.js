/*
 * File: Course.js
 * Functionality: Modal for Students to add their Courses
 * Author: Jose (Component & Structure)
 */

import "../../css/Forms.css";
import Form from "react-bootstrap/Form";

const Course = ({ course, courseList, setCourseList }) => {
  const updateCourse = (e) => {
    let newList = [...courseList];

    newList[e.target.id] = {
      ...newList[e.target.id],
      name: e.target.value,
    };
    setCourseList(newList);
  };

  return (
    <Form.Group>
      <Form.Control
        type="text"
        placeholder="Course Name"
        name="courseName"
        onChange={updateCourse}
      />
      <Form.Control type="text" placeholder="Course Section" />
      <Form.Control as="select">
        <option>Fall</option>
        <option>Winter</option>
        <option>Spring</option>
        <option>Summer</option>
      </Form.Control>
      <Form.Control type="text" placeholder="Course Year" />
    </Form.Group>
  );
};

export default Course;
