/**
 * File: tmp.js
 * Purpose:Temporary file to get routes working because of corruption or smn from last update
 * Functionality IE: Updating Rows, Inserting new rows, etc
 * Authors:
 * Aaron : GET | POST | PUT not imported in other files due to last revamp
 */
const mysql = require("mysql");
const CONFIG = require("../config");
const fs = require("fs");
const path = require("path");

const SQL_CONNECTION = mysql.createConnection(CONFIG.SQL_PORT);

module.exports = (app) => {
  //GET: Get all information for Jobs Listings
  app.get("/full-job-view", (req, res) => {
    //Get Row Identifier
    let sql_job_information = `select * from company_listings where listing_id = ${req.query.identifier_listing_row};`;
    try {
      SQL_CONNECTION.query(sql_job_information, (err, results) => {
        if (err) {
          return res.send(err);
        } else {
          return res.json(results);
        }
      });
    } catch (e) {
      console.log(`Error ${e}`);
      return res.sendStatus(400);
    }
  });
  //POST: Job Listing From Employer
  app.post("/insert_job", (req, res) => {
    try {
      let sql_insert_job_listings = `insert into company_listings(employer_id,organization_name,position_title,location,job_type,experience_years,experience_level,salary,about_us,the_opportunity,skillset,benefits,task_responsibilities) values (${req.body.Employer_ID},"${req.body.organization_name}","${req.body.position_title}","${req.body.location}","${req.body.job_type}",${req.body.experience_years},"${req.body.experience_levels}",${req.body.salary},"${req.body.about_us}","${req.body.the_opportunity}","${req.body.skillset}","${req.body.benefits}","${req.body.task_responsibilities}");`;
      SQL_CONNECTION.query(sql_insert_job_listings, (err, results) => {
        if (err) {
          //Send 400: Bad Request
          console.log("here");
          return res.sendStatus(400);
        } else {
          //Send 201: Request Created
          return res.sendStatus(200);
        }
      });
    } catch (e) {
      console.log(`Error ${e}`);
      return res.sendStatus(400);
    }
  });
  //POST Student Education
  app.post("/insert_student_education", (req, res) => {
    try {
      let sql_insert_student_education = `insert into student_education(student_id, school, degree, school_gpa, study_major, start_year, end_year) values(${req.body.Student_ID},"${req.body.school}","${req.body.degree}",${req.body.school_gpa},"${req.body.study_major}",${req.body.start_year},${req.body.end_year});`;
      console.log(sql_insert_student_education);
      SQL_CONNECTION.query(sql_insert_student_education, (err, results) => {
        if (err) {
          //Send 400: Bad Request
          return res.sendStatus(400);
        } else {
          //Send 201: Request Created
          return res.sendStatus(200);
        }
      });
    } catch (e) {
      console.log(`Error ${e}`);
      return res.sendStatus(400);
    }
  });
  //POST Student Experience
  app.post("/insert-experience", (req, res) => {
    try {
      let sql_insert_experience = `
      insert into student_experience
       (student_id,experience_title_position,company_name, date_start,date_end,arr_work_done_keywords,description_experience,location,employment_type)
       values
        (${req.body.Student_ID},"${req.body.experience_title_position}","${req.body.company_name}",'${req.body.date_start}','${req.body.date_end}',"${req.body.arr_work_done_keywords}","${req.body.description_experience}","${req.body.location}","${req.body.employement_type}");`;
      console.log(sql_insert_experience);
      SQL_CONNECTION.query(sql_insert_experience, (err, results) => {
        if (err) {
          return res.sendStatus(400);
        } else {
          return res.sendStatus(200);
        }
      });
    } catch (e) {
      console.log(`${e}`);
    }
  });
  //PUT Student About Me
  app.put("/about-me", (req, res) => {
    let sql = `update student_profile_page sp set about_me = "${req.query.about_me}" where sp.student_id = ${req.query.id};`;
    try {
      SQL_CONNECTION.query(sql, (err, results) => {
        if (err) {
          //Error
          console.log(err);
          return res.sendStatus(400);
        } else {
          console.log("ok");
          //True
          return res.sendStatus(200);
        }
      });
    } catch (e) {
      console.log(`${e}`);
    }
  });
  //GET: Student Ratings for Notifications
  app.get("/student-ratings", (req, res) => {
    let sql_v = `select professors.professor_id,rating_total,professors.first_name,publish_date,student_seen,student_hide, reflection_id  from student_ratings sr inner join professors on sr.professor_id = professors.professor_id where sr.student_id = ${req.query.s_id};`;
    try {
      SQL_CONNECTION.query(sql_v, (err, results) => {
        if (err) {
          console.log(err);
          return res.sendStatus(400); //Error code easier for frontend to process
        } else {
          return res.json(results);
        }
      });
    } catch (e) {
      console.log(`Error ${e}`);
    }
  });
  //POST: Altering states to control student ratings notifications
  app.put("/student-ratings", (req, res) => {
    if (req.query.table === "student_ratings") {
      let sql = `update ${req.query.table} set student_seen = 1 where reflection_id = ${req.query.id};`;
      console.log(req.body);
      try {
        SQL_CONNECTION.query(sql, (err, results) => {
          if (err) {
            return res.sendStatus(400);
          } else {
            return res.sendStatus(200);
          }
        });
        console.log(sql);
      } catch (e) {
        console.log(`Error ${e}`);
      }
    }
    if (req.query.table === "company_alerts") {
      let sql = `update ${req.query.table} set hidden = 1 where compalert_id = ${req.query.id};`;
      console.log(req.body);
      try {
        SQL_CONNECTION.query(sql, (err, results) => {
          if (err) {
            return res.sendStatus(400);
          } else {
            return res.sendStatus(200);
          }
        });
        console.log(sql);
      } catch (e) {
        console.log(`Error ${e}`);
      }
    }
    if (req.query.table === "student_alerts") {
      let sql = `update ${req.query.table} set hidden = 1 where stualert_id = ${req.query.id};`;
      console.log(req.body);
      try {
        SQL_CONNECTION.query(sql, (err, results) => {
          if (err) {
            return res.sendStatus(400);
          } else {
            return res.sendStatus(200);
          }
        });
        console.log(sql);
      } catch (e) {
        console.log(`Error ${e}`);
      }
    }
  });

  app.delete("/delete_job", (req, res) => {
    try {
      SQL_CONNECTION.query(`delete from company_listings where listing_id = ?;`, [req.query.id], (err, results) => {
        if (err) {
          return res.sendStatus(400);
        }
        return res.sendStatus(200);
      });
    } catch (e) {
      console.log(`Error ${e}`);
    }
  });

  app.get("/find_student", (req, res) => {
    try {
      SQL_CONNECTION.query(
        `select first_name, last_name, school_name from students where student_id = ?;
        select study_major from student_education where student_id = ?;
          select school_grade_level from student_profile_page where student_id = ?;`,
        [req.query.id, req.query.id, req.query.id],
        (err, results) => {
          if (err) {
            return res.sendStatus(400);
          }
          return res.json(results);
        }
      );
    } catch (e) {
      console.log(`Error ${e}`);
    }
  });
  //POST: Apply Job
  app.post("/insert_student_application", (req, res) => {
    const { student_id, employer_id, listing_id } = req.body;
    let check = `select * from company_alerts where student_id = ${student_id} and employer_id = ${employer_id} and listing_id = ${listing_id};`;
    SQL_CONNECTION.query(check, (err, result) => {
      if (err) {
        console.log(`${err}`);
        return res.sendStatus(400);
      }
      if (result.length > 0) {
        console.log("ERROR: data entry already exists in the database");
        return res.sendStatus(400);
      } else {
        let sql = `insert into company_alerts (student_id,employer_id,listing_id,hidden) values (${student_id},${employer_id},${listing_id},0);`;
        console.log(sql);
        SQL_CONNECTION.query(sql, (err, results) => {
          if (err) {
            console.log(`${err}`);
            return res.sendStatus(400);
          } else {
            console.log(`Success query: ${sql}`);
            return res.sendStatus(200);
          }
        });
      }
    });
  });

  //POST: Employer Hire
  app.post("/insert_employer_hire", (req, res) => {
    const { student_id, employer_id, listing_id } = req.body;
    let check = `select * from student_alerts where student_id = ${student_id} and employer_id = ${employer_id} and listing_id = ${listing_id};`;
    SQL_CONNECTION.query(check, (err, result) => {
      if (err) {
        console.log(`${err}`);
        return res.sendStatus(400);
      }
      if (result.length > 0) {
        console.log("ERROR: data entry already exists in the database");
        return res.sendStatus(400);
      } else {
        let sql = `insert into student_alerts (employer_id,student_id,listing_id,hidden) values (${employer_id},${student_id},${listing_id},0);`;
        SQL_CONNECTION.query(sql, (err, results) => {
          if (err) {
            console.log(`${err}`);
            return res.sendStatus(400);
          } else {
            console.log(`Success query: ${sql}`);
            return res.sendStatus(200);
          }
        });
      }
    });
  });
  //GET: Student Alerts TODO- Remove Passwords
  app.get("/get-student-alerts", (req, res) => {
    let sql_v_one = `select * from student_alerts left join employers on student_alerts.employer_id = employers.employer_id left join company_listings on student_alerts.listing_id = company_listings.listing_id where student_id= ${req.query.s_id};`;
    try {
      SQL_CONNECTION.query(sql_v_one, (err, results) => {
        if (err) {
          console.log(err);
          return res.sendStatus(400); //Error code easier for frontend to process
        } else {
          return res.json(results);
        }
      });
    } catch (e) {
      console.log(`Error ${e}`);
    }
  });
  //RESET DATABASE
  app.get("/reset-database", (req, res) => {
    const file = fs.readFileSync(path.resolve(__dirname, "../../database/reset.sql")).toString();
    SQL_CONNECTION.query(file, (err, result) => {
      if (err) {
        return err;
      } else {
        console.log(result);
        console.log("success reload");
        res.sendStatus(200);
      }
    });
  });
};
