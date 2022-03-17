import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='designe'>
            <div  className='flex'>
                <div>
                    <h1>Country site</h1>
                </div>
                <div className='ul'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contuct</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;