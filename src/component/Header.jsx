import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>SHIN_YI</h1>
                <Typed className="typed-text" 
                strings={["Web Design","Unity","Game","Volleyball"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            <a href="#" className="btn-main-offer">contract me</a>
            </div>
            
        </div>
    )
}

export default Header
