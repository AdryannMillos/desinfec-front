import React, { useState } from 'react';

import '../css/App.css';
import '../css/content.css';

const Calendar = ({tDay, tMonth}) => {


    return ( 
        <div className='flex-row ca-container'>
            <div className='flex-column ca-hours'>
                {new Array(13).fill(['', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']).map((time, key)=>{
                    return <span className='ca-hours-content'>{time[key]}</span>
                })}
            </div>
            <div className='flex-column ca-content'>
                <div className='flex-row ca-header'>
                    {new Array(5).fill([tDay, tDay+1, tDay+2, tDay+3, tDay+4]).map((data, key)=>{
                        return <span className={5 !== key+1 ? 'ca-header-border ca-header-content' : ''}>{data[key]}</span>
                    })}
                </div>
                <div className='ca-content'>
                    teste 3
                </div>
            </div>

        </div>
     );
}
 
export default Calendar