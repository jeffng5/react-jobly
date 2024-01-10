import React from "react";
import { Link } from "react-router-dom";
import './CompanyCard.css';

/** Show company in list of jobs. */

const JobCard = ({ title, salary, equity, companyHandle }) => (
      <Link className="CompanyCard card m-4" to={`/jobs/${companyHandle}`}>
        <div className="card-body">
          <h6 className="card-title">
            {title}
            <div>Equity : {equity}</div>
          </h6>
          <p><small>Salary : {salary}</small></p>
        </div>
      </Link>
  )

export default JobCard;