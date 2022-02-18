import React, { useState } from 'react';
// import './App.css';
import nurse from '../../src/nurse.jpg';
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
                    <div className="textinput">
                        <form>
                            <label>Email<br />
                                <input
                                    type="text"
                                    style={{ width: "200px" }}
                                    onChange={(email) => setEmail(email.target.value)}

                                />
                            </label>
                        </form>
                        <form className="pass">
                            <label>Password<br />
                                <input
                                    type="password"
                                    style={{ width: "200px" }}
                                    onChange={(password) => setPassword(password.target.value)}

                                />
                            </label>
                        </form>
                        <p className="text">Don't have an account?
                            <nav>
                                <Link to="SignUp" style={{ color: "white" }}>Sign Up</Link>
                            </nav>
                        </p>
                        <nav>
                            <button to="Dashboard" className="btn" onClick={log}>LOGIN</button>
                        </nav>


                    </div>
                </div>
                <img src={nurse} className="image" />
            </div>

        </div>
    )
}

export default LogIn