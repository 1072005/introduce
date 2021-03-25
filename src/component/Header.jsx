import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>SHIN_YI</h1>
                <Typed className="typed-text" 
                strings={["Web Design","Unity","Game","Volleyball"]}
                typeSpeed={40}//插件寫過去的速度
                backSpeed={60}//插件寫回來的速度
                loop
                />
            
            </div>
            
        </div>
    )
}

export default Header
