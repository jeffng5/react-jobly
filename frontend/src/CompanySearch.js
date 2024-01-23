import React, { useState, useEffect } from 'react'
import {JoblyApi} from "./api"
import { useParams } from 'react-router-dom';
import JobCard from "./JobCard"

function CompanySearch() {
    const initialState=[]
    const { name } = useParams()
    // const {companyHandle} = useParams()
    // const [company, setCompany] = useState(initialState);
    const [job, setJob] = useState(initialState)
    const [search, setSearch] = useState(initialState)
    useEffect(() => {
      async function getSearch(name){
        let companies = await JoblyApi.getSearch(name);
        setSearch(companies)
      }
      getSearch()  

    //   async function getJobByCompany(){
    //     setJob(await JoblyApi.getJobsByCompany(handle));
        
    //   }
    //   getJobByCompany()
      
         
     
    }
       ,[name] 

    );
      
    console.log(search)
    
      return (
        <>
        <h1>Testing</h1>
        <div className="CompanyDetail col-md-8 offset-md-2">
        <h4>{search.name}</h4>
        <p>{search.description}</p>

        {/* {job.map(c=> (
        <JobCard 
        jobs = {c.jobs}
        title = {c.title}
        equity={c.equity}
        salary={c.salary}
        />))} */}

      </div>


    </>
    )

    }


export default CompanySearch