import React from 'react';
import {Link} from 'react-router-dom';
import './QuizHeader.css'

function QuizHeader() {
    return (
        <div className="quiz_header">
            <Link className="main_btn_quiz_container" to="/Main">
                <button className ="main_btn_quiz">Main</button> 
            </Link>
        </div>
    )
}

export default QuizHeader
