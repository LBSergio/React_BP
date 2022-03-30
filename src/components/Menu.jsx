import React from 'react';
import '@styles/menu.scss'

const Menu = () => {
    return (
        <div className='Menu'>
            <ul>
                <il>
                    <a href='/' className='title'>My orders</a>
                </il>
                <il>
                    <a href='/'>My account</a>
                </il>
                <il>
                    <a href='/'>Sign out</a>
                </il>
            </ul>
        </div>
    );
};

export { Menu };