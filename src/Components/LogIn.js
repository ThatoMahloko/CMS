import React, { useState } from 'react';
// import './App.css';
import nurse from '../../src/nurse.jpg';
import logo from '../../src/logo.png'
import { Link } from 'react-router-dom';
import { login } from '../Auth/SignUp';
import { useNavigate } from 'react-router-dom';
import { firebase } from '../Config/Firebase'

import { db } from '../Config/Firebase';
const LogIn = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const log = () => {
        console.log(email, password)
        // if (email === "" && password === "") {
        //     alert("Complete Form!!")
        // } else {


        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Successfully Signed In!");
                navigate('/Dashboard');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage, ": " + errorCode)
            })

        // }
    }

    return (
        <div>
            <div className="rectangle1">
                <h1 className="heading">CyberPharm</h1>
            </div>
            <div className="body">
            
                <div className="rectangle2">
                <img src={logo} className="logo"/>
                    <div className="textinput">
                        <form>
                            <label>Email<br />
                                <input
                                    type="text"
                                    style={{ width: "300px" }}
                                    onChange={(email) => setEmail(email.target.value)}

                                />
                            </label>
                        </form>
                        <form className="pass">
                            <label>Password<br />
                                <input
                                    type="password"
                                    style={{ width: "300px" }}
                                    onChange={(password) => setPassword(password.target.value)}

                                />
                            </label>
                        </form>
                        <nav>
                            <button to="Dashboard" className="btn" onClick={log}>LOGIN</button>
                        </nav>
                        <p className="text">Don't have an account?
                            <nav>
                                <Link to="SignUp" style={{ color: "rgba(5, 78, 222, 0.7)" }}>Sign Up</Link>
                            </nav>
                        </p>
                       
                        <p className="text">Forgot Password?
                            <nav>
                                <Link to="ResetPassword" style={{ color: "rgba(5, 78, 222, 0.7)" }}>Reset Here</Link>
                            </nav>
                        </p>


                    </div>
                </div>
                <img src={nurse} className="image" />
            </div>

        </div>
    )
}

export default LogIn