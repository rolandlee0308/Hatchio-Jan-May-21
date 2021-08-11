import PORT_HOST from "../../../config";

export default async function API_UPDATE_STUDENT_ABOUT_ME(
  student_id,
  about_me
) {
  const headers = { method: "PUT" };
  const REQUEST_QUERY = `/about-me?id=${student_id}&about_me=${about_me}`;
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}${REQUEST_QUERY}`,
    headers
  );

  return response;
}
