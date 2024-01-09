import React, { useState, useEffect } from 'react'
import {JoblyApi} from "./api"

const Jobs = () => {
    const [data, setData] = useState();
    useEffect(()=> {
       getJobData()
    }, []);

    async function getJobData(title) {
        const res = await JoblyApi.getJobs(title)
        setData(res.jobs)


    if (data===undefined) return "Loading..."
    return (
        <>
        <h1> This is the jobs page</h1>
        <Jobs jobs={data} />
        </>

    )

}}

export default Jobs