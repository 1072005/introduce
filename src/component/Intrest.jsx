import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import { faUnity } from "@fortawesome/free-brands-svg-icons";

const Intrest = () => {
    return (
        <div className="intrest">
            <h1 className="py-5">Interest</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon icon={faFileCode}size="2x"/></div>
                                <h3>Web Design</h3>
                                <p>前端網頁是我的興趣之一</p>
                            </div>
                        </div>

                        {/*-------*/}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon icon={faUnity}size="2x"/></div>
                                <h3>Unity</h3>
                                <p>大學時期曾和同學們一起製作遊戲</p>
                            </div>
                        </div>

                        {/*--------*/}
                        <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon icon={faGamepad}size="2x"/></div>
                                <h3>Game</h3>
                                <p>遊戲也是我人生中不可缺少的一部分</p>
                            </div>
                        </div>

                        {/*--------*/}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon icon={faVolleyballBall}size="2x"/></div>
                                <h3>Volleyball</h3>
                                <p>休閒時我喜歡打排球大學時也是系隊一份子</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Intrest
