import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LineShareButton,
    LineIcon

} from "react-share"
import {Link} from "react-scroll";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render(){
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex pt-1">
                            <p>目前就讀元智大學</p>
                        </div>
                        <div className="d-flex pt-1">
                            <p>a3652284@yahoo.com.tw</p>
                        </div>
                        <div className="d-flex pt-1">
                            <p>a3652284@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col pt-1">
                                <Link smooth={true} to="home" offset={-110} className="footer-nav">首頁</Link>
                                <br />
                                <Link smooth={true} to="about" offset={-110} className="footer-nav">關於我</Link>
                                <br />
                                <Link smooth={true} to="interest" offset={-110} className="footer-nav">興趣</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" offset={-110} className="footer-nav">大學時期</Link>
                                <br />
                                <Link smooth={true} to="contacts" offset={-110} className="footer-nav">聯絡我</Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center m-3">
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
                            現在時間
                            {this.state.date.toLocaleTimeString()}                  
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
}

export default Footer
