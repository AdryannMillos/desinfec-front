import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ServicesD = ({year, month, day}) => {

    const [service, setServices] = useState('');

    const authToken = localStorage.getItem("authToken");

    function filterMonth(){
        axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/customer-historic/list`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          // setServices(response.data);
          const result = response.data.filter((data)=>{
            console.log(year + '-' + month+'-'+day)
            return ((data.date) === (year + '-' + month+'-'+day))&&data
          })
          setServices(result);
        })
        .catch((error) => {
          // Handle error
      });
    }

    useEffect(()=>{
        filterMonth(month)
    },[])

    console.log(service)

    return ( 
        <div>
            {service.map((data, key)=>{
                return <div key={'s-dot'+key} className='s-dot'> teste </div>
            })}
        </div>
     );
}
 
export default ServicesD;