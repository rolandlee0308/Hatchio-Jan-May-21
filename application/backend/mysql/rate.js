const PROFESSOR_RATE_STUDENT = function(db, query, callback) {
  db.query(`insert into student_ratings (student_id,professor_id,responsible_level,team_work_level,leadership_level,committed_to_success_level,recommendation_comment,rating_total)
            values (?,?,?,?,?,?,?,?);`,
           [query.s_id, query.p_id, query.res_int, query.tea_int, query.lead_int, query.cts_int, query.res_string, query.rt_total],
           callback);
};

// TODO(Lyra): Request review, compute Laplace-Bayes estimation of mean, restrict domain
module.exports = {
  PROFESSOR_RATE_STUDENT,
};
