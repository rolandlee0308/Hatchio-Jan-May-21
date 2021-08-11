import PORT_HOST from "../../../config";
const API_JOB_LISTINGS_FETCH = async (setArr) => {
  const response = await fetch(`${PORT_HOST.PORT_HOST}/job_cards`);
  const data = await response.json();
  console.log(data);
  setArr(data);
  return;
};
export default API_JOB_LISTINGS_FETCH;
