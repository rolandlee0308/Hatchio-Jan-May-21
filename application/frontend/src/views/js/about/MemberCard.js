/*
 * File: MemberCard.js
 * Functionality: Produces User's Card
 * Author: Jose (Component & Structure)
 */

import "../../css/About.css";

const MemberCard = ({ member }) => {
  return (
    <div className='member-card'>
      <div className='member-box'>
        <img src={member.img} className='member-img' alt='' />
        <h2 className='member-name'>{member.fullname}</h2>
        <h3 className='member-role'>{member.role}</h3>
      </div>
    </div>
  );
};

export default MemberCard;
