/**
 * File: cards.js
 * Purpose: Get data from SQL database node_hatchio_db to serve on the frontend for search pages
 * Functionality IE: Fetch request with the frontend under search/jobs | search/students page
 * Author:Aaron, Lyra
 */
const SQL_QUERY = require('../mysql/cards');
const SQL_CONNECTION = require('../config').SQL_CONNECTION;

module.exports = (app) => {
  var cardRoute = function(url, queryGenerator) {
    app.get(url, (req, res) => {
      try {
        queryGenerator(SQL_CONNECTION, req.query, (err, results) => {
          if (err) {
            return res.send(err);
          } else {
            //Time out
            return res.json(results);
          }
        });
      } catch (e) {
        console.log(`Error ${e}`);
        return res.sendStatus(400);
      }
    });
  };
  //Student Cards Preload
  cardRoute("/student_cards", SQL_QUERY.API_STUDENT_CARD);
  //Job Cards Preload
  cardRoute("/job_cards", SQL_QUERY.API_JOB_CARD);
  // Filter Job Cards
  cardRoute("/filter_job_cards", SQL_QUERY.API_JOB_CARD_FILTER);
};
