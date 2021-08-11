/**
 * File: ProfessorProfile.js
 * Purpose | Functionality: Profile Page from Dashboard js
 * Authors: Jose(Format & Structure) | Aaron(Insert in Format)
 */
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
// CSS
import "../../../css/Profiles.css";
import "../../../css/Theme.css";
//Import SVG Icons
import GlobeIcon from "../../../content/svg/globe-icon.svg";
import LinkedinIcon from "../../../content/svg/linkedin-icon.svg";
import EditIcon from "../../../content/svg/edit-icon.svg";
import AddIcon from "../../../content/svg/add-icon.svg";
import ExperienceIcon from "../../../content/svg/experience-icon.svg";
// Form Components
import AboutPopup from "../../forms/Description";
import ExperiencePopup from "../../forms/Experience";
import LinksPopup from "../../forms/LinksProfessor";
// Default Image
import { defaultImage } from "../../global/DefaultImage";

const ProfessorProfile = (props) => {
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]);
  // Links Popup
  const [links, setLinks] = useState(false);
  const [aboutPopup, setAboutPopup] = useState(false);
  // Experienc Popups
  const [addExperience, setAddExperience] = useState(false);
  const [editExperience, setEditExperience] = useState(false);
  // Professor Profile
  const [userProfile, setUserProfile] = useState({
    null: "null",
  });

  useEffect(() => {
    console.log("proppy", props[0]);
    setUserProfile(props[0]); //General Information
  }, [props]);

  return (
    <>
      <div className='student-heading'>
        {/* creates default image if none provided */}
        <img
          src={defaultImage(String(userProfile.first_name))}
          alt={String(userProfile.first_name)}
        />
        <div className='right'>
          {/* === Professor's Name === */}
          <div className='flex-box'>
            <h6 className='category-heading'>Full Name</h6>
          </div>
          <p>{userProfile.first_name + " " + userProfile.last_name}</p>
        </div>
      </div>
      {/* TODO:: Links */}
      <div className='student-links'>
        <div className='flex-box'>
          <h5 className='category-heading'>Links</h5>
          {/* Links Edit Popup */}
          <img
            id='edit-button'
            src={EditIcon}
            alt='edit pencil button'
            onClick={() => setLinks(true)}
          />
          <LinksPopup
            show={links}
            onHide={() => setLinks(false)}
            userID={cookie.ID_OF_USER}
          />
        </div>
        {/* TODO:: Add URL to Professor DB so Jose can integrate it */}
        <div className='flex-box' style={{ justifyContent: "center" }}>
          <a href='/'>
            <img src={GlobeIcon} alt='website url' className='mr-5' />
          </a>
          <a href='/'>
            <img src={LinkedinIcon} alt='linkedin' />
          </a>
        </div>
      </div>

      {/* Professor About Me */}
      <div className='student-about'>
        <div className='flex-box'>
          <h4 className='category-heading'>About Me</h4>
          {/* About Me Edit Popup */}
          <img
            id='edit-button'
            src={EditIcon}
            alt='edit pencil button'
            onClick={() => setAboutPopup(true)}
          />
          <AboutPopup
            show={aboutPopup}
            onHide={() => setAboutPopup(false)}
            userID={cookie.ID_OF_USER}
            heading='Edit About Me'
            about={userProfile.about_me}
          />
        </div>
        {/* About Me */}
        <p>
          {userProfile.about_me}
          This is where the Professor's About me should go
        </p>
      </div>

      <div className='student-about'>
        {/* experience */}

        <div className='flex-box'>
          <h4 className='category-heading'>Schools</h4>
          {/* Add Experience Popup */}
          <img
            id='edit-button'
            src={AddIcon}
            alt='edit pencil button'
            onClick={() => setAddExperience(true)}
          />
          <ExperiencePopup
            userID={cookie.ID_OF_USER}
            show={addExperience}
            popupName={"Add"}
            onHide={() => setAddExperience(false)}
          />
        </div>

        {/** TODO:: Add Experience for Professor to DB for Jose to Map Experience */}
      </div>
    </>
  );
};

export default ProfessorProfile;
