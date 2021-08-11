/**
 * File: insert_job.js
 * Purpose: Employers to Insert Job
 * Functionality IE: Send POST request to Backend Server
 * Authors: Aaron
 */

import PORT_HOST from "../../../config";

export default async function API_EMPLOYER_INSERT_JOB(JobListings) {
  //Request Body & Header Configuration
  const headers = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(JobListings),
  };
  //Response
  const response = await fetch(`${PORT_HOST.PORT_HOST}/insert_job`, headers);
  const status = response.status;
  return status;
}
