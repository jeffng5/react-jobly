import React, { useState, useEffect } from 'react'
import {JoblyApi} from "./api"
import { useParams } from 'react-router-dom';
import CompanyCard from "./CompanyCard"

function CompanySearch() {
    const initialState=[]
    const { name } = useParams()
    const [search, setSearch] = useState(initialState)
    useEffect(() => {
      async function getSearch(name){
        let companies = await JoblyApi.getSearch(name);
        setSearch(companies)
      }
      getSearch();  
    }
       ,[name] 

    );
      
    console.log(search)
    
      return (
        <>
        <h1>Search Company Results</h1>
        <div className="CompanyDetail col-md-8 offset-md-2">
     
        {search.map(c => (
            <CompanyCard 
            key = {c.handle}
            handle = {c.handle}
            description ={c.description}
            name= {c.name}
            logoUrl = {c.logoUrl}
/>))}
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