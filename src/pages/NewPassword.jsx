import React from 'react';
import '@styles/newPassword.scss';
import logo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
    return (
        <div className='NewPassword'>
            <div className='NewPassword-container'>
                <img className='logo' src={ logo } alt='Logo'/>
                <h1 className='title'>Create a new password</h1>
                <p className='subtitle'>Enter a new password for your account</p>
                <form action='/' className='form'>
                    <label for='password' className='label'>New Password</label>
                    <input type='password' id='password' placeholder='*********' className='input input-password'/>
                    <label for='new-password' className='label'>Confirm New Password</label> 
                    <input type='password' id='new-password' placeholder='*********' className='input input-password'/>
                    <input type='submit' value='Confirm' className='primary-button login-button'/>
                </form>
            </div>
        </div>
    );
};

export { NewPassword };