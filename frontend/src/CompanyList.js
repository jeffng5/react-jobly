import React, { useState, useEffect } from "react"
import {JoblyApi} from "./api"
import CompanyCard from "./CompanyCard"



const CompanyList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllCompanies();

    }, []);

    async function getAllCompanies(name) {
        const res = await JoblyApi.getAllCompanies(name)
        console.log(res)
        setData(res.companies)}

    return (
        <div>
        {data.map(c => (
            <CompanyCard 
            key = {c.handle}
            description ={c.description}
            name= {c.name}
            logoUrl = {c.logoUrl}
        />))}
        </div>

    )

}


export default CompanyList