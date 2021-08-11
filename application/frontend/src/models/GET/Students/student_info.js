import PORT_HOST from "../../../config";

const API_FIND_CANDIDATE = async(student_id) => {
  const header = {method: "GET"};
  const REQUEST_QUERY = `/find_student?id=${student_id}`;
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}${REQUEST_QUERY}`,
    header
  );
  const data = await response.json();
  if (data == 400) {
    //Dont set the data
    return;
  } else {
    var tempArr = [{id: student_id}];
    // console.log(tempArr);
    for (let i = 0; i < data.length; i++) {
     tempArr = tempArr.concat(data[i]);
    }
    //console.log("b4",tempArr);
    tempArr = Object.assign({}, ...tempArr);
    //console.log(tempArr);
    return tempArr;
  }
};
export default API_FIND_CANDIDATE;
