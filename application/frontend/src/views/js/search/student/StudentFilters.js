// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// SFSU Areas of Study Data imported
import Data from "../../../content/data/AreasOfStudy.json";
// React Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const StudentFilters = ({
  // functions
  addFilterHandler,
  addSchoolYearHandler,
  // Active filters
  activeFilters,
  setActiveFilters,
  // School year
  schoolYear,
  setSchoolYear,
  // Strengths
  strength,
  setStrength,
  // GPA
  gpa,
  setGPA,
  // Rating
  rating,
  setRating,
}) => {
  return (
    <div className="filter">
      {/* Heading */}
      <h4>Filters</h4>

      {/* Active Filters */}
      <div className="active-filter-box">
        {schoolYear?.map((filter) => (
          <div id={filter.id} className="active-filter">
            {filter}
            <button
              onClick={(e) => {
                // removes the filter from useState
                setSchoolYear(
                  schoolYear.filter(
                    (filter) => !filter.localeCompare(e.target.value)
                  )
                );

                // resets check value to false
                e.target.checked = false;
                console.log(filter);
              }}
            >
              {" "}
              x{" "}
            </button>
          </div>
        ))}
        {/* all active filters except school year */}
        {activeFilters?.map((filter) => (
          <div id={filter.id} className="active-filter">
            <span>{filter}</span>
            <button
              onClick={(e) => {
                // removes the filter from useState
                setActiveFilters(
                  activeFilters.filter(
                    (filter) => !filter.localeCompare(e.target.value)
                  )
                );
                // resets check value to false
                e.target.checked = false;
                console.log(filter);
              }}
            >
              {" "}
              x{" "}
            </button>
          </div>
        ))}
      </div>

      {/* Form */}
      <Form id="filter-students">
        <Accordion defaultActiveKey="">
          {/* Student Year Filter */}
          <Form.Group>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Student Year
              </Accordion.Toggle>
              <Accordion eventKey="0">
                <Card.Body>
                  <Form.Check
                    type="checkbox"
                    label="Freshman"
                    value="Freshman"
                    onClick={addSchoolYearHandler}
                    className="checkbox"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Sophomore"
                    value="Sophomore"
                    onClick={addSchoolYearHandler}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Junior"
                    value="Junior"
                    onClick={addSchoolYearHandler}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Senior"
                    value="Senior"
                    onClick={addSchoolYearHandler}
                  />
                  <Form.Check
                    type="checkbox"
                    s
                    label="Masters"
                    value="Masters"
                    onClick={addSchoolYearHandler}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Doctorate"
                    value="Doctorate"
                    onClick={addSchoolYearHandler}
                  />
                  <Form.Check
                    type="checkbox"
                    label="Alumni"
                    value="Alumni"
                    onClick={addSchoolYearHandler}
                  />
                </Card.Body>
              </Accordion>
            </Card>
          </Form.Group>

          {/* Academics Filter */}
          <Form.Group>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Area of Study
              </Accordion.Toggle>
              <Accordion eventKey="1">
                <Card.Body>
                  <Form.Group>
                    <Form.Control
                      as="select"
                      name="degree"
                      onChange={addFilterHandler}
                    >
                      {/* default is a blank option */}
                      <option></option>
                      {/* All SFSU Areas of Study grabbed from JSON file*/}
                      {Data.map((program) => (
                        <option value={program.field}>{program.field}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Card.Body>
              </Accordion>
            </Card>
          </Form.Group>

          {/* Stengths / Skills Filter */}
          {/* <Form.Group>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='2'>
                Stengths / Skills
              </Accordion.Toggle>
              <Accordion eventKey='2'>
                <Card.Body>
                  <InputGroup>
                    <Form.Control
                      placeholder='Add Strengths / Skills'
                      aria-label="Recipient's username"
                      aria-describedby='basic-addon2'
                      onChange={(e) => setStrength(e.target.value)}
                    />
                    <InputGroup.Append>
                      <Button
                        variant='outline-secondary'
                        className='btn-fill'
                        onClick={(e) =>
                          setActiveFilters([...activeFilters, strength])
                        }>
                        +
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Card.Body>
              </Accordion>
            </Card>
          </Form.Group> */}

          {/* GPA Filter */}
          <Form.Group>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                GPA
              </Accordion.Toggle>
              <Accordion eventKey="3">
                <Card.Body>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="From"
                      aria-label="GPA-from"
                      aria-describedby="basic-addon1"
                      onChange={(e) =>
                        setGPA({
                          ...gpa,
                          min: e.target.value,
                        })
                      }
                    />
                    <Form.Control
                      placeholder="To"
                      aria-label="GPA-to"
                      aria-describedby="basic-addon1"
                      onChange={(e) =>
                        setGPA({
                          ...gpa,
                          max: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-secondary"
                        className="btn-fill"
                        name="gpa"
                        onClick={addFilterHandler}
                      >
                        +
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Card.Body>
              </Accordion>
            </Card>
          </Form.Group>

          {/* Review Score Filter */}
          <Form.Group>
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="4"
                className="accordion-header"
              >
                Professor Rating
              </Accordion.Toggle>
              <Accordion eventKey="4">
                <Card.Body>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="From"
                      aria-label="Review-from"
                      aria-describedby="basic-addon1"
                      onChange={(e) =>
                        setRating({
                          ...rating,
                          min: e.target.value,
                        })
                      }
                    />
                    <Form.Control
                      placeholder="To"
                      aria-label="Review-to"
                      aria-describedby="basic-addon1"
                      onChange={(e) =>
                        setRating({
                          ...rating,
                          max: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-secondary"
                        className="btn-fill"
                        name="rating"
                        onClick={addFilterHandler}
                      >
                        +
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Card.Body>
              </Accordion>
            </Card>
          </Form.Group>
        </Accordion>
      </Form>
    </div>
  );
};

export default StudentFilters;
