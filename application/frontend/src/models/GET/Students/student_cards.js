import PORT_HOST from "../../../config";
const API_FETCH_STUDENTS = async (setArr) => {
  const response = await fetch(`${PORT_HOST.PORT_HOST}/student_cards`);
  const data = await response.json();
  console.log(data);
  setArr(data);
  return;
};
export default API_FETCH_STUDENTS;
