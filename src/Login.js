import React from 'react'
import './Login.css';
import hogwarts from './hogwarts.jpg';
import LoginContainer from './LoginContainer'
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className='login'>
            
            <img src={hogwarts} className='bg-img'/>

            <LoginContainer/>
        </div>

    )
}

export default Login
