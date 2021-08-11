// CSS
import "../../css/Theme.css";
import "../../css/Home.css";
// React Boostrap
import Button from "react-bootstrap/Button";
//Pop Up Form
import Popup from "reactjs-popup";
import { useCookies } from "react-cookie";

const PostJobs = () => {
  const [cookie] = useCookies(["Type_User"]);

  function postJobs(e){
    e.preventDefault();
    window.location.href='/insert-jobs';
  }

  if(cookie.Type_User === 'employer')
  return (
    <div className="box">
      <h1>
        Post Jobs <br /> Your next hire is here
      </h1>
      <p>
        People come to Hatchio every day to discover opportunities and build
        their careers. We put your job in front of the most qualified members —
        and those open to new opportunities.
      </p>
      <Button variant="flat" size="xl" className="home-btn" onClick={postJobs}>
      Post Jobs
      </Button>
    </div>
  );

  return (
    <div className="box">
      <h1>
        Post Jobs <br /> Your next hire is here
      </h1>
      <p>
        People come to Hatchio every day to discover opportunities and build
        their careers. We put your job in front of the most qualified members —
        and those open to new opportunities.
      </p>
      <Popup
      trigger={
        <Button variant="flat" size="xl" className="home-btn">
        Post Jobs
        </Button>
      }
      >
      <p>Sign In/Up as a Employer!</p>
      </Popup>
    </div>
  );
};
export default PostJobs;
