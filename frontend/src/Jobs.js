import React, { useState, useEffect } from 'react'
import {JoblyApi} from "./api"
import JobCard from "./JobCard"

const Jobs = () => {
    const INITIAL_STATE= []
    const [data, setData] = useState(INITIAL_STATE);
    useEffect(()=> {
       getJobData()
    }, []);

    async function getJobData() {
        try{
        const res = await JoblyApi.getJobs()
        console.log(res)
        setData(res)
        console.log(data)}
        
        catch (err){
            console.log(err)
        }
    }

    
    return (
        <>
        <h1> This is the jobs page</h1>
       
        {data.map(c => (
            <JobCard
            title = {c.title}
            salary = {c.salary}
            equity = {c.equity}
            companyHandle= {c.companyHandle}
            
            />
        ))}

        </>

    )

        }

export default Jobs