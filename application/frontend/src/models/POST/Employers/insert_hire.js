/**
 * File: insert_student_hire.js
 * Purpose: Insert into student alerts
 * Functionality IE: Send POST request to Backend Server
 * Authors: Aaron
 */

import PORT_HOST from "../../../config";

export default async function API_INSERT_STUDENT_ALERT(Employer_Hire) {
  //Request Body & Header Configuration
  const headers = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Employer_Hire),
  };
  //Response
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}/insert_employer_hire`,
    headers
  );

  const status = response.status;
  return status;
}
