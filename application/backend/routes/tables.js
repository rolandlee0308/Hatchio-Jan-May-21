/**
 * File: tables.js
 * Purpose: These Route Definitions are just GET methods to aid in development.
 * Functionality IE: When you want to test a sign_in credential, you can use postman|browser to see JSON of what current cred users are in the database tables.
 * Author:Aaron, Lyra
 */
const SQL_QUERY = require('../mysql/users');
const SQL_CONNECTION = require('../config').SQL_CONNECTION;

module.exports = (app) => {
  var debugView = function(url, query) {
    app.get(url, (req, res) => {
      SQL_CONNECTION.query(query, (err, results) => {
        if (err) {
          return res.send(err);
        } else {
          return res.json(results);
        }
      });
    });
  };
  //JSON Students
  debugView('/students', SQL_QUERY.USER_STUDENTS);
  //JSON Professors
  debugView('/professors', SQL_QUERY.USER_PROFESSORS);
  //JSON Employers
  debugView('/employers', SQL_QUERY.USER_EMPLOYERS);
  //JSON Admins
  debugView('/admins', SQL_QUERY.USER_ADMINS);
};
