import React from 'react';
import { MdOutlineCalendarMonth } from 'react-icons/md';

import '../css/App.css';
import '../css/content.css';

import Calendar from '../components/calendar';

const Schedule = ({tDay, tMonth}) => {
    return ( 
        <div className='flex-column c-inner-container'>
            <div className='flex-row c-title'>
                <MdOutlineCalendarMonth/>
                <span>Agenda</span>
            </div>
            <Calendar
                tDay={tDay}
                tMonth={tMonth}
            />
        </div>
     );
}
 
export default Schedule;