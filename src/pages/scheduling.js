import React from 'react';
import ServiceSheet from '../components/service-sheet';
import { GrDocumentConfig } from 'react-icons/gr';

import '../css/App.css';
import '../css/content.css';

const Scheduling = () => {
    return ( 
        <div className='flex-column c-inner-container'>
            <div className='flex-row c-title'>
                <GrDocumentConfig/>
                <span>Agendamento de serviço</span>
            </div>
            <ServiceSheet />
        </div>
     );
}
 
export default Scheduling;