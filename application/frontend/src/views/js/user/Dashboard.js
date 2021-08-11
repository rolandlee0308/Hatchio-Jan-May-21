/**
 * File: Dashboard.js
 * Purpose: Serve Unique Dashboard for varying users
 * Functionality IE: Render dynamically based on logged in User.
 * Authors:
 * Aaron implementing Cookies & Condition
 * Jose: Profile Components for Student | Professor | Employer
 */
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
// CSS
import "../../css/Help.css";
// Profile Components
import StudentProfile from "../profiles/student/StudentProfile";
import ProfessorProfile from "../profiles/professor/ProfessorProfile";
import CompanyProfile from "../profiles/company/CompanyProfile";
//API
import API_USER_GET_PROFILE from "../../../models/user_profile";
const Dashboard = () => {
  //Get Profile from Database
  useEffect(() => {
    API_USER_GET_PROFILE(cookie.Type_User, cookie.ID_OF_USER, setuserProfile);
  }, []);
  //Current User
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]);
  //User Profile Return
  const [userProfile, setuserProfile] = useState([
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
  ]);

  if (cookie.Type_User === "student") {
    return <StudentProfile {...userProfile} />;
  } else if (cookie.Type_User === "professor") {
    return <ProfessorProfile {...userProfile} />;
  } else if (cookie.Type_User === "employer") {
    return <CompanyProfile {...userProfile} />;
  }
  return (
    <div>
      <h1 className="mini-title">Refresh page or Sign in </h1>
    </div>
  );
};

export default Dashboard;
