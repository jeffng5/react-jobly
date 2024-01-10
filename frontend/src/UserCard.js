import React from "react";
import { Link } from "react-router-dom";
import './CompanyCard.css';

/** Show user edit page */

const UserCard = ({ username }) => (
      <Link className="CompanyCard card m-4" to={`/profile`}>
        <div className="card-body">
          <h6 className="card-title">
            {username}
            <div>Equity :</div>
          </h6>
          <p><small>Salary : </small></p>
        </div>
      </Link>
)

export default UserCard