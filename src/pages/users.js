import React from 'react';
import UserSheet from '../components/user-sheet';
import { GrDocumentConfig } from 'react-icons/gr';

import '../css/App.css';
import '../css/content.css';

const Scheduling = () => {
    return ( 

        <div className='flex-column c-inner-container'>
            <div className='flex-row c-title'>
                <GrDocumentConfig/>
                <span>Usuários</span>
            </div>
            <UserSheet />
        </div>
     );
}
 
export default Scheduling;