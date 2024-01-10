import React, { useState, useEffect } from 'react'
import {JoblyApi} from "./api"
import CompanyCard from './CompanyCard'

const Search = ({submitFormSearch}) => {
    const initialState =[]
    const [formData, setFormData] = useState(initialState)

    useEffect(() => {
        getSearch()

    }, []);

    async function getSearch() {
        try{
            const res = await JoblyApi.getSearch()
            console.log(res)
            setFormData(res)
        } catch (err) {
            console.log(err)
        }

}

return (
    <div>
    <h1>THIS IS A TEST</h1>
    {formData.map(c => (
        <CompanyCard
        key= {c.handle}
        description = {c.description}
        name = {c.name} />

    ))}
    </div>
)

}

export default Search