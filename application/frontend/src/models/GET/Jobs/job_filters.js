import PORT_HOST from "../../../config";

const API_JOB_LISTINGS_FETCH_FILTER = async (
  setArr,
  JobType,
  PositionTitle
) => {
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}/filter_job_cards?job_type=${JobType}&position_title=${PositionTitle}`
  );
  const data = await response.json();
  setArr(data);
  return;
};

export default API_JOB_LISTINGS_FETCH_FILTER;
