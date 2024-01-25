import React, { useState, useEffect, useContext } from 'react'
import {JoblyApi} from "./api"
import JobCard from "./JobCard"
import UserContext from "./UserContext"

const Jobs = () => {
    const username = useContext(UserContext)
    console.log(username)
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
        }
        
        catch (err){
            console.log(err)
        }
    }

if (username) {
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
        }

export default Jobs