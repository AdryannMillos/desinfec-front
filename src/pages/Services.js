import React from 'react';
import CreateServiceSheet from '../components/create-service-sheet';
import { GrDocumentConfig } from 'react-icons/gr';

import '../css/App.css';
import '../css/content.css';

const Scheduling = () => {
    return ( 

        <div className='flex-column c-inner-container'>
            <div className='flex-row c-title'>
                <GrDocumentConfig/>
                <span>Criação de Serviços</span>
            </div>
            <CreateServiceSheet />
        </div>
     );
}
 
export default Scheduling;