import React, { useState, useEffect, useContext } from 'react'
import {JoblyApi} from "./api"
import CompanyCard from './CompanyCard'
import SearchContext from "./SearchContext"


const Search = () => {
    const term = useContext(SearchContext)
    console.log(term)
    const initialState =[]
    const [formData, setFormData] = useState(initialState)

    useEffect(() => {
        getSearch()

    }, [{term}]);

    async function getSearch() {
        try{
            const res = await JoblyApi.getSearch({term})
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