import React from "react";
import { Link } from "react-router-dom";
import './CompanyCard.css';

/** Show company in list of jobs. */

const JobCard = ({ title, salary, equity, companyHandle, jobs }) => (
      <Link className="CompanyCard card m-4" to={`/jobs/${companyHandle}`}>
        <div className="card-body">
          <h6 className="card-title">
            <div><h4>{companyHandle}</h4></div>
            <h2>{title}</h2>
            {jobs}
            <div>Equity : {equity}</div>
          </h6>
          <p><small>Salary : {salary}</small></p>
        </div>
      </Link>
  )

export default JobCard;