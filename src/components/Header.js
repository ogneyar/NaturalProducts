import React from 'react';
import '../styles/header.scss';

const Header = () => {
    return (
        <header>
            <h1>приРОДные ПРОДУКТЫ</h1> 
            <div className="banner">
                <a href="images/banner.jpg">
                    <img src="images/banner.jpg" alt="banner" />
                </a>
            </div>
        </header>
    );
}
    

export default Header;
