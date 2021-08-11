/*
Author: Aaron S | Jose for formatting later i think
File: Full Student Profile
Functionality: Works with onClick from student search to access any full students view
*/
import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
// CSS
import "../../../css/Profiles.css";
import "../../../css/Theme.css";
// React Boostrap
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
//Import SVG Icons
import LocationIcon from "../../../content/svg/location-icon.svg";
import GlobeIcon from "../../../content/svg/globe-icon.svg";
import LinkedinIcon from "../../../content/svg/linkedin-icon.svg";
import ResumeIcon from "../../../content/svg/resume-icon.svg";
import GithubIcon from "../../../content/svg/github-icon.svg";
import ProjectIcon from "../../../content/svg/project-icon.svg";
import ExperienceIcon from "../../../content/svg/experience-icon.svg";
import EducationIcon from "../../../content/svg/education-icon.svg";
//Pop Up Form
import RatingPopup from "../../forms/Rating";
import HirePopup from "../../forms/Hire";
// Default Image
import { defaultImage } from "../../global/DefaultImage";
//API
import API_USER_GET_PROFILE from "../../../../models/user_profile";
import API_PROFESSOR_RATE_STUDENT from "../../../../models/POST/Professors/professor_rate";

const PublicStudentProfile = (props) => {
  // Popups
  const [ratingPopup, setRatingPopup] = useState(false);
  const [hirePopup, setHirePopup] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Current User
  const [userProfile, setuserProfile] = useState([
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
  ]);
  const [studentID, setStudentID] = useState(0);
  //Handle Refresh
  const [locationStatus, setLocationStatus] = useState(0);

  useEffect(() => {
    //If History was not Pushed
    if (location.Student_ID === undefined) {
      console.log("Undefined");
    } else {
      setLocationStatus(1); //Succesfull Location Status Push
      API_USER_GET_PROFILE("student", location.Student_ID, setuserProfile);
      setStudentID(location.Student_ID);
    }
  }, [location]);

  const RedirectStudentSearch = () => {
    history.push("/search-candidates");
  };
  if (locationStatus === 0) {
    return (
      <div>
        <h3>
          Please return back to the student search view page and do not refresh
          when viewing a student's full profile page.
        </h3>
        <Button onClick={() => RedirectStudentSearch()}>
          Go Back to Student Search
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button onClick={() => RedirectStudentSearch()}>
        Go Back to Student Search
      </Button>
      <hr></hr>
      {/* heading */}
      <div className="student-heading">
        {/* creates default image if none provided */}
        <img
          src={
            userProfile[1][0].profile_image === null
              ? defaultImage("Student Name")
              : userProfile[1][0].profile_image
          }
          alt={"S"}
        />
        <div className="right">
          {/* Student Name */}
          <h1>
            {userProfile[4][0].first_name + ` ` + userProfile[4][0].last_name}
          </h1>

          {/* Student Location */}
          <div className="flex-box">
            <img src={LocationIcon} alt="location pin" />
            <p>{userProfile[1][0].location}</p>
          </div>
          <div className="flex-box">
            {/* Only visible to employers */}
            {cookie.Type_User === "employer" ? (
              <Button onClick={() => setHirePopup(true)}>Hire</Button>
            ) : null}
            <HirePopup
              show={hirePopup}
              onHide={() => setHirePopup(false)}
              setHirePopup={setHirePopup}
            />
            {/* Only visible to professors */}
            {cookie.Type_User === "professor" ? (
              <Button onClick={() => setRatingPopup(true)}>Rate</Button>
            ) : null}
            <RatingPopup
              show={ratingPopup}
              onHide={() => setRatingPopup(false)}
              student={studentID}
              professor={cookie.ID_OF_USER}
              user={cookie.Type_User}
            />
          </div>
        </div>
      </div>

      {/* TODO:: Links */}
      <div
        className="flex-box student-links"
        style={{ justifyContent: "space-between" }}
      >
        <img src={GlobeIcon} alt="website url" />
        <img src={GithubIcon} alt="github" />
        <img src={LinkedinIcon} alt="linkedin" />
        <img src={ResumeIcon} alt="resume-pdf" />
      </div>

      {/* Student About Me */}
      <div className="student-about">
        <div className="flex-box">
          <h4>About Me</h4>
        </div>
        {/* About Me */}
        <p>{userProfile[1][0].about_me}</p>
      </div>
      {/* Student Qualities */}
      <div className="student-qualities">
        <div className="flex-box">
          <h4>Top Qualities</h4>
        </div>
        {/* Maps Every Quality Stored For The Student */}
        <li>
          {String(
            userProfile[1].length === 0
              ? "No Qualtites"
              : userProfile[1][0].strengths_qualities
          )
            .split(",")
            .map((quality) => (
              <ul>{quality}</ul>
            ))}
        </li>
      </div>

      <div className="student-grid">
        {/* Student Projects */}
        <div className="projects">
          <div className="flex-box">
            <h4>Projects</h4>
          </div>
          {/* Maps Every Project Stored For The Student */}
          {userProfile[2].map((project) => (
            <div className="student-project flex-box">
              {/* Project Icon */}
              <div className="img-box">
                <img src={ProjectIcon} alt="project icon" />
              </div>
              {/* Project Details */}
              <div className="right">
                {/* TODO:: Project Date */}
                <p id="date">November 20, 2020</p>
                <div className="flex-box">
                  {/* Project Name */}
                  <h5>{project.project_name}</h5>
                </div>
                {/* Project Description */}
                <p>{project.summary}</p>
                <div className="flex-box">
                  {/* Project Collaborator(s) */}
                  <h6>Collaborator(s):</h6>
                  {String(project.arr_collaborators_arr)
                    .split(",")
                    .map((collaborator) => (
                      <h6>&nbsp;{collaborator}</h6>
                    ))}
                </div>
                {/* Project Professor */}
                <h6>Professor: {project.professor}</h6>
                <li>
                  {String(project.arr_tools_used)
                    .split(",")
                    .map((tool) => (
                      <ul style={{ backgroundColor: "#66D3D9" }}>{tool}</ul>
                    ))}
                </li>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="education">
            {/* Student Education */}
            <div className="flex-box">
              <h4>Education</h4>
            </div>
            {/* Maps Every Education The Student Has Stored */}
            {userProfile[0].map((education) => (
              <div className="student-education flex-box">
                {/* creates default image if none provided */}
                <div className="img-box">
                  <img src={EducationIcon} alt="project icon" />
                </div>
                <div className="right">
                  <div className="flex-box">
                    {/* Education Degree Recieved */}
                    <h5>{education.degree}</h5>
                  </div>
                  {/* Education School Name */}
                  <h6>{education.school}</h6>
                  <p>GPA: {education.school_gpa}</p>
                  {/* Education Start - End Date (current or date) */}
                  <p>
                    {education.start_year} - {education.end_year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="experience">
            {/* experience */}

            <div className="flex-box">
              <h4 className="category-heading">Experience</h4>
            </div>
            {/** Map Experience */}
            {userProfile[5].length === 0
              ? "No Experience"
              : userProfile[5].map((data) => (
                  <div className="student-experience flex-box">
                    {/* creates default image if none provided */}
                    <div className="img-box">
                      <img src={ExperienceIcon} alt="project icon" />
                    </div>
                    <div className="right">
                      <div className="flex-box">
                        <h5>{data.experience_title_position}</h5>
                      </div>
                      <h6>{data.company_name}</h6>
                      <p>
                        {data.date_start} - {data.date_end}
                      </p>
                      <li>
                        <ul style={{ backgroundColor: "#EFE271" }}>
                          {data.arr_work_done_keywords}
                        </ul>
                      </li>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      {/* Student's Ratings */}
      <div className="student-reflection">
        <h4>Ratings</h4>
        {/* Maps Every Review From Professor(s) to Student */}
        {userProfile[3].map((review) => (
          <div className="rating">
            <header className="flex-box">
              <span className="flex-box">
                {/* Review: Professor Name */}
                <h5>
                  {review.first_name} {review.last_name}
                </h5>
                {/* Sum of Review */}
                <ProgressBar
                  now={review.rating_total}
                  label={`${review.rating_total}` + " / 5"}
                  min="0"
                  max="5"
                  variant="info"
                  style={{ width: "35%", marginTop: "5px" }}
                  id="progress-bar"
                />
              </span>
              {/* TODO:: date of the review */}
              <p>November 20, 2021</p>
            </header>
            {/* Professor's School At The Time Of The Review */}
            <h6>{review.school_name}</h6>
            {/* Professor's Review */}
            <p>{review.recommendation_comment}</p>
            <li>
              <ul>Commited To Success: {review.committed_to_success_level}</ul>
              <ul>Leadership: {review.leadership_level}</ul>
              <ul>Responsible: {review.responsible_level}</ul>
              <ul>Team Work: {review.team_work_level}</ul>
            </li>
          </div>
        ))}
      </div>
    </>
  );
};

export default PublicStudentProfile;
