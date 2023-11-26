import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [experience_years, setExperience_years] = useState(0);
  const [nOfCandidates, setNOfCandidates] = useState(0);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [minDailySalary, setMinDailySalary] = useState(0);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch(
      `http://localhost:8080/getJobs/${page}/${itemsPerPage}/${minDailySalary}`
    );
    const jobs = await response.json();
    console.table(jobs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="experience_years">
        Years of experience
        <input
          type="number"
          onChange={(e) => setExperience_years(parseInt(e.target.value))}
        />
      </label>
      <label htmlFor="nOfCandidates">
        Number of candidates
        <input
          type="number"
          onChange={(e) => setNOfCandidates(parseInt(e.target.value))}
        />
      </label>
      <label htmlFor="page">
        Page
        <input
          type="number"
          onChange={(e) => setPage(parseInt(e.target.value))}
        />
      </label>
      <label htmlFor="itemsPerPage">
        Items Per Page
        <input
          type="number"
          onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
        />
      </label>
      <label htmlFor="minDailySalary">
        Min Daily Salary
        <input
          type="number"
          onChange={(e) => setMinDailySalary(parseInt(e.target.value))}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
export default Form;
