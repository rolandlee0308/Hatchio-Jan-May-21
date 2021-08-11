/**
 * File: insert_student_apply.js
 * Purpose: Students to Company Alerts for Job Application
 * Functionality IE: Send POST request to Backend Server
 * Authors: Aaron
 */

import PORT_HOST from "../../../config";

export default async function API_INSERT_STUDENT_APPLICATION(
  Student_Application
) {
  //Request Body & Header Configuration
  const headers = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Student_Application),
  };
  //Response
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}/insert_student_application`,
    headers
  );

  const status = response.status;
  return status;
}
