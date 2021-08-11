/**
 * File: insert_student_profile.js
 * Purpose: Students to Insert Student Profile
 * Functionality IE: Send POST request to Backend Server
 * Authors: Aaron
 */

import PORT_HOST from "../../../config";

export default async function API_STUDENT_INSERT_PROFILE(Student_Profile_Page) {
  //Request Body & Header Configuration
  const headers = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Student_Profile_Page),
  };
  //Response
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}/insert_student_profile_page`,
    headers
  );
  const status = response.status;
  return status;
}
