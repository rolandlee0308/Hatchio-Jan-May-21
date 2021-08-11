import PORT_HOST from "../../../config";
const API_STUDENT_RATING_NOTIFICATIONS = async (
  setArr,
  setHiredNotification,
  student_identifier
) => {
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}/student-ratings?s_id=${student_identifier}`
  );
  const data = await response.json();
  const dataHired = await fetch(
    `${PORT_HOST.PORT_HOST}/get-student-alerts?s_id=${student_identifier}`
  );
  const dataHired_response = await dataHired.json();
  if (data == 400) {
    //Dont set the data
    return;
  } else {
    console.log(data);
    console.log("Hired Response", dataHired_response);
    setArr(data);
    setHiredNotification(dataHired_response);
  }
  return;
};
export default API_STUDENT_RATING_NOTIFICATIONS;
