import React, { useState, useEffect, useContext } from 'react'
import { JoblyApi } from "./api"
import JobCard from "./JobCard"
import UserContext from "./UserContext"
import AlternateComponent from "./AlternateComponent"
import { jwtDecode } from "jwt-decode"

const Jobs = () => {
    // const username = useContext(UserContext)
    
    const localToken = localStorage.getItem('res.token')
    const decoded2= jwtDecode(localToken)
    console.log(decoded2.username)
    let username = decoded2.username

    const [data, setData] = useState([]);
    const [appliedData, setAppliedData] = useState([])


useEffect(()=> {
    getJobData();
    getAppliedJobData();
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


    return (
        <>
        <h1> This is the jobs page</h1>
        
        {[...appliedData].map(c => (
            <AlternateComponent
            id= {c.id}
            title = {c.title}
            />
        ))} 


        {[...data].map(c => (
            
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

export default Jobs