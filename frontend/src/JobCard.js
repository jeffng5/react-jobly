import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './CompanyCard.css';
import { JoblyApi } from "./api"
import { jwtDecode } from "jwt-decode"


/** Show company in list of jobs. */

const JobCard = ({ id, title, salary, equity, companyHandle, jobs }) => {

  const [button, setButton] = useState(true)
  //protecting route only users can use
    const token = localStorage.getItem('res.token')
    const decoded = jwtDecode(token)
    let username = decoded.username
  
    async function ApiCalltoBackend(){
      setButton(false)
      try{  
        const res = await JoblyApi.applyToJob(username, id)
          console.log(res)
        } catch (err){
          console.log(err)
        }
    }
    
  

if (button ===false) 
<Link className="CompanyCard card m-4" to={`/jobs/${companyHandle}`}>
<div className="card-body">
<h6 className="card-title">
  <div><h4>{companyHandle}</h4></div>
  <h4>{id}</h4>
  <h2>{title}</h2>
  {jobs}
  <div>Equity : {equity}</div>
</h6>
<p><small>Salary : {salary}</small></p>
</div>
</Link>

else {
return (
<>  
<Link className="CompanyCard card m-4" to={`/jobs/${companyHandle}`}>
  <div className="card-body">
    <h6 className="card-title">
      <div><h4>{companyHandle}</h4></div>
      <h4>{id}</h4>
      <h2>{title}</h2>
      {jobs}
      <div>Equity : {equity}</div>
    </h6>
    <p><small>Salary : {salary}</small></p>
  </div>
</Link>
<button onClick={ApiCalltoBackend}>Apply</button>
</>
)
      }}
export default JobCard;