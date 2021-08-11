/**
 * File: insert_student_projects.js
 * Purpose: Students to Insert Student Projects
 * Functionality IE: Send POST request to Backend Server
 * Authors: Aaron
 */

import PORT_HOST from "../../../config";

export default async function API_STUDENT_INSERT_PROJECTS(Student_Projects) {
  //Request Body & Header Configuration
  const headers = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Student_Projects),
  };
  //Response
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}/insert_student_projects`,
    headers
  );

  const status = response.status;
  return status;
}
