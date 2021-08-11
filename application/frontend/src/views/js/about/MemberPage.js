/*
 * File: MemberPage.js
 * Functionality: Produces User's Page
 * Author: Jose (Component & Structure)
 */

import "../../css/About.css";

const MemberPage = ({ location }) => {
  return (
    <div className='member-box'>
      <img src={location.state.img} className='member-img' alt='' />
      <h1 className='member-name'>{location.state.fullname}</h1>
      <h2 className='member-role'>{location.state.role}</h2>
      <p className='member-desc'>{location.state.desc}</p>
    </div>
  );
};

export default MemberPage;
