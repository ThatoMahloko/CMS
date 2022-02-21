import React, { useState } from 'react';
// import './App.css';
import nurse from '../../src/nurse.jpg';
import logo from '../../src/logo.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { firebase } from '../Config/Firebase'
import resetPassword from '../Auth/resetPassword';

import { db } from '../Config/Firebase';
const ResetPassword = () => {

    const [userEmail, setUserEmail] = useState('')

    const submit = () => {
        resetPassword(userEmail)
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
                                    onChange={(email) => setUserEmail(email.target.value)}

                                />
                            </label>
                        </form>
                        <nav>
                            <button to="Dashboard" className="btn" >Reset Password</button>
                        </nav>


                    </div>
                </div>
                <img src={nurse} className="image" />
            </div>

        </div>
    )
}

export default ResetPassword