import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serverID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_ROx7vJY1Eq49kfRCvoKzA";

    const onSubmit = (data, r) => {
        sendEmail(
            serverID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serverID, templateID, variable, userID) => {
        emailjs.send(serverID, templateID, variable, userID)
            .then(() => {
                setSuccessMessage("成功送出")
            }).catch(err => console.error(`有些地方寫錯了 $(err)`));
    }

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>聯絡我</h1>
                <p>請把表單填寫完成</p>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">

                            <div className="text-center">
                                <input className="form-control"
                                    type="text"
                                    placeholder="名子"
                                    name="name"
                                    ref={
                                        register({
                                            required: "請輸入你的名子",
                                            maxLength: { value: 20, message: "請輸入你的名子小於20字" }
                                        })
                                    }>
                                </input>

                                <div className="line"></div>

                            </div>

                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>

                            <div className="text-center">
                                <input className="form-control"
                                    type="text" placeholder="聯絡電話"
                                    name="phone"
                                    ref={
                                        register({
                                            required: "請輸入你的電話號碼",

                                        })
                                    }>

                                </input>

                                <div className="line"></div>

                            </div>

                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>

                            <div className="text-center">
                                <input className="form-control"
                                    type="email"
                                    placeholder="信箱"
                                    name="email"
                                    ref={
                                        register({
                                            required: "請輸入你的電子信箱",
                                            pattern:{
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message:"錯誤的Email"
                                            }

                                        })
                                    }>
                                </input>

                                <div className="line"></div>

                            </div>

                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>

                            <div className="text-center">
                                <input className="form-control"
                                    type="text"
                                    placeholder="主題"
                                    name="subject"
                                    ref={
                                        register({
                                            required: "請輸入你的主題",

                                        })
                                    }>

                                </input>

                                <div className="line"></div>     
                            </div>

                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>

                        </div>

                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <textarea type="text"
                                    className="form-control"
                                    placeholder="請說明你的內容"
                                    name="description"
                                    ref={
                                        register({
                                            required: "請輸入你的內容",

                                        })
                                    }>

                                </textarea>

                                <div className="line"></div>

                            </div>

                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>

                            <button className="btn-main-offer contact-btn" type="submit">聯絡我</button>
                        </div>
                        
                        

                    </div>
                </form>
                
                        <span className="success-message">{successMessage}</span>
                        
            </div>
        </div>

    )
}

export default Contacts
