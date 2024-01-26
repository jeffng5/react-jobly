import React, { useState, useEffect, useContext } from 'react'
import {JoblyApi} from "./api"
import JobCard from "./JobCard"
import UserContext from "./UserContext"
import AlternateComponent from "./AlternateComponent"

const Jobs = () => {
    const username = useContext(UserContext)
    console.log(username)
    const INITIAL_STATE= []
    const [data, setData] = useState(INITIAL_STATE);
    const [appliedData, setAppliedData] = useState(INITIAL_STATE)

    useEffect(()=> {
        getJobData();
       getAppliedJobData()
    }, [setAppliedData]);

    async function getAppliedJobData() {
        try{
        const res = await JoblyApi.appliedJobs(username)
        console.log(res.listOfApplied)
        setAppliedData(res.listOfApplied)
        }
        
        catch (err){
            console.log(err)
        }
    }

console.log(appliedData)
    async function getJobData(){
        try {
            const res = await JoblyApi.getJobs()
            console.log(res)
            setData(res)
        }
        catch (err){console.log(err)}
    }

if (username) {
    return (
        <>
        <h1> This is the jobs page</h1>
        
        {appliedData.map(c => (
            <AlternateComponent
            id= {c.id}
            title = {c.title}
            />
        ))}



        {data.map(c => (
            
            <JobCard
            id = {c.id}
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