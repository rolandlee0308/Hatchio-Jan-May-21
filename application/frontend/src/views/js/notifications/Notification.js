import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import CompanyProfile from "../profiles/company/CompanyProfile";
import Collapsible from "react-collapsible";

import API_STUDENT_RATING_NOTIFICATIONS from "../../../models/GET/Students/rating_notifications";
import API_UPDATE_STUDENT_RATING_NOTIFICATION from "../../../models/PUT/Students/update_ratings_notification";
import API_USER_GET_PROFILE from "../../../models/user_profile";

const Notifications = () => {
  useEffect(() => {
    if (cookie.Type_User === "student") {
      API_STUDENT_RATING_NOTIFICATIONS(setRatingNotifications, setHiredNotifications, cookie.ID_OF_USER);
      //Pass in Student ID and pull corresponding data
    }
    if (cookie.Type_User === "employer") {
      API_USER_GET_PROFILE(cookie.Type_User, cookie.ID_OF_USER, setuserProfile);
    }
  }, []);
  const [cookie] = useCookies(["Type_User", "ID_OF_USER", "First_Name"]); //Current User
  const [ratingNotifications, setRatingNotifications] = useState([]);
  const [hiredNotifications, setHiredNotifications] = useState([]);
  //Employed Jobs
  const [userProfile, setuserProfile] = useState([
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
    [{ null: "null" }, { null: "null" }],
  ]);

  function converter(dataitem) {
    if (dataitem) {
      var t = dataitem.split(/[- : T]/);
      var d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4]));
      d = d.toString().split(" ");
      return d[1] + " " + d[2] + ", " + d[3];
    }
  }

  const seenNotification = async (reflection_id, table) => {
    console.log(`Reflection ID: ${reflection_id}`);
    const response = await API_UPDATE_STUDENT_RATING_NOTIFICATION(reflection_id, table);
    if (response.status == 400) {
      console.log("Failed to Update");
    }
    if (response.status == 200) {
      console.log("Sucess ");
      window.location.reload();
    }
  };

  var seen_notifications = [];
  const unseen_notifications =
    ratingNotifications.length == 0
      ? `Empty`
      : ratingNotifications.map((row) => {
          //Not Seen
          if (row.student_seen == 0 && row.student_hide == 0) {
            return (
              <>
                <tr>
                  <td>
                    <b>Professor </b>: {row.first_name}
                  </td>
                  <td>
                    <b>Time Rated</b> {row.publish_date}
                  </td>
                  <td>
                    <b>Rating Total</b> {row.rating_total}
                  </td>
                  <td>
                    <button onClick={() => seenNotification(row.reflection_id, "student_ratings")}>HIDE</button>
                  </td>
                </tr>
              </>
            );
            //Seen and Not Deleted by Student
          }
        });

  //Fetch Notification
  if (cookie.Type_User === "student") {
    return (
      <div>
        <h4>Student Notifications for Professor Ratings | Employer Interest</h4>
        <hr></hr>
        <div>
          <h4>Rating UnSeen Ratings Notifications</h4>
          {unseen_notifications}
        </div>
        <hr></hr>
        <div>
          <h4>Applications Outgoing Fullfilled Notification</h4>
          {/** Remove PASSWORD TODO */}
          {/** Check Logs for all information, password will be removed eventually */}
          {hiredNotifications.map((data) => {
            if (data.hidden === 0) {
              return (
                <>
                  <Collapsible
                    trigger={
                      <p>
                        <strong>Message From: </strong>
                        {data.organization_name} on {converter(data.time)}
                      </p>
                    }
                  >
                    <p>
                      Congratulations, this letter is to certify that I,{data.first_name} {data.last_name}, have
                      examined your application
                    </p>
                    <p>and believe you to be perfect for {data.position_title} position.</p>
                    <p>Please contact us at {data.email} to set up an interview.</p>
                  </Collapsible>
                  <button onClick={() => seenNotification(data.stualert_id, "student_alerts")}>HIDE</button>
                </>
              );
            }
          })}
        </div>
        <hr></hr>
      </div>
    );
  }
  if (cookie.Type_User === "employer") {
    return (
      <div>
        <h3>Alerts</h3>
        <div>
          <>
            <CompanyProfile {...userProfile} />
          </>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>Notifications are enabled for employers and students. Please sign in as an employer or student.</h1>
    </div>
  );
};
export default Notifications;
