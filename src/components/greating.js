import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';

import '../css/App.css';
import '../css/greating.css';

const Greating = ({ logged }) => {

    const [seen, toggleSeen] = useState(false)

    return (
        <div className={logged ? "":"display-none"}>
            <div className={!seen ? ' flex-column g-container ' : 'display-none'}>
                <span className='g-title'>Bem-vindo ao Master</span>
                <span className='g-txt'>Aqui você pode ficar por dentro de tudo na empresa!</span>
                <GrFormClose className='g-close' onClick={() => { toggleSeen(true) }} />
            </div>
        </div>
    );
}

export default Greating;