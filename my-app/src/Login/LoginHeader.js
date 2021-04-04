import React from 'react';
import {Link} from 'react-router-dom';
import { IoApertureSharp } from "react-icons/io5";
import './LoginHeader.css'

function LoginHeader() {
    return (
        <div className="header">
            <Link className="link" to="/">
                <div className="header_logo"><IoApertureSharp size={90}/></div>
            </Link>
         {/* <div className="login_title_container">
                <div className="login_title_div">
                    <label className="login_title">Welcome to Personalized Quizzes</label>
                </div>
            </div>    */}
            <Link className="register_btn" to="/register">
                <div className="header_btn_div">
                    <button className ="header_btn">Create New Account</button>
                </div>
            </Link>
        </div>
    )
}

export default LoginHeader
