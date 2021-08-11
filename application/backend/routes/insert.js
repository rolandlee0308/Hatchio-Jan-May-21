/**
 * File: insert.js
 * Purpose: POST Methods any time user inserts data
 * Functionality IE: Frontend Employer's Dashboard to Post Jobs
 * Author: Aaron, Lyra
 */
const SQL_CONNECTION = require("../config").SQL_CONNECTION;

module.exports = (app) => {
  var insertRoute = function (url, query, jsonKeys) {
    app.post(url, (req, res) => {
      try {
        SQL_CONNECTION.query(
          query,
          jsonKeys.map((key) => req.body[key]),
          (err, results) => {
            if (err) {
              //Send 400: Bad Request
              return res.sendStatus(400);
            } else {
              //Send 201: Request Created
              return res.sendStatus(200);
            }
          }
        );
      } catch (e) {
        console.log(`Error ${e}`);
        return res.sendStatus(400);
      }
    });
  };
  // TODO: many of these categories should be domain-limited
  //POST: Job Listing From Employer
  /*
  insertRoute('/insert_job', `insert into company_listings(employer_id,
                                                           organization_name,
                                                           position_title,
                                                           location,
                                                           job_type,
                                                           experience_years,
                                                           experience_level,
                                                           salary,
                                                           about_us,
                                                           the_opportunity,
                                                           skillset,
                                                           benefits,
                                                           task_responsibilities) values (?,?,?,?,?,?,?,?,?,?,?,?,?);`,
    ['Employer_ID', 'organization_name', 'position_title', 'location', 'job_type', 'experience_years',
      'salary', 'about_us', 'the_opportunity', 'skillset', 'benefits', 'task_responsibilities']);
      */
  //POST: Student Profile Page
  insertRoute(
    "/insert_student_profile_page",
    "insert into student_profile_page(student_id,about_me,strengths_qualities,location,school_grade_level) values (?,?,?,?,?);",
    [
      "Student_ID",
      "about_me",
      "strengths_qualities",
      "location",
      "school_grade_level",
    ]
  );
  /*
  //POST Methods for Student Education
  insertRoute(
    "/insert_student_education",
    "insert into student_education(student_id, school, degree, school_gpa, study_major, start_year, end_year) values (?,?,?,?,?,?,?);",
    [
      "Student_ID",
      "school",
      "degree",
      "school_gpa",
      "study_major",
      "start_year",
      "end_year",
    ]
  );
  */
  //POST Methods for Student Projects
  insertRoute(
    "/insert_student_projects",
    "insert into student_projects(student_id, project_name, summary, arr_tools_used, professor, links_website, arr_collaborators_arr) values (?,?,?,?,?,?,?);",
    [
      "Student_ID",
      "project_name",
      "summary",
      "arr_tools_used",
      "professor",
      "links_website",
      "arr_collaborators_arr",
    ]
  );
};
