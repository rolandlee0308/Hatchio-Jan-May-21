import PORT_HOST from "../config";
import API_FIND_CANDIDATE from "../models/GET/Students/student_info";

export default async function API_USER_GET_PROFILE(typeUser, idr, setState) {
  const response = await fetch(
    `${PORT_HOST.PORT_HOST}/profile?ts=${typeUser}&bs=${idr}`
  );
  var data = await response.json();
  //if condition
  //data [[0], [1], [2]]
  //if (data[[2]])
  // console.log("whole data: ",data);
  if (typeUser === "employer") {
    var uniqueList = [];
    var output = [];
    for (let i = 0; i < data[2].length; i++) {
      uniqueList.push(data[2][i].student_id);
    }
    uniqueList = Array.from(new Set(uniqueList));
    // console.log("uniqueList",uniqueList);
    for (let i = 0; i < uniqueList.length; i++) {
      output.push(API_FIND_CANDIDATE(uniqueList[i]));
    }
    // console.log("output",output);
    output = await Promise.all(output);
    console.log("output", output);
    data.push(output);
    console.log("whole data: ", data);
  }
  setState(data);
  return data;
}
