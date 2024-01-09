import React, { useState, useEffect } from 'react'
import {JoblyApi} from "./api"
import { useParams } from 'react-router-dom';

const Company = () => {
    const params = useParams()
    const [data, setData] = useState([]);
    useEffect(()=> {
        getCompanyData()
        }, [params.handle]);

        async function getCompanyData() {
            const res = await JoblyApi.getCompany(params.handle)
            console.log(res)
            setData(res.company)
    }



    if(data){
return(
        <>
        <div>
            <h1> HI MY NAME IS</h1>
           <h1>{data ? data : 'Loading...'}</h1>
           <h2>{data}</h2>
    
    </div>
</>
    

)
}
}

export default Company