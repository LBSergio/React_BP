import React from 'react';
import { Header } from '@components/Header';

const Capsula = ({children}) => {
    return(
        <div className='Capsula'>
            <Header/>
            {children}
        </div>
    );
};

export { Capsula };