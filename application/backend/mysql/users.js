const CONFIG = require("../config");

//User Tables
const USER_STUDENTS = "select * from students";
const USER_PROFESSORS = "select * from professors";
const USER_EMPLOYERS = "select * from employers";
const USER_ADMINS = "select * from admins;";

//User Profile Joined Tables
const USER_PROFILE = function (db, query, callback) {
  const table = query.ts;
  const id = query.bs;
  if (table === "student") {
    //Return Student Education, Student Ratings, Student Projects, Student Profile, Student Experience
    db.query(
      `select school,degree,school_gpa,study_major,start_year,end_year from student_education where student_id = ?;
              select about_me, strengths_qualities, location, school_grade_level, resume, profile_image from student_profile_page where student_id=?;  #profile
              select project_name,summary,arr_tools_used,professor,links_website,arr_collaborators_arr from student_projects where student_id=?; #projects
              select sr.student_id,
                     p.first_name,
                     p.last_name,
                     p.school_name,
                     sr.responsible_level,
                     sr.team_work_level,
                     sr.leadership_level,
                     sr.committed_to_success_level,
                     sr.recommendation_comment,
                     sr.publish_date,
                     sr.rating_total from student_ratings sr inner join professors p on sr.professor_id = p.professor_id where sr.student_id = ?;
              select first_name,last_name,email from students where student_id = ?;
              select * from student_experience where student_id= ?;#student_experience
              `,
      [id, id, id, id, id, id],
      callback
    );
  } else if (table === "professor") {
    db.query(
      "select first_name, last_name, school_name, email from professors where professor_id=?;",
      [id],
      callback
    );
  } else if (table === "employer") {
    //Return Employer Information
    //Then return Employer Employed Jobs
    db.query(
      `select first_name, last_name, organization_name, email from employers where employer_id=?;
              select listing_id, position_title, location, job_type, experience_years, salary, about_us, the_opportunity, task_responsibilities, skillset, benefits
                  from company_listings where employer_id=?;
                  select compalert_id, student_id, listing_id, time, hidden from company_alerts where employer_id=?;`,
      [id, id, id],
      callback
    );
  }
};

// As this functionality returns ALL information from the database, inclusing passwords,
// the ONLY way of making it secure is to disable it entirely on the production server.
const debugExports = {
  USER_STUDENTS,
  USER_PROFESSORS,
  USER_EMPLOYERS,
  USER_ADMINS,
  USER_PROFILE,
};
module.exports = CONFIG.DEBUG_ENVIRONMENT ? debugExports : debugExports;
