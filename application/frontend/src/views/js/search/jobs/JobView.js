// React
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
// React Boostrap
import Button from "react-bootstrap/Button";

//API
import API_JOB_LISTING_VIEW from "../../../../models/GET/Jobs/job_view";
const JobView = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [locationStatus, setLocationStatus] = useState(0);
  const [dbJob, setdbJob] = useState([{}]);

  //JSX
  const Job_Listing_Information = (
    <div>
      <p>
        {dbJob[0].length == 0
          ? "Loading or Database Disconnected"
          : "Organization Name" +
            dbJob[0].organization_name +
            "Job Type" +
            dbJob[0].job_type +
            "Job Type" +
            dbJob[0].experience_years +
            "Experience Level" +
            dbJob[0].experience_level +
            "Salary" +
            dbJob[0].salary +
            "About Us" +
            dbJob[0].about_us +
            "The Oppurtunityj" +
            dbJob[0].the_oppurtunity +
            "The Skillset" +
            dbJob[0].skillset +
            "Benefits" +
            dbJob[0].benefits +
            "Task Responsibilities" +
            dbJob[0].task_responsibilities +
            ""}
      </p>
    </div>
  );

  useEffect(() => {
    if (location.Listing_id == undefined) {
      console.log("Not From Click View");
    } else {
      setLocationStatus(1); //Succesfull Location Status Push
      API_JOB_LISTING_VIEW(setdbJob, location.Listing_id);
    }
  }, [location]);
  const RedirectJobSearch = () => {
    history.push("/search-jobs");
  };

  if (locationStatus == 0) {
    return (
      <div>
        <h3>
          Please return back to the job search page and do not refresh page when
          viewing a full job listing page
        </h3>
        <Button onClick={() => RedirectJobSearch()}>Back to Job Search</Button>
      </div>
    );
  }
  return (
    <div>
      <Button onClick={() => RedirectJobSearch()}>Back to Job Search</Button>
      <h3>Job View Page</h3>
      <h5>Information</h5>
      {Job_Listing_Information}
    </div>
  );
};

export default JobView;
