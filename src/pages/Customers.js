import React from 'react';
import CustomerSheet from '../components/customer-sheet';
import { GrDocumentConfig } from 'react-icons/gr';

import '../css/App.css';
import '../css/content.css';

const Scheduling = () => {
    return ( 

        <div className='flex-column c-inner-container'>
            <div className='flex-row c-title'>
                <GrDocumentConfig/>
                <span>Cadastro de Clientes</span>
            </div>
            <CustomerSheet />
        </div>
     );
}
 
export default Scheduling;