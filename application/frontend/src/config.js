/**
 * File: frontend/src/config.js
 * Purpose: Returns correct server location across testing and prod environments
 * Author(s): Lyra
 **/
const servername = require('./servername');
const AWS_PORT = `http://18.118.187.238:5000`;
const LOCAL_PORT = `http://18.118.187.238:5000`;

const PORT_HOST = servername.SERVER === 'ubuntu' ? AWS_PORT : LOCAL_PORT;

module.exports = {
  PORT_HOST,
};
