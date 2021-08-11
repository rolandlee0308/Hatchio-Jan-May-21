// CSS
import "../../css/Theme.css";
import "../../css/Home.css";
// React Boostrap
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
// Iconfiy
import { Icon } from "@iconify/react";
import baselineSearch from "@iconify-icons/ic/baseline-search";
import sharpLocationOn from "@iconify-icons/ic/sharp-location-on";

const SeachJobs = () => {
  // seach jobs
  const search = () => {};

  return (
    <div className="box">
      <h1>
        SFSU Software Engineering Project CSC 648-848, Spring 2021. For
        Demonstration Only
      </h1>
      {/*
      <div className="search">
        <Form>
          <Form.Row>
            <Col>
              <Form.Label className="title">What</Form.Label>
              <Form.Text className="text-muted">
                Job title, company or keywords
              </Form.Text>
              <InputGroup>
                <Form.Control placeholder="" className="input" />
                <InputGroup.Append className="icon-box">
                  <Icon
                    icon={baselineSearch}
                    color="#2B2B2B"
                    width="20"
                    height="20"
                    className="icon-svg"
                  />
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col>
              <Form.Label className="title">Where</Form.Label>
              <Form.Text className="text-muted">
                City, province or region
              </Form.Text>
              <InputGroup>
                <Form.Control placeholder="" className="input" />
                <InputGroup.Append className="icon-box">
                  <Icon
                    icon={sharpLocationOn}
                    color="#2B2B2B"
                    width="20"
                    height="20"
                    className="icon-svg"
                  />
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Form.Row>
        </Form>
      </div>
      <Button variant="dark" size="xxl" className="home-btn" onClick={search()}>
        Search Jobs
      </Button>
     */}
    </div>
  );
};

export default SeachJobs;
