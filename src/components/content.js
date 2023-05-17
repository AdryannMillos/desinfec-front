import React from 'react';

import '../css/App.css';
import '../css/content.css';

import Home from '../pages/home';
import Schedule from '../pages/schedule';
import Scheduling from '../pages/scheduling';

const Content = ({index}) => {

    const today = new Date();
    const tDay = today.getDate();
    const tMonth = today.getMonth()+1 > 9 ? (today.getMonth()+1) : '0' + (today.getMonth()+1);
    const tYear = today.getFullYear();

    return ( 
        <div className='c-container'>
            <div className={index === 1 ? ' c-content ' : ' display-none '}>
                <Home
                    tYear={tYear}
                    tMonth={tMonth}
                />
            </div>
            <div className={index === 2 ? ' c-content ' : ' display-none '}>
                <Schedule
                    tDay={tDay}
                    tMonth={tMonth}
                />
            </div>
            <div className={index === 3 ? ' c-content ' : ' display-none '}>
                <Scheduling/>
            </div>
            <div className={index === 4 ? ' c-content ' : ' display-none '}>
                <span>Não existe</span>
            </div>
        
        </div>
     );
}
 
export default Content;