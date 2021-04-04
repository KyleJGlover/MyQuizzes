import './Create_quiz.css';
import React,{ useState, useEffect } from 'react';
import {useForm} from "react-hook-form";
import Axios from 'axios';


function Create_quiz() {
    
    //This will store the quiz in session storage
    const intialStateCounter = () =>(Number(window.sessionStorage.getItem('questionCounter'))) || 1;
    const intialStateQuiz = () =>(Number(window.sessionStorage.getItem('quizObject'))) || [];
    const intialStateQuizName = () =>(Number(window.sessionStorage.getItem('QuizName'))) || "";

    const [quizObject, setQuizObject] = useState(intialStateQuiz);

    const [quizName, setQuizName] = useState(intialStateQuizName);

    const [questionCounter, setQuestionCounter] = useState(intialStateCounter);
    
    const {register, handleSubmit, errors} = useForm();

    Axios.defaults.withCredentials = true;
    
    useEffect(()=>{
    
        window.sessionStorage.setItem('questionCounter', questionCounter );
        window.sessionStorage.setItem('quizObject', quizObject );
        window.sessionStorage.setItem('QuizName', quizName );
        console.log(quizName);
    }, [questionCounter, quizObject, quizName])

    const onSubmitName = (name)=>{
        setQuizName(name);
        console.log(quizName);
    }

    const onSubmit = (data)=> {

        // var isCorrect1 = false;
        // var isCorrect2 = false;
        // var isCorrect3 = false;
        // var isCorrect4 = false;

        // switch(Object.values(data)[5]) {
        //     case 'question1':
        //         isCorrect1 = true;
        //         break;
        //     case 'question2':
        //         isCorrect2 = true;
        //         break;
        //     case 'question3':
        //         isCorrect3 = true;
        //         break;
        //     default:
        //         isCorrect4 = true;
        //   }
          var question = Object.values(data)[0];
          var answer1 = Object.values(data)[1];
          var answer2 = Object.values(data)[2];
          var answer3 = Object.values(data)[3];
          var answer4 = Object.values(data)[4];
          var isCorrect = Object.values(data)[5]

        const answerOptions = [ answer1, answer2, answer3, answer4, isCorrect];

        const questionContents = {question, answerOptions};

        setQuizObject(quizObject =>{ 
            return [...quizObject, questionContents];   
        });

        console.log(quizObject);

        setQuestionCounter(questionCounter+1);

        document.getElementById("quizInfo").reset();
    }
    function finishQuiz(){
        //Submit data to the data base
        console.log(quizName);
        console.log(quizObject);
        const user_id = sessionStorage.getItem("user");
        console.log(typeof (parseInt(user_id)));
        for(var i = 0;i<quizObject.length;i++){
        Axios.post("http://localhost:3001/api/Create_quiz", {
            authorId: parseInt(user_id), 
            quizName: "quizName",
            question: quizObject[i].question,
            answer1: quizObject[i].answerOptions[0],
            answer2: quizObject[i].answerOptions[1], 
            answer3: quizObject[i].answerOptions[2], 
            answer4: quizObject[i].answerOptions[3], 
            isCorrect: quizObject[i].answerOptions[4]
        }).then((response) => {
            console.log(response.data.message);
        });
    }
        window.sessionStorage.removeItem('questionCounter');
        window.sessionStorage.removeItem('quizObject');
        window.sessionStorage.removeItem('quizName');
    }
    
    return (
        <div className="create_quiz_container">
            {(quizName === "") ? (
            <form onSubmit={onSubmitName} className="quiz_name">
                    <input type= "text" name="quizName" placeholder=" Quiz Name" 
                    onChange={e =>setQuizName({...quizName, quizName: e.target.value})} value={quizName}/>
                    <button type="submit" className="quiz_next_btn" name="quiz_next_btn">Submit</button>
            </form>
            
            ):(
            <div className='create_quiz_app'>
                <div className = "create_quiz_question_container">
                    
                        <div className='create_quiz_question_count'>
                            <span>Question {questionCounter}</span>
                        </div>
                        <form id = "quizInfo" onSubmit={handleSubmit(onSubmit)}>
                                <input type="text" className="create_question" name ="question" ref={register({required: true})} placeholder="Question Text" />
                            <div className='create_answer_section'>
                                
                                <div className="create_form_group">
                                    <input type="text" className="create_answer" name= "answer1" ref={register({required: true})} placeholder="Answer 1" />
                                    
                                    
                                </div>
                                <div className="create_form_group">
                                    <input type="text" className="create_answer" name= "answer2" ref={register({required: true})} placeholder="Answer 2" />
                                    

                                </div>
                                <div className="create_form_group">
                                    <input type="text" className="create_answer" name= "answer3" ref={register({required: true})}  placeholder="Answer 3" />
                                    

                                </div>
                                <div className="create_form_group">
                                    <input type="text" className="create_answer" name= "answer4" ref={register({required: true})} placeholder="Answer 4" />
                                
                                </div> 
                                <select id="iscorrect" name="iscorrect" ref={register({required: true})} >
                                        <option value= "question1">Question 1</option>
                                        <option value= "question2">Question 2</option>
                                        <option value= "question3">Question 3</option>
                                        <option value= "question4">Question 4</option>
                                    </select>                               
                                </div>
                                <button type="submit" className="quiz_next_btn" name="quiz_next_btn">Submit</button>
                                
                    </form>
                    <button className="quiz_submit_btn" name="quiz_submit_btn" onClick={finishQuiz}>Finish</button>
                    </div>
                
                </div>
                )}
                    
        </div>
    )
}

export default Create_quiz
