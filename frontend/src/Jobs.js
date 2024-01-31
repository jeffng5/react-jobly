import React, { useState, useEffect, useContext } from 'react'
import { JoblyApi } from "./api"
import JobCard from "./JobCard"
import NavBar from "./NavBar"
import AlternateComponent from "./AlternateComponent"
import { jwtDecode } from "jwt-decode"

//Main job component protected route
const Jobs = () => {
    
    const localToken = localStorage.getItem('res.token')
    const decoded2= jwtDecode(localToken)
    console.log(decoded2.username)
    let username = decoded2.username

    const [data, setData] = useState([]);
    const [appliedData, setAppliedData] = useState([])

//function to get job data and other to get list of applied data. API calls to backend.
useEffect(()=> {
    getJobData();
    getAppliedJobData();
}, []);

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
        <NavBar />
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

export default Jobs