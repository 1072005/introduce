import React from 'react';
import Img from "./assert/myself.jpg"
import Img1 from "./assert/my.jpg"
const AboutMe = () => {
    return (
        <div id="about" className="container bgcolor py-5 ">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5 ">
                        <img className="profile-img " src={Img} alt="Img" />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">關於我</h1>
                    <p>目前就讀元智大學資訊傳播學系大三學生，大學時主要學習程式
                    語言與影片製作相關，
                    對程式語言較為有興趣，學習過C++、C#、HTML、Jquery、Javascript、unity、css、
                    bootstrape、react些許的mongodb、nodejs
                    </p>
                    <img className="myimg" src={Img1} alt="img..."></img>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
