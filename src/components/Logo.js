import React from 'react';
import logo1 from '../image/logo1.png';
import logo2 from '../image/logo2.png';
import '../styles/logo.scss';

const Logo = () => {
    return (
        <div className="box-logo">
            <img className="logo" src={logo1} alt=""/>
            <img className="logo-fon" src={logo2} alt=""/>
        </div>
    );
}

export default Logo;
