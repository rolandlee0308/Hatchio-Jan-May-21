import PORT_HOST from "../../../config";
const API_JOB_LISTING_VIEW = async (setArr, identifier) => {
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}/full-job-view?identifier_listing_row=${identifier}`
  );
  const data = await response.json();
  console.log(data);
  setArr(data);
  return;
};
export default API_JOB_LISTING_VIEW;
