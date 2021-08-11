/**
 * File: insert_student_experience.js
 * Purpose: Students to Insert Student Experience
 * Functionality IE: Send POST request to Backend Server
 * Authors: Aaron
 */

import PORT_HOST from "../../../config";

export default async function API_STUDENT_INSERT_EXPERIENCE(
  Student_Experience
) {
  //Request Body & Header Configuration
  const headers = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Student_Experience),
  };
  //Response
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}/insert-experience`,
    headers
  );

  const status = response.status;
  return status;
}
