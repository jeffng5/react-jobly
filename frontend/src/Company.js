import React, { useState, useEffect } from 'react'
import {JoblyApi} from "./api"
import { useParams } from 'react-router-dom';
import JobCard from "./JobCard"

function Company() {
    const initialState=[]
    const {handle} = useParams()
    const [company, setCompany] = useState(initialState);
    useEffect(function getCompanyAndJobsForUser() {
        async function getCompany() {
          setCompany(await JoblyApi.getCompany(handle));
        }
    
        getCompany();
      }, [handle]);
    
    //   if (!company) return <LoadingSpinner />;
    
      return (
          <div className="CompanyDetail col-md-8 offset-md-2">
            <h4>{company.name}</h4>
            <p>{company.description}</p>
            <JobCard jobs={company.jobs} />
          </div>
      );
    }


export default Company