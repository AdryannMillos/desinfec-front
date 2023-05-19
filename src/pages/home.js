// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { FiFile } from 'react-icons/fi';


import '../css/App.css';
import '../css/content.css';

import PieChart from '../components/pie-chart';
import axios from 'axios';

const Home = ({tYear, tMonth}) => {



    const [date, setDate] = useState(tYear + '-' + tMonth);
    const [services, setServices] = useState([])
    const authToken = localStorage.getItem("authToken");

    // eslint-disable-next-line
    const [semester, setSem] = useState(1);
    
    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_API_BASE_URL}/service/list`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
              Accept: 'application.json',

            },
          })
          .then((response) => {
            setServices(response.data);
            console.log(services);
          })
          .catch((error) => {
            // Handle error
        });
    },[]);


    const data = [
        {
            name: 'Desinsetização',
            value: 500
        },
        {
            name: 'Desratização',
            value: 100
        },
        {
            name: 'Descupinização',
            value: 50
        },
        {
            name: 'Controle de aracnídeos',
            value: 25
        },
        {
            name: 'Controle de carrapatos',
            value: 20
        },
        {
            name: 'Sanitização de ambientes',
            value: 5
        },
    ]

    


    return ( 
        <div className=' flex-column c-inner-container '>
            <div className='flex-row c-title'>
                <FiFile/>
                <span>Relatórios</span>
            </div>
            <div className='flex-row h-options'>
                <input 
                    className='h-options-content' 
                    type='month' 
                    min='2000-01' 
                    value={date} 
                    onChange={(e)=>{setDate(e.target.value)}}
                />
                <select
                    className='h-options-content'
                    onChange={(e)=>{setSem(e.target.value)}}
                >
                    <option value={1}>1º Semestre</option>
                    <option value={2}>2º Semestre</option>
                </select>
            </div>
            <div className='flex-row h-chart-container'>

                <div className='h-chartbox'>
                    <PieChart
                        data = {data}
                    />
                </div>

            </div>
        </div>
     );
}
 
export default Home;