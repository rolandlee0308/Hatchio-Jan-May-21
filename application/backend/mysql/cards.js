const API_STUDENT_CARD = function (db, query, callback) {
  const queryString = `
SELECT Distinct
    students.student_id,
    students.first_name,
    students.last_name,
    student_education.study_major,
    student_education.school_gpa,
    student_education.start_year,
    student_education.school,
    student_profile_page.about_me,
    student_profile_page.profile_image,
    student_profile_page.school_grade_level,
    strengths_qualities,
    student_ratings.rating_total
FROM
    students
        JOIN
    student_profile_page ON students.student_id = student_profile_page.student_id
        JOIN
    student_education ON students.student_id = student_education.student_id
     left join
    student_ratings ON students.student_id = student_ratings.student_id;
`;
  db.query(queryString, [], callback);
};

const API_JOB_CARD_FILTER = function (db, query, callback) {
  var queryString =
    "select listing_id,employer_id,position_title,organization_name,salary,location,about_us,job_type from company_listings";
  if (query.job_type === "Select" && query.position_title === "Select") {
    queryString += ";";
    db.query(queryString, [], callback);
  } else if (query.job_type === "Select") {
    queryString += " where position_title=?;";
    db.query(queryString, [query.position_title], callback);
  } else if (query.position_title === "Select") {
    queryString += " where job_type=?;";
    db.query(queryString, [query.job_type], callback);
  } else {
    queryString += " where job_type=? and position_title=?;";
    db.query(queryString, [query.job_type, query.position_title], callback);
  }
};

const API_JOB_CARD = function (db, query, callback) {
  const blankQuery = { job_type: "Select", position_title: "Select" };
  API_JOB_CARD_FILTER(db, blankQuery, callback);
};

module.exports = {
  API_STUDENT_CARD,
  API_JOB_CARD_FILTER,
  API_JOB_CARD,
};
