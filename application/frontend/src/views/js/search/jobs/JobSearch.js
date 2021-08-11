import { useState, useEffect } from "react";
// CSS
import "../../../css/Theme.css";
import "../../../css/Search.css";
// Componenets
import JobFilters from "./JobFilters";
import JobSearchBar from "../SearchBar";
// React Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import JobCard from "./JobCard";

//API
import API_JOB_LISTINGS_FETCH from "../../../../models/GET/Jobs/job_cards";
import API_JOB_LISTINGS_FETCH_FILTER from "../../../../models/GET/Jobs/job_filters";

const JobSearch = () => {
  const [dbJobListings, setdbJobListings] = useState([]); //Search Results
  const [results, setResults] = useState([]); // holds filtered students (avoids having to fetch from DB again)
  const [activeFilters, setActiveFilters] = useState([]); // Active filters
  const [employementType, setEmployementType] = useState([]);
  const [salary, setSalary] = useState({ min: 0, max: 999999 });
  const [keyword, setKeyword] = useState(""); // Search Bar Keyword storing

  // fetch jobs from DB && initialize the results
  useEffect(() => {
    API_JOB_LISTINGS_FETCH(setdbJobListings);
    API_JOB_LISTINGS_FETCH(setResults);
  }, []);

  //filter dbJobs based on the keyword entered
  const keywordFilterHandler = (e) => {
    e.preventDefault(); // prevent refresh
    setResults(dbJobListings); // resets results to have the entire students DB

    // filters results based on the input (ONLY if input is not blank)
    if (keyword !== "") {
      setResults(
        results.filter((jobs) => {
          return (
            jobs.organization_name
              .toLowerCase()
              .indexOf(keyword.toLowerCase()) !== -1 ||
            jobs.position_title.toLowerCase().indexOf(keyword.toLowerCase()) !==
              -1 ||
            jobs.job_type.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
          );
        })
      );
    }
  };

  // Updates employement type  list
  const addEmployementType = (e) => {
    // School Year FILTER
    if (e.target.checked) {
      setEmployementType((activeFilters) => [
        ...employementType,
        e.target.value,
      ]);
      // Updates results (adds school year)
      setResults(
        results.filter((jobs) => {
          return (
            jobs.job_type
              .toLowerCase()
              .indexOf(e.target.value.toLowerCase()) !== -1
          );
        })
      );
    } else {
      setEmployementType(
        employementType.filter((filter) => filter !== e.target.value)
      );
      // Updates results (removes school year)
      setResults(dbJobListings);
    }
  };

  // Updates active filters
  const addFilterHandler = (e) => {
    // Strengths FILTER

    // Employement Type FILTER
    if (e.target.name === "employement") {
      // Adds to active filters
      setActiveFilters((activeFilters) => [...activeFilters, e.target.value]);
      // Updates results
      setResults(
        results.filter((jobs) => {
          return (
            jobs.position_title
              .toLowerCase()
              .indexOf(e.target.value.toLowerCase()) !== -1
          );
        })
      );
    }

    // GPA FILTER
    if (e.target.name === "salary") {
      // checks input bounds
      if (parseInt(salary.max) > 999999) setSalary({ ...salary, max: 999999 });
      if (parseInt(salary.min) < 0) setSalary({ ...salary, min: 0 });

      // Adds to active filters
      setActiveFilters((activeFilters) => [
        ...activeFilters,
        "Salary: " + salary.min + " - " + salary.max,
      ]);
      // Updates results
      setResults(
        results.filter((jobs) => {
          return jobs.salary <= salary.max && jobs.salary >= salary.min;
        })
      );
    }
  };

  return (
    <>
      <div className="grid-container">
        <JobSearchBar
          // placeholder
          placeholder="Job Title, Company, or Keywords"
          keywordFilterHandler={keywordFilterHandler}
          setKeyword={setKeyword}
        />
        <JobFilters
          // functions
          addFilterHandler={addFilterHandler}
          addEmployementType={addEmployementType}
          // Active filters
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          // Employement Type
          employementType={employementType}
          setEmployementType={setEmployementType}
          // Salary
          salary={salary}
          setSalary={setSalary}
        />
        <div className="results">
          {/** IF Database Not Connected */}
          {results.length === 0
            ? "No Results"
            : results.map((job) => (
                <JobCard
                  // image={job.profile_image == null ? `""` : job.profile_image}
                  Listing_ID={job.listing_id}
                  Employer_ID={job.employer_id}
                  PositionTitle={job.position_title}
                  CompanyName={job.organization_name}
                  Salary={job.salary}
                  Income={job.salary}
                  JobType={job.job_type}
                  AboutUs={job.about_us}
                  Location={job.location}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default JobSearch;
