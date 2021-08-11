/*
 * File: JobCard.js
 * Functionality: Creates Card Component for jobs available within results
 * Author: Jose
 * Author: Aaron & Roland , apply and full window page
 */

import { useHistory } from "react-router-dom";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// Import SVG Icons
import LocationIcon from "../../../content/svg/location-icon.svg";
// Default Image (if user has no image)
import { defaultImage } from "../../global/DefaultImage";
// Image(s) or SVG
import circle from "../../../content/svg/demo-card-profile.svg";
// React Boostrap
import Button from "react-bootstrap/Button";
//Popop Form
import Popup from "reactjs-popup";
//Cookie
import { useCookies } from "react-cookie";
//API
import API_INSERT_STUDENT_APPLICATION from "../../../../models/POST/Students/insert_student_apply";
const JobCard = ({
  image = "",
  Listing_ID = 0,
  Employer_ID = 0,
  PositionTitle = "",
  CompanyName = "",
  Income = 0,
  AboutUs = "",
  JobType = "",
  Location = "",
}) => {
  const history = useHistory();
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Current User
  const Redirect_Job_View = (Listing_ID) => {
    console.log(`Listing ID: ${Listing_ID}`);
    history.push({
      pathname: "/full-job-view",
      Listing_id: Listing_ID,
    });
  };
  const Apply_Job = async (Student_ID) => {
    console.log(`Student ${Student_ID}`);
    console.log(`Listing ID ${Listing_ID}`);
    console.log(`Employer_ID ${Employer_ID}`);
    console.log(`ROLAND HELP TIME`);
    const response = await API_INSERT_STUDENT_APPLICATION({
      student_id: ` ${Student_ID}`,
      employer_id: `${Employer_ID}`,
      listing_id: `${Listing_ID}`,
    });
    if (response === 200) {
      console.log("application success");
    }
    if (response === 400) {
      console.log("application error");
    }
  };

  return (
    <div className="card-result">
      <header>
        <img
          src={image.length <= 0 ? defaultImage(CompanyName) : image}
          alt={CompanyName.charAt(0)}
        />
        <div className="info">
          <div className="name-enrollment">
            <h4 style={{ paddingBottom: "10px" }}>{PositionTitle}</h4>
          </div>

          <div className="flex-box">
            <h6 style={{ marginRight: "0.5rem" }}>{CompanyName}</h6>
            <p id="enrollment" style={{ marginTop: "-.2rem" }}>
              {JobType}
            </p>
            <p id="salary">${String(Income).slice(0, -3)}k / yr</p>
          </div>
          <div className="flext-box" style={{ marginTop: "-.7rem" }}>
            <img src={LocationIcon} alt="location pin" id="location" />
            <span>{Location}</span>
          </div>
        </div>
      </header>
      <div className="flex-box">
        <Button onClick={() => Redirect_Job_View(Listing_ID)}>View</Button>
        <Button onClick={() => Apply_Job(cookie.ID_OF_USER)}>Apply</Button>
      </div>
    </div>
  );
};

export default JobCard;
