import React, { useState, useEffect } from 'react'
import {JoblyApi} from "./api"
import { useParams } from 'react-router-dom';
import JobCard from "./JobCard"

function Company() {
    const initialState=[]
    const {handle} = useParams()
    // const {companyHandle} = useParams()
    const [company, setCompany] = useState(initialState);
    const [job, setJob] = useState(initialState)
    useEffect(() => {
        async function getCompany() {
          setCompany(await JoblyApi.getCompany(handle));
        }
    
        getCompany();
      
      
      async function getJobByCompany(){
        setJob(await JoblyApi.getJobsByCompany(handle));
        
      }
      getJobByCompany()
    }
       ,[handle] 
    );
      
    //   if (!company) return <LoadingSpinner />;
    
      return (
          <div className="CompanyDetail col-md-8 offset-md-2">
            <h4>{company.name}</h4>
            <p>{company.description}</p>
   
            {job.map(c=> (
            <JobCard 
            jobs = {c.jobs}
            title = {c.title}
            equity={c.equity}
            salary={c.salary}
            />))}

          </div>
      );
    }


export default Company