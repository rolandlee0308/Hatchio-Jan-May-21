/**
 * File: users.js
 * Purpose: Store GET | POST Methods any time user is directly involved
 * Functionality IE: Frontend Sign In | Sign Up | User Dashboard
 * Authors:
 * Aaron : Sign In | Profile | Professor Rate Students
 * Roland: Sign Up
 * Lyra: Security fix
 */
const SQL_QUERY_USER = require("../mysql/users");
const SQL_QUERY_POST = require("../mysql/rate");
const SQL_QUERY = require("../mysql/userauth");
const SQL_CONNECTION = require("../config").SQL_CONNECTION;
const bcrypt = require("bcrypt");

module.exports = (app) => {
  //Register USER
  app.get("/register", (req, res) => {
    const { UserType, first_name, last_name, email, school_name, code } = req.query;

    bcrypt.hash(req.query.password, 10, function (err, hash) {
      req.query.password = hash;
      SQL_QUERY.USER_SIGN_UP(SQL_CONNECTION, req.query, (err, results) => {
        if (err) {
          console.log(`query-add-fail ${JSON.stringify(err)}`);
          return;
        } else {
          console.log(`query-add-success ${JSON.stringify(results)}`);
        }
      });
    });

    //console.log('req pwd: '+req.query.password);
    res.send("profile-added");
  });
  //Verify User and Store Browser Cookie
  // TODO: This has SQL injection vulnerabilities, but also, it doesn't bring any security in theory either,from what I can tell.
  app.get("/sign_in", (req, res) => {
    const { Email, Password, Type } = req.query;
    const Query_Verify = `select x.${Type}_id,x.first_name from ${Type}s x where email="${Email}" and password="${Password}";`;
    SQL_CONNECTION.query(Query_Verify, (err, results) => {
      console.log(results);
      //Send Error if Query is Wrong
      if (err) {
        res.send(false);
        return;
      }
      //If Empty, Check Decryption
      if (results.length == 0) {
        console.log("Results are Empty, not FOund in orginal query");

        const Retrieve_PWD = `select password from ${Type}s where email="${Email}";`;

        SQL_CONNECTION.query(Retrieve_PWD, (err, results) => {
          const Hashdb = results[0].password;

          bcrypt.compare(Password, Hashdb, function (err, response) {
            console.log(`THE RESPONSE: ${response} `);
            if (err) console.log("Unexpected error occur during user authentication");
            if (response) {
              console.log("Passwords matched");
              const Query_Verify = `select x.${Type}_id,x.first_name from ${Type}s x where email="${Email}";`;
              SQL_CONNECTION.query(Query_Verify, (err, results) => {
                if (err) {
                  res.send(false);
                } else {
                  try {
                    var tmpo = [];
                    for (key in results[0]) {
                      tmpo.push(key);
                    }
                    res.cookie("Type_User", Type);
                    res.cookie("ID_OF_USER", results[0][tmpo[0]]);
                    res.cookie("First_Name", results[0][tmpo[1]]);
                    res.send(true);
                  } catch (e) {
                    res.send(false);
                  }
                }
              });
            } else {
              console.log(`Passwords don't match`);
              res.send(false);
              return;
            }
          });
        });
      }
      //Check Raw Password
      else {
        try {
          var tmpo = [];
          for (key in results[0]) {
            tmpo.push(key);
          }
          res.cookie("Type_User", Type);
          res.cookie("ID_OF_USER", results[0][tmpo[0]]);
          res.cookie("First_Name", results[0][tmpo[1]]);
          res.send(true);
        } catch (e) {
          res.send(false);
        }
      }
    });
  });
  //Get User Profile
  app.get("/profile", (req, res) => {
    SQL_QUERY_USER.USER_PROFILE(SQL_CONNECTION, req.query, (err, results) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(results);
      }
    });
  });
  // Insert Student Rating
  app.get("/rate_student", (req, res) => {
    SQL_QUERY_POST.PROFESSOR_RATE_STUDENT(SQL_CONNECTION, req.query, (err, results) => {
      if (err) {
        res.send(false);
      } else {
        //console.log(results);
        res.send(true);
      }
    });
  });
};
