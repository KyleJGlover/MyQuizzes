import React,{ useState } from 'react';
// import Login from './Login';

function Login_Form({loginDetails, error}) {

    const [details, setDetails] = useState({email:"", password:"", username:""});

    const submitHandler = e =>{ 
        e.preventDefault();
        loginDetails(details);

        setDetails({email:"", password:"", username:""});
    }



    return (
        <div>
            <form onSubmit={submitHandler} className="Login_form">
                <div className="form-inner">
                    <h3 className="Login_title">Login</h3>
                    {(error !=="") ? ( <div className="error">{error}</div> ) : ""}
                    <div className="form-group">
                        <label className="Login_lbl" htmlFor="name">Username:</label>
                        <input name="username" type="text" className="form-control" placeholder="Username" 
                        onChange={e =>setDetails({...details, username: e.target.value})} value={details.username}/>
                    </div>

                    <div className="form-group">
                        <label className="Login_lbl" htmlFor="email">Email:</label>
                        <input name="email" type="email" className="form-control" placeholder="Email" 
                        onChange={e =>setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>

                    <div className="form-group">
                        <label className="Login_lbl" htmlFor="password">Password:</label>
                        <input name="password" type="text" className="form-control" placeholder="Password" 
                        onChange={e =>setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>

                    <button type="submit" className="Login_submit_btn" value="Submit">Submit</button>
                    <p className="forgot-password text-right">
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login_Form
