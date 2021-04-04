import '../projectImg.jpg';
import './Main.css';
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';



function Main() {

    const [user, setUser] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/api/Login").then((response) => {
            if(response.data.loggedIn == true){
            setUser(response.data[0].username);
            }
        })
      }, []);
    Axios.defaults.withCredentials = true;






    return (
        <div className="main_container">
            <div className="left_empty_container">
            <Link className="create_quiz_btn_link" to="/Create_quiz">
                <button className="create_quiz_btn">Create a Quiz!</button>
            </Link>
            </div>
            <div className="middle_content_container">
                <div className="user_data_container">
                    <div className="user_photo_container">
                        <img src={"/projectImg.jpg"}>
                        </img>
                    </div>
                    <div className="user_info_container">
                        <div className="info_list">
                            <label className="main_user_info">Username:</label>
                            <br/>
                            <label className="main_user_info">Quizzes made:</label>
                            <br/>
                            <label className="main_user_info">Quizzes taken:</label>
                            <br/>
                            <label className="main_user_info">Quizzes used:</label>
                        </div>
                    </div>
                </div>
                {/* This is a place holder for the array of quizzes STARTS      */}
                <div className="main_content_container">
                    <div className="quiz_container">
                        <div className="user_quizzes">
                            <div className="quiz_content_container">
                                <label className="quiz_name_lbl">Quiz Name:</label>
                                <label className="num_questions_lbl">Number of Questions:</label>
                            </div>
                        </div>
                        <div className="average_score">
                            <label className="average_score_lbl">Average Score: 100%</label>
                        </div>                       
                    </div>
                    <div className="quiz_container">
                        <div className="user_quizzes">
                            <div className="quiz_content_container">
                                <label className="quiz_name_lbl">Quiz Name:</label>
                                <label className="num_questions_lbl">Number of Questions:</label>
                            </div>
                        </div>
                        <div className="average_score">
                            <label className="average_score_lbl">Average Score: 100%</label>
                        </div>                       
                    </div>
                    <div className="quiz_container">
                        <div className="user_quizzes">
                            <div className="quiz_content_container">
                                <label className="quiz_name_lbl">Quiz Name:</label>
                                <label className="num_questions_lbl">Number of Questions:</label>
                            </div>
                        </div>
                        <div className="average_score">
                            <label className="average_score_lbl">Average Score: 100%</label>
                        </div>                       
                    </div>
                    <div className="quiz_container">
                        <div className="user_quizzes">
                            <div className="quiz_content_container">
                                <label className="quiz_name_lbl">Quiz Name:</label>
                                <label className="num_questions_lbl">Number of Questions:</label>
                            </div>
                        </div>
                        <div className="average_score">
                            <label className="average_score_lbl">Average Score: 100%</label>
                        </div>                       
                    </div>
                </div>
                {/* This is a place holder for the array of quizzes ENDS       */}
            </div>
            <div className="right_friend_container">
                <div className="friendlist_container">
                    <div className="friendlist_container_header">
                        <div className="friendlist_header_div">
                            <label className="friendlist_header">Friends List</label>
                        </div>
                    </div>
                    <div className="friend_in_friendlist_container">
                        <div className="friend_profile_list">
                            <div className="friendlist_image_container">
                                <div className="user_image_friendlist"></div>
                            </div>
                            <div className="friendlist_user_content">
                                <label className="friendlist_user_data">Username:</label>
                                <label className="friendlist_user_data">Quizzes Made:</label>
                            </div>
                        </div>
                        <div className="friend_profile_list">
                            <div className="friendlist_image_container">
                                <div className="user_image_friendlist"></div>
                            </div>
                            <div className="friendlist_user_content">
                                <label className="friendlist_user_data">Username:</label>
                                <label className="friendlist_user_data">Quizzes Made:</label>
                            </div>
                        </div>
                        <div className="friend_profile_list">
                            <div className="friendlist_image_container">
                                <div className="user_image_friendlist"></div>
                            </div>
                            <div className="friendlist_user_content">
                                <label className="friendlist_user_data">Username:</label>
                                <label className="friendlist_user_data">Quizzes Made:</label>
                            </div>
                        </div>
                        <div className="friend_profile_list">
                            <div className="friendlist_image_container">
                                <div className="user_image_friendlist"></div>
                            </div>
                            <div className="friendlist_user_content">
                                <label className="friendlist_user_data">Username:</label>
                                <label className="friendlist_user_data">Quizzes Made:</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
    </div>
    )
}

export default Main
