/**
 * File: insert_student_education.js
 * Purpose: Students to Insert Student Education
 * Functionality IE: Send POST request to Backend Server
 * Authors: Aaron
 */

import PORT_HOST from "../../../config";

export default async function API_STUDENT_INSERT_EDUCATION(Student_Education) {
  //Request Body & Header Configuration
  const headers = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Student_Education),
  };
  //Response
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}/insert_student_education`,
    headers
  );

  const status = response.status;
  return status;
}
