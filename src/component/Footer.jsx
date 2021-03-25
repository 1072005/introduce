import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LineShareButton,
    LineIcon

} from "react-share"


const Footer = () => {
    var date = new Date();
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>目前就讀元智大學</p>
                        </div>
                        <div className="d-flex">
                            <p>a3652284@yahoo.com.tw</p>
                        </div>
                        <div className="d-flex">
                            <p>a3652284@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">首頁</a>
                                <br />
                                <a className="footer-nav">關於我</a>
                                <br />
                                <a className="footer-nav">興趣</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">大學時期</a>
                                <br />
                                <a className="footer-nav">聯絡我</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.facebook.com/profile.php?id=100001984988001"}
                                quote={"分享"}
                                hashtag="#何信億的自我介紹"
                            >
                                <FacebookIcon className="mx-3" size={40} borderRadius="20%"  />
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={"https://www.facebook.com/profile.php?id=100001984988001"}
                                quote={"分享"}
                                hashtag="#何信億的自我介紹"
                            >
                                <TwitterIcon className="mx-3" size={40} borderRadius="20%" />
                            </TwitterShareButton>

                            <LineShareButton
                                url={"https://www.facebook.com/profile.php?id=100001984988001"}
                                quote={"分享"}
                                hashtag="#何信億的自我介紹"
                            >
                                <LineIcon className="mx-3" size={40} borderRadius="20%" />
                            </LineShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            開啟時間
                            {date.toLocaleString()}                     
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
