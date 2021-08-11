/*
Author: Aaron & Jose
File: StudentCard.js
*/

// React
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
// CSS
import "../../../css/Search.css";
// Default Image (if user has no image)
import { defaultImage } from "../../global/DefaultImage";
// React Boostrap
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
//Pop Up Form
import RatingPopup from "../../forms/Rating";
import HirePopup from "../../forms/Hire";
//API
import API_INSERT_STUDENT_ALERT from "../../../../models/POST/Employers/insert_hire";

const StudentCard = ({
  // default props, if props are empty
  image = "",
  studentName = "student name",
  rating = 0,
  gpa = "0",
  schoolName = "school name",
  studentEnrollment = "",
  major = "undeclared",
  studentID = 0,
  about,
}) => {
  // Popups
  const [ratingPopup, setRatingPopup] = useState(false);
  const [hirePopup, setHirePopup] = useState(false);
  //Redirect
  const history = useHistory();
  //Cookie
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Cur use

  //Redirect to Profile
  const RedirectProfile = () => {
    history.push({
      pathname: "/full-student-profile",
      Student_ID: studentID,
    });
  };
  //Insert Student Alert
  const hireB = () => {
    console.log(studentID); //Student ID
    console.log(cookie.ID_OF_USER); //ID of Employer
  };

  return (
    <div className="card-result">
      <header>
        <img
          src={image.length <= 0 ? defaultImage(studentName) : image}
          alt={studentName.charAt(0)}
        />
        <div className="info">
          <div className="flex-box name-enrollment">
            <h4>{studentName}</h4>
            <p id="enrollment">{studentEnrollment}</p>
          </div>
          <h6>{schoolName}</h6>
          <div className="flex-box">
            <p className="gpa">{gpa} GPA</p>
            {/* Indicates that there is no ratings for the user if the prop is 0 */}
            {rating === 0 ? (
              <p id="no-rating">No ratings yet</p>
            ) : (
              <ProgressBar
                now={rating}
                label={`${rating}` + " / 5"}
                min="0"
                max="5"
                variant="info"
                style={{ width: "60%" }}
                id="progress-bar"
              />
            )}
          </div>
        </div>
      </header>
      <div className="flex-box" style={{ justifyContent: "space-around" }}>
        {/* Only visible to employers */}
        {cookie.Type_User === "employer" ? (
          <Button onClick={() => setHirePopup(true)}>Hire</Button>
        ) : null}
        <HirePopup
          onClick={() => console.log("something")}
          show={hirePopup}
          onHide={() => setHirePopup(false)}
          setHirePopup={setHirePopup}
        />
        {/* Profile Page */}
        <Button onClick={() => RedirectProfile()}>Profile</Button>
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
  );
};

export default StudentCard;
