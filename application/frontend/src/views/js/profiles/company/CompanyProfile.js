import { useState, useEffect } from "react";
import Collapsible from "react-collapsible";
import { useCookies } from "react-cookie";
import API_REMOVE_JOB from "../../../../models/delete_job";
import API_UPDATE_STUDENT_RATING_NOTIFICATION from "../../../../models/PUT/Students/update_ratings_notification";
import API_INSERT_STUDENT_ALERT from "../../../../models/POST/Employers/insert_hire";
const CompanyProfile = (props) => {
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Cur use
  const [activeComponent, setactiveComponent] = useState([]);
  const [userProfilee, setuserProfilee] = useState([
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    { null: "null" },
  ]);

  const removeJob = async (listing_id) => {
    const response = await API_REMOVE_JOB(listing_id);
    if (response.status === 400) console.log("Failed to update");
    if (response.status === 200) console.log("Success");
    window.location.reload();
  };

  const assignment = (listing_id) => {
    // console.log("list:"+listing_id);
    setactiveComponent([...activeComponent, listing_id]);
    // console.log("active");
    // console.log("assign",activeComponent);
  };

  const handleRemoveItem = (listing_id) => {
    setactiveComponent(activeComponent.filter((item) => item !== listing_id));
    // console.log("remove",activeComponent);
  };

  const seenNotification = async (compalert_id,table) => {
    const response = await API_UPDATE_STUDENT_RATING_NOTIFICATION(
      compalert_id,
      table
    );
    if (response.status == 400) {
      console.log("Failed to Update");
    }
    if (response.status == 200) {
      console.log("Sucess ");
      window.location.reload();
    }
  };

  function converter(dataitem) {
    if (dataitem) {
      var t = dataitem.split(/[- : T]/);
      var d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4]));
      d = d.toString().split(" ");
      return d[1] + " " + d[2] + ", " + d[3];
    }
  }
  const Employer_Information = userProfilee[0].map((data) => (
    <div>
      <p>Name: {data.first_name + data.last_name}</p>
      <p>Organization: {data.organization_name}</p>
      <p>Email: {data.email}</p>
    </div>
  ));

  var Employer_Jobs_Openings = userProfilee[1].map((data) => (
    <div>
      <p>Job Title: {data.position_title} </p>
      <p>Location: {data.location}</p>
      <p>Job Type: {data.job_type}</p>
      <p>Experience Years: {data.experience_years}</p>
      <p>Salary: {data.salary}</p>
      <p>Skillset : {data.skillset}</p>
      <p>Task Responsibilites: {data.task_responsibilities}</p>
      <p>The Opportunity: {data.the_opportunity}</p>
    </div>
  ));

  //Insert Student Alert
  const hireB = async (studentID, ListingID, company_alert) => {
    console.log("Student ID", studentID); //Student ID
    console.log("Listing ID", ListingID); //Listing ID
    console.log("Cookie of User", cookie.ID_OF_USER); //ID of Employer
    const response = await API_INSERT_STUDENT_ALERT({
      employer_id: cookie.ID_OF_USER,
      student_id: studentID,
      listing_id: ListingID,
    });
    if (response == 200) {
      console.log("Success Hire");
      seenNotification(company_alert);

      //hide notification
    }
    if (response == 400) {
      console.log("success fail");
    }
  };
  var Employer_Find_Candidates = userProfilee[2].map((data) => (
    <div>
      {activeComponent.map((active) => {
        if (active === data.listing_id && data.hidden === 0) {
          return (
            <>
              <p>
                <strong>Alert</strong>: {data.compalert_id}
              </p>
              <p>Notified {converter(data.time)}</p>
              <p>student_id: {data.student_id}</p>
              <p>listing_id: {data.listing_id}</p>
              {userProfilee[3].map((value) => {
                if (data.student_id === value.id) {
                  return (
                    <>
                      <p>
                        <strong>Candidate: </strong>
                        {value.first_name + " " + value.last_name}
                      </p>
                      <p>
                        <strong>School: </strong>
                        {value.school_name}
                      </p>
                      <p>
                        <strong>Major: </strong>
                        {value.study_major}
                      </p>
                      <p>
                        <strong>School Year: </strong>
                        {value.school_grade_level}
                      </p>
                      <button
                        onClick={() =>
                          hireB(
                            data.student_id,
                            data.listing_id,
                            data.compalert_id
                          )
                        }
                      >
                        HIRE
                      </button>
                      <button
                        onClick={() => seenNotification(data.compalert_id,"company_alerts")}
                      >
                        Hide
                      </button>
                      <br></br>
                      <br></br>
                    </>
                  );
                }
              })}
            </>
          );
        }
      })}
    </div>
  ));

  useEffect(() => {
    setuserProfilee(props);
  }, [props]);

  if (window.location.pathname === "/notifications") {
    Employer_Jobs_Openings = userProfilee[1].map((data) => (
      <div>
        <Collapsible
          trigger={data.position_title + " #" + data.listing_id}
          onOpen={() => assignment(data.listing_id)}
          onClose={() => handleRemoveItem(data.listing_id)}
        >
          <div>
            <p>Location: {data.location}</p>
            <p>Job Type: {data.job_type}</p>
            <p>Experience Years: {data.experience_years}</p>
            <p>Salary: {data.salary}</p>
            <p>Skillset : {data.skillset}</p>
            <p>Task Responsibilites: {data.task_responsibilities}</p>
            <p>The Opportunity: {data.the_opportunity}</p>
          </div>
        </Collapsible>
        <button onClick={() => removeJob(data.listing_id)}>DELETE</button>
      </div>
    ));

    return (
      <div>
        {Employer_Jobs_Openings}
        <h3>Candidates Found</h3>
        {Employer_Find_Candidates}
      </div>
    );
  }

  return (
    <div>
      <h3>Employer Information</h3>
      {Employer_Information}
      <h3>Employer Jobs Made</h3>
      {Employer_Jobs_Openings}
    </div>
  );
};

export default CompanyProfile;
