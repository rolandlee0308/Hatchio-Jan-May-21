import { useState } from "react";
// React Boostrap
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import { port_host } from "../../../config.js";
const VPHome = () => {
  const [keyword, setKeyword] = useState(""); //Keyword
  const [dbResultProfiles, setdbResultProfiles] = useState([]); //DataBase Profiles
  const [dbResultJobs, setdbResultJobs] = useState([]); //DataBase Jobs
  const [binaryImages, setBinaryImages] = useState(["", "", "", "", "", ""]); //DB Binary Images -> Blob Readable
  //Fetch Profiles
  const DB_Search_Profile = () => {
    fetch(`${port_host}/search/profiles?keyword=${keyword}`)
      .then((response) => response.json())
      .then((json) => {
        setdbResultProfiles(json);
        setBinaryImages(
          json.map((e) => {
            return e.profile_image;
          })
        );
        console.log(json);
      });
  };
  //Fetch Profiles
  const DB_Search_Jobs = () => {
    fetch(`${port_host}/search/joblistings?keyword=${keyword}&miles=null`)
      .then((response) => response.json())
      .then((json) => {
        setdbResultJobs(json);
        console.log(json);
      });
  };
  //Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setdbResultProfiles([]);
    setdbResultJobs([]);
    DB_Search_Profile();
    DB_Search_Jobs();
    setBinaryImages([]);
  };
  return (
    <div>
      <h5>ALERT: if you want to see what's in the database, leave Find Field: Empty</h5>
      <h5>ALERT: Search exclusively Profiles or Jobs under Search Dropdown</h5>
      {/* test home page containing class, section, team identification */}
      <h3 style={{ textAlign: "center" }}>SW Engineering CSC648/848 Spring 2021</h3>
      <h4 style={{ textAlign: "center", marginBottom: "50px" }}>Section 02 | Team 03</h4>

      {/* one free text entry field */}
      <Form id="search-jobs" onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Find</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="employers, professors,or apple"
            aria-label="text"
            aria-describedby="basic-addon1"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </InputGroup>
        <Button variant="dark" type="submit">
          Search
        </Button>
      </Form>
      <h3>Results</h3>
      {JSON.stringify(dbResultJobs)}
      {JSON.stringify(dbResultProfiles)}
      <img src={binaryImages[0]} />
      <img src={binaryImages[1]} />
      <img src={binaryImages[2]} />
      <img src={binaryImages[3]} />
      <img src={binaryImages[4]} />
      <img src={binaryImages[5]} />
    </div>
  );
};

export default VPHome;
