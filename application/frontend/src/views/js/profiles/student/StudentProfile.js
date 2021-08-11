import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
// CSS
import "../../../css/Profiles.css";
import "../../../css/Theme.css";
// React Boostrap
import ProgressBar from "react-bootstrap/ProgressBar";
//Import SVG Icons
import LocationIcon from "../../../content/svg/location-icon.svg";
import GlobeIcon from "../../../content/svg/globe-icon.svg";
import LinkedinIcon from "../../../content/svg/linkedin-icon.svg";
import ResumeIcon from "../../../content/svg/resume-icon.svg";
import GithubIcon from "../../../content/svg/github-icon.svg";
import EditIcon from "../../../content/svg/edit-icon.svg";
import AddIcon from "../../../content/svg/add-icon.svg";
import ProjectIcon from "../../../content/svg/project-icon.svg";
import ExperienceIcon from "../../../content/svg/experience-icon.svg";
import EducationIcon from "../../../content/svg/education-icon.svg";
// Form Components
import AboutPopup from "../../forms/Description";
import EducationPopup from "../../forms/Education";
import ExperiencePopup from "../../forms/Experience";
import LinksPopup from "../../forms/LinksStudent";
import ListPopup from "../../forms/List";
import LocationPopup from "../../forms/Location";
import ProjectPopup from "../../forms/Project";
// Default Image
import { defaultImage } from "../../global/DefaultImage";
//Import TMP
import API_STUDENT_INSERT_PROFILE from "../../../../models/POST/Students/insert_student_profile";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { Formik, Field, Form } from "formik";
const StyledPopup = styled(Popup)`
  &-content[role="tooltip"] {
    font-size: 15px;
    height: 100%;
    width: 100%;
    background-color: pink;
    text-color: white;
    text-align: center;
  }
`;
//POP UP Profile Page Insert
const POPUP_STUDENT_PROFILE_PAGE = (Student_ID) => {
  return (
    <div>
      <StyledPopup trigger={<button> Profile Page Insert</button>}>
        <Formik
          initialValues={{
            Student_ID: Student_ID,
            about_me: "about me",
            strengths_qualities: "honest,strong",
            location: "Location",
            school_grade_level: "Freshman,etc",
            //TODO: RESUME
            //TODO: PROFILE IMAGE
          }}
          onSubmit={async (values) => {
            console.log(values);
            const response = await API_STUDENT_INSERT_PROFILE(values);
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
            <br></br>
            <label>___________________________________________About Me</label>
            <Field id="about_me" name="about_me" />
            <hr></hr>

            <br></br>
            <label>
              ________________________________________Strenth Qualities
            </label>
            <Field id="strengths_qualities" name="strengths_qualities" />

            <hr></hr>
            <label>_____________________________________Location</label>
            <Field id="location" name="location" />

            <hr></hr>
            <label>
              ________________________________________School Grade Level
            </label>
            <Field id="school_grade_level" name="school_grade_level" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </StyledPopup>
    </div>
  );
};

const StudentProfile = (props) => {
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]);

  //Transferred User Profile State
  const [userProfile, setUserProfile] = useState([
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
  ]);
  // User Qualities
  const [qualities, setQualities] = useState([]);

  useEffect(() => {
    setUserProfile(props);
    console.log(props);

    setQualities(
      String(
        props[1].length === 0
          ? "Empty Qualities"
          : props[1][0].strengths_qualities
      ).split(",")
    );
  }, [props]);

  // Location Popup
  const [location, setLocation] = useState(false);
  // Links Popup
  const [links, setLinks] = useState(false);
  const [aboutPopup, setAboutPopup] = useState(false);
  const [listPopup, setListPopup] = useState(false);
  // Project Popups
  const [addProject, setAddProject] = useState(false);
  const [editProject, setEditProject] = useState(false);
  // Education Popups
  const [addEducation, setAddEducation] = useState(false);
  const [editEducation, setEditEducation] = useState(false);
  // Experienc Popups
  const [addExperience, setAddExperience] = useState(false);
  const [editExperience, setEditExperience] = useState(false);

  return (
    <>
      <div className="student-heading">
        {/* creates default image if none provided */}
        <img
          src={
            userProfile[1].length === 0
              ? defaultImage("Student")
              : defaultImage(String(userProfile[4][0].first_name))
          }
          alt={String(userProfile[4][0].first_name)}
        />
        <div className="right">
          {/* === Student Name === */}
          <div className="flex-box">
            <h6 className="category-heading">Full Name</h6>
          </div>
          <p>
            {userProfile[4][0].first_name + " " + userProfile[4][0].last_name}
          </p>

          {/* === Student Location ===*/}
          <div className="flex-box">
            <h6 className="category-heading">Location</h6>
            {/* Location Edit Popup */}
            <img
              id="edit-button"
              src={EditIcon}
              alt="edit pencil button"
              onClick={() => setLocation(true)}
            />
            <LocationPopup
              show={location}
              onHide={() => setLocation(false)}
              userID={cookie.ID_OF_USER}
              location={
                userProfile[1].length === 0
                  ? "Location Not Provided"
                  : userProfile[1][0].location
              }
            />
          </div>
          <div className="flex-box">
            <img src={LocationIcon} alt="location pin" />
            <p>
              {userProfile[1].length === 0
                ? "Location Not Provided"
                : userProfile[1][0].location}
            </p>
          </div>
        </div>
      </div>

      {/* TODO:: Links */}
      <div className="student-links">
        <div className="flex-box">
          <h5 className="category-heading">Links</h5>
          {/* Links Edit Popup */}
          <img
            id="edit-button"
            src={EditIcon}
            alt="edit pencil button"
            onClick={() => setLinks(true)}
          />
          <LinksPopup
            show={links}
            onHide={() => setLinks(false)}
            userID={cookie.ID_OF_USER}
          />
        </div>
        <div className="flex-box" style={{ justifyContent: "space-between" }}>
          <img src={GlobeIcon} alt="website url" />
          <img src={GithubIcon} alt="github" />
          <img src={LinkedinIcon} alt="linkedin" />
          <img src={ResumeIcon} alt="resume-pdf" />
        </div>
      </div>

      {/* Student About Me */}
      <div className="student-about">
        <div className="flex-box">
          <h4 className="category-heading">About Me</h4>
          {/* About Me Edit Popup */}
          <img
            id="edit-button"
            src={EditIcon}
            alt="edit pencil button"
            onClick={() => setAboutPopup(true)}
          />
          <AboutPopup
            show={aboutPopup}
            onHide={() => setAboutPopup(false)}
            userID={cookie.ID_OF_USER}
            heading="Edit About Me"
            about={
              userProfile[1].length === 0 ? "Empty" : userProfile[1][0].about_me
            }
          />
        </div>
        {/* About Me */}
        <p>
          {userProfile[1].length === 0
            ? POPUP_STUDENT_PROFILE_PAGE(cookie.ID_OF_USER)
            : userProfile[1][0].about_me}
        </p>
      </div>

      {/* Student Qualities */}
      <div className="student-qualities">
        <div className="flex-box">
          <h4 className="category-heading">Top Qualities</h4>
          {/* Qualities Edit Popup */}
          <img
            id="edit-button"
            src={EditIcon}
            alt="edit pencil button"
            onClick={() => setListPopup(true)}
          />
          <ListPopup
            show={listPopup}
            qualities={qualities}
            onHide={() => setListPopup(false)}
          />
        </div>
        {/* Maps Every Quality Stored For The Student */}
        <li>
          {qualities.map((quality) => (
            <ul>{quality}</ul>
          ))}
        </li>
      </div>

      <div className="student-grid">
        {/* Student Projects */}
        <div className="projects">
          <div className="flex-box">
            <h4 className="category-heading">Projects</h4>
            {/* Add New Project Popup */}
            <img
              id="edit-button"
              src={AddIcon}
              alt="edit pencil button"
              onClick={() => setAddProject(true)}
            />
            <ProjectPopup
              show={addProject}
              popupName={"Add"}
              userID={cookie.ID_OF_USER}
              onHide={() => setAddProject(false)}
            />
          </div>
          {/* Maps Every Project Stored For The Student */}
          {userProfile[2].length === 0
            ? "No Projects Found"
            : userProfile[2].map((project) => (
                <div className="student-project flex-box">
                  {/* Project Icon */}
                  <div className="img-box">
                    <img src={ProjectIcon} alt="project icon" />
                  </div>
                  {/* Project Details */}
                  <div className="right">
                    {/* TODO:: Project Date */}
                    <p id="date">{project.publish_date}</p>
                    <div className="flex-box">
                      {/* Project Name */}
                      <a
                        href={"https://" + project.links_website}
                        alt="project website"
                      >
                        <h5>{project.project_name}</h5>
                      </a>
                      {/* Edit Project Popup */}
                      <img
                        id="edit-button"
                        src={EditIcon}
                        alt="edit pencil button"
                        onClick={() => setEditProject(true)}
                      />
                      <ProjectPopup
                        show={editProject}
                        popupName={"Edit"}
                        userID={cookie.ID_OF_USER}
                        project={project.project_name}
                        summary={project.summary}
                        professor={project.professor}
                        tools={project.arr_tools_used}
                        website={project.links_website}
                        collaborators={project.arr_collaborators_arr}
                        onHide={() => setEditProject(false)}
                      />
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
                    {/* Keywords */}
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
              <h4 className="category-heading">Education</h4>
              {/* Add Education Popup */}
              <img
                id="edit-button"
                src={AddIcon}
                alt="edit pencil button"
                onClick={() => setAddEducation(true)}
              />
              <EducationPopup
                show={addEducation}
                onHide={() => setAddEducation(false)}
                userID={cookie.ID_OF_USER}
                popupName={"Add"}
              />
            </div>
            {/* Maps Every Education The Student Has Stored */}
            {userProfile[0].length === 0
              ? "No Education Found"
              : userProfile[0].map((education) => (
                  <div className="student-education flex-box">
                    {/* creates default image if none provided */}
                    <div className="img-box">
                      <img src={EducationIcon} alt="project icon" />
                    </div>
                    <div className="right">
                      <div className="flex-box">
                        {/* Education Degree Recieved */}
                        <h5>{education.degree}</h5>
                        {/* Edit Education Popup */}
                        <img
                          id="edit-button"
                          src={EditIcon}
                          alt="edit pencil button"
                          onClick={() => setEditEducation(true)}
                        />
                        <EducationPopup
                          show={editEducation}
                          popupName={"Edit"}
                          userID={cookie.ID_OF_USER}
                          school={education.school}
                          degree={education.degree}
                          gpa={education.school_gpa}
                          major={education.study_major}
                          startYear={education.start_year}
                          endYear={education.end_year}
                          onHide={() => setEditEducation(false)}
                        />
                      </div>
                      {/* Education School Name */}
                      <h6>{education.school}</h6>
                      <p>
                        GPA: {education.school_gpa} <br /> Years:{" "}
                        {education.start_year} - {education.end_year}
                      </p>
                      {/* Education Start - End Date (current or date) */}
                      <p></p>
                    </div>
                  </div>
                ))}
          </div>
          <div className="experience">
            {/* experience */}

            <div className="flex-box">
              <h4 className="category-heading">Experience</h4>
              {/* Add Experience Popup */}
              <img
                id="edit-button"
                src={AddIcon}
                alt="edit pencil button"
                onClick={() => setAddExperience(true)}
              />
              <ExperiencePopup
                userID={cookie.ID_OF_USER}
                show={addExperience}
                popupName={"Add"}
                onHide={() => setAddExperience(false)}
              />
            </div>
            {/** Map Experience */}
            {userProfile[5].length == 0
              ? "No Experience"
              : userProfile[5].map((experience) => (
                  <div className="student-experience flex-box">
                    {/* creates default image if none provided */}
                    <div className="img-box">
                      <img src={ExperienceIcon} alt="project icon" />
                    </div>
                    <div className="right">
                      <div className="flex-box">
                        <h5>{experience.experience_title_position}</h5>
                        {/* Edit Pencil --> Popup */}
                        <img
                          id="edit-button"
                          src={EditIcon}
                          alt="edit pencil button"
                          onClick={() => setEditExperience(true)}
                        />
                        <ExperiencePopup
                          show={editExperience}
                          popupName={"Edit"}
                          userID={cookie.ID_OF_USER}
                          company={experience.company_name}
                          dateStart={experience.date_start}
                          dateEnd={experience.date_end}
                          description={experience.description_experience}
                          position={experience.experience_title_position}
                          employmentType={experience.employement_type}
                          location={experience.location}
                          keywords={experience.arr_work_done_keywords}
                          onHide={() => setEditExperience(false)}
                        />
                      </div>
                      <h6>{experience.company_name}</h6>
                      <p>
                        {experience.date_start} - {experience.date_end}
                      </p>
                      {/* Keywords */}
                      <li>
                        {String(experience.arr_work_done_keywords)
                          .split(",")
                          .map((tool) => (
                            <ul style={{ backgroundColor: "#EFE271" }}>
                              {tool}
                            </ul>
                          ))}
                      </li>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      {/* Student's Ratings */}
      <div className="student-reflection">
        <h4 className="category-heading">Ratings</h4>
        {/* Maps Every Review From Professor(s) to Student */}
        {userProfile[3].length === 0
          ? "No Reflections Yet"
          : userProfile[3].map((review) => (
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
                  <p>{review.publish_date}</p>
                </header>
                {/* Professor's School At The Time Of The Review */}
                <h6>{review.school_name}</h6>
                {/* Professor's Review */}
                <p>{review.recommendation_comment}</p>
                <li>
                  <ul>
                    Commited To Success: {review.committed_to_success_level}
                  </ul>
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

export default StudentProfile;
