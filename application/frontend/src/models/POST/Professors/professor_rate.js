import PORT_HOST from "../../../config";

export default async function API_PROFESSOR_RATE_STUDENT(
  s_id,
  p_id,
  res_int,
  tea_int,
  lead_int,
  cts_int,
  res_string,
  rt_total
) {
  const REQUEST_QUERY = `/rate_student?s_id=${s_id}&p_id=${p_id}&res_int=${res_int}&tea_int=${tea_int}&lead_int=${lead_int}&cts_int=${cts_int}&res_string=${res_string}&rt_total=2`;
  const response = await fetch(`${PORT_HOST.PORT_HOST}${REQUEST_QUERY}`);
  const confirmation = await response.json();
  return confirmation;
}
