import { PORT_HOST } from "../config";
import cryptoRandomString from "crypto-random-string";
var code = cryptoRandomString({ length: 100, type: "base64" })
  .replace(/[/+=]/g, "")
  .substr(-30);

export function api_send_email(jsonPOST) {
  const { email, usertype } = jsonPOST;
  console.log("User: " + usertype + "email: " + email + " code: " + code);
  fetch(
    `${PORT_HOST}/send?UserType=${usertype}&email=${email}&code=${code}`
  ).then((e) => console.log(`Response: ${JSON.stringify(e)}`));
}

export function api_register_user(jsonPOST) {
  const {
    usertype,
    firstName,
    lastName,
    schoolname,
    password,
    email,
  } = jsonPOST;
  fetch(
    `${PORT_HOST}/register?UserType=${usertype}&first_name=${firstName}&last_name=${lastName}&school_name=${schoolname}&password=${password}&email=${email}&code=${code}`
  ).then((e) => console.log(`Response: ${JSON.stringify(e)}`));
}
