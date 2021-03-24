import React from 'react'

function Experience() {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>大學時期</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>大一時期</h3>
                        <p>大一時，我參加許多系上活動，並且學習了C++、C#、HTML、CSS、bootstrap網頁製作雖然當時只有學習到基本觀念，
                                但是卻讓我對網頁有初步的認識。</p>
                    </div>
                </div>

                {/*----- */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>大二時期</h3>
                        <p>大二時，我從參加系上活動的人變成了舉辦的人，因此我花了一部份的時間在系上活動，並且在大二時學習了基本的javascript、
                        jquery、unity、影片剪輯(Premiere)、修圖(photoshop)，但是我對網頁和unity則較為有興趣。
                            </p>
                    </div>
                </div>

                {/*----- */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>大三上時期</h3>
                        <p>大三上時，系上活動已經較為減少，因此我在上學期時學了些許的node.js和mongodb、java、手機遊戲(unity)
                        ，這學期的程式課較為多且複雜一些，因此大三上非常充實。

                            </p>
                    </div>
                </div>

                {/*----- */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>大三下時期</h3>
                        <p>大三下時，系上基本上已經沒有了程式課程，因此我選擇與同學們一起用unity製作遊戲，並且花時間複習以前學習過的網頁(HTML、CSS、JAVASCRIPT)，並且自學react相關內容。

                            </p>
                    </div>
                </div>

                {/*----- */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>大四期許</h3>
                        <p>希望能夠在大四時更加精進我的unity和網頁，並且希望能學習php等後端相關內容，
                        並且能夠在實習地點繼續精進我的程式能力

                            </p>
                    </div>
                </div>

                {/*----- */}
            </div>
        </div>
    )
}

export default Experience
