/**
 * File: PostJobs.js
 * Purpose: Employers to Insert Job
 * Functionality IE: Send POST request to Backend Server
 * Authors: Aaron Set API and Response Check
 */

import { useCookies } from "react-cookie";
import { Formik, Field, Form } from "formik";
//API
import API_EMPLOYER_INSERT_JOB from "../../../../models/POST/Employers/insert_job";
const PostJobs = () => {
  //Init user
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Cur use
  if (cookie.Type_User === "employer") {
    return (
      <div>
        <h3>
          Page will refresh and populate under job listings if query was success
        </h3>
        <h3>
          Otherwise if there was an error no refresh will happen, check logs
          with error res
        </h3>
        <p>Employer Insert Jobs</p>

        <Formik
          initialValues={{
            Employer_ID: cookie.ID_OF_USER,
            organization_name: "Organization Name",
            position_title: "User Experience Designer | Backend Developer Etc",
            location: "California | New York | Etc",
            job_type: "Full Time | Part Time | Remote | Contract",
            experience_years: 2,
            experience_levels: "Senior Level | Junior | First Time ",
            salary: 0,
            about_us: "About Us Description",
            the_opportunity: "Paycheck",
            task_responsibilites: "Work along w/ Developers",
            skillset: "Good Stamina",
            benefits: "401k Plan",
            landing_image: null,
          }}
          onSubmit={async (values) => {
            const response = await API_EMPLOYER_INSERT_JOB(values);
            console.log(response);
            if (response === 400) {
              console.log("error");
            }
            if (response === 200) {
              window.location.reload();
              console.log("success");
            }
            return;
          }}
        >
          <Form>
            <label>Organization Name</label>
            <Field
              id="organization_name"
              name="organization_name"
              placeholder="Organization Name"
            />
            <br></br>
            <label>Position Title</label>
            <Field
              id="position_title"
              name="position_title"
              placeholder="Position Title"
            />
            <br></br>
            <label>Location</label>
            <Field id="location" name="location" />
            <br></br>
            <label>Job Type</label>
            <Field id="job_type" name="job_type" />
            <br></br>
            <label>Experience Years</label>
            <Field id="experience_years" name="experience_years" />
            <br></br>
            <label>Experience Levels</label>
            <Field id="experience_levels" name="experience_levels" />
            <br></br>
            <label>Salary </label>
            <Field id="salary" name="salary" />
            <br></br>
            <label>About Us </label>
            <Field id="about_us" name="about_us" />
            <br></br>
            <label>The Opportunity </label>
            <Field id="the_opportunity" name="the_opportunity" />
            <br></br>
            <label>Task Responsibilities </label>
            <Field id="task_responsibilites" name="task_responsibilites" />
            <br></br>
            <label>Skillset </label>
            <Field id="skillset" name="skillset" />
            <br></br>
            <label>Benefits </label>
            <Field id="benefits" name="benefits" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
  return (
    <div>
      <h3>Sign in as an Employer to Access this page</h3>
    </div>
  );
};

export default PostJobs;
