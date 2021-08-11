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

const JobFilters = ({
  // functions
  addFilterHandler,
  addEmployementType,
  // Active filters
  activeFilters,
  setActiveFilters,
  // Employement Type
  employementType,
  setEmployementType,
  // Salary
  salary,
  setSalary,
}) => {
  return (
    <div className='filter'>
      {/* Heading */}
      <h4>Filters</h4>

      {/* Active Filters */}
      <div className='active-filter-box'>
        {employementType?.map((filter) => (
          <div id={filter.id} className='active-filter'>
            {filter}
            <button
              onClick={(e) => {
                // removes the filter from useState
                setEmployementType(
                  employementType.filter(
                    (filter) => !filter.localeCompare(e.target.value)
                  )
                );

                // resets check value to false
                e.target.checked = false;
                console.log(filter);
              }}>
              {" "}
              x{" "}
            </button>
          </div>
        ))}
        {/* all active filters except school year */}
        {activeFilters?.map((filter) => (
          <div id={filter.id} className='active-filter'>
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
              }}>
              {" "}
              x{" "}
            </button>
          </div>
        ))}
      </div>

      {/* Form */}
      <Form id='filter-students'>
        <Accordion defaultActiveKey=''>
          {/* Student Year Filter */}
          <Form.Group>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='0'>
                Type of Employement
              </Accordion.Toggle>
              <Accordion eventKey='0'>
                <Card.Body>
                  <Form.Check
                    type='checkbox'
                    label='Full Time'
                    value='Full Time'
                    onClick={addEmployementType}
                    className='checkbox'
                  />
                  <Form.Check
                    type='checkbox'
                    label='Part Time'
                    value='Part Time'
                    onClick={addEmployementType}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Internship'
                    value='Internship'
                    onClick={addEmployementType}
                  />
                  <Form.Check
                    type='checkbox'
                    label='Contract'
                    value='Contract'
                    onClick={addEmployementType}
                  />
                  <Form.Check
                    type='checkbox'
                    s
                    label='Remote'
                    value='Remote'
                    onClick={addEmployementType}
                  />
                </Card.Body>
              </Accordion>
            </Card>
          </Form.Group>

          {/* Salary Filter */}
          <Form.Group>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey='3'>
                Annual Salary
              </Accordion.Toggle>
              <Accordion eventKey='3'>
                <Card.Body>
                  <InputGroup className='mb-3'>
                    <Form.Control
                      placeholder='From'
                      aria-label='Salary-from'
                      aria-describedby='basic-addon1'
                      onChange={(e) =>
                        setSalary({
                          ...salary,
                          min: e.target.value,
                        })
                      }
                    />
                    <Form.Control
                      placeholder='To'
                      aria-label='Salary-to'
                      aria-describedby='basic-addon1'
                      onChange={(e) =>
                        setSalary({
                          ...salary,
                          max: e.target.value,
                        })
                      }
                    />
                    <InputGroup.Append>
                      <Button
                        variant='outline-secondary'
                        className='btn-fill'
                        name='salary'
                        onClick={addFilterHandler}>
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

export default JobFilters;
