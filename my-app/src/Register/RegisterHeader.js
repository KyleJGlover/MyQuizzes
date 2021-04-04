import React from 'react';
import {Link} from 'react-router-dom';
import { IoApertureSharp } from "react-icons/io5";
import './RegisterHeader.css';



function RegisterHeader() {
    return (
        <div className="register_header">
            <Link className="link_logo" to="/">
                <div className="register_logo"><IoApertureSharp size={90}/></div>
            </Link>
            {/* <div className="search_bar_div">
                <input className="search_bar"/>
            </div> */}
            <div className="register_title_container">
                <div className="register_title_div">
                    <label className="register_title">Welcome to Personalized Quizzes</label>
                </div>
            </div>
            <Link className="register_login_btn" to="/Login">
                <div className="register_login_btn_div">
                    <button className ="register_login_btn_btn">Login</button>
                </div>
            </Link>
        </div>
    )
}

export default RegisterHeader
