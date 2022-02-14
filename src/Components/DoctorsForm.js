import React, { useState } from 'react';
//import '../App.css'
import { Link } from 'react-router-dom';
import { firebase } from '../Config/Firebase'
import { saveDoctor } from '../databaseServices/services'

const DoctorsForm = () => {
    const [about, setAbout] = useState("")
    const [email, setEmail] = useState("")
    const [experience, setExperience] = useState("")
    const [name, setName] = useState("")
    const [patients, setPateints] = useState("")
    const [phone, setPhone] = useState("")
    const [profileImage, setProfileImage] = useState("")
    const [ratings, setRatings] = useState("")
    const [specialization, setSpecialization] = useState("")
    const [workingTime, setWorkingTime] = useState("")


    const saveDoc = () => {
        if (about === "" && email === "" && experience === "" && name === "" && patients === "" && phone === "" /*{&& profileImage === ""}*/ && ratings === "" && specialization === "" && workingTime === "") {
        } else {
            console.log(about, email, experience, name, patients, phone, profileImage, ratings, specialization, workingTime)
            saveDoctor(about, email, experience, name, patients, phone, profileImage, ratings, specialization, workingTime)
        }

        // console.log(specialization)

    }


    return (
        <div>
            <div className="header">
                <h1 className="heading">CyberPharm</h1>
                <div className="screens">
                <Link to="/DoctorsForm" className="doctorsform" style={{marginLeft:-110,textAlign: 'center',textDecoration: 'none',flexDirection: 'row',paddingRight:25,position: 'absolute',paddingLeft:-25}}>DoctorsForm</Link>
                    <Link to="/Dashboard" className="dashboard" style={{marginLeft:10, textDecoration: 'none',textAlign:'center',flexDirection: 'row',paddingRight:20}}>Dashboard</Link>
                    <Link to="/Appointment" className="appt" style={{textDecoration: 'none', textAlign: 'center',flexDirection: 'row',paddingRight:45}} >Appointment</Link>
                    <Link to="/Doctors" className="doctor" style={{textDecoration: 'none', textAlign: 'center',flexDirection: 'row'}}>Doctors</Link>
                    <Link to="/Patients" className="doctor" style={{textDecoration: 'none',textAlign:'center',flexDirection: 'row'}} >Patients</Link>
                </div>
            </div>
            <p className="text2">Edit Doctor Information</p>
            <h5 className="di">Doctors Image*</h5>
            <div className="info">
                <div style={{ display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16" style={{ marginLeft: "40px" }}>
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                    </svg>
                    <form className="input">
                        <label style={{ marginLeft: '-40px' }}>
                            <h5>Name*</h5>
                            <input type="text" className="block" onChange={(v) => setName(v.target.value)} />
                        </label>
                    </form>
                    <form className="input">
                        <label>
                            <label for="cars">Choose a car:</label>

                            <select name="cars" id="cars" onChange={(v) => setSpecialization(v.target.value)}>
                                <option value="Neurology">Neurology</option>
                                <option value="Genetics">Genetics</option>
                                <option value="Surgery">Surgery</option>
                                <option value="Dentistry">Dentistry</option>
                            </select>
                        </label>
                    </form>

                </div>

            </div>
            <div className="info">
                <form className="input2">
                    <label>
                        <h5>Email*</h5>
                        <input type="text" className="block" onChange={(v) => setEmail(v.target.value)} />
                    </label>
                </form>
                <form style={{ marginLeft: "200px", marginTop: "-265px" }}>
                    <label>
                        <h5>Experience(in years)*</h5>
                        <input type="text" className="block" onChange={(v) => setExperience(v.target.value)} />
                    </label>
                </form>

            </div>
            <div className="info">

                <form style={{ marginLeft: "550px", marginTop: "-175px" }}>
                    <label>
                        <h5>No. of Patients Worked With*</h5>
                        <input type="text" className="block" onChange={(v) => setPateints(v.target.value)} />
                    </label>
                </form>

            </div>
            <div className="info">
                <form style={{ marginLeft: "550px", marginTop: "-85px" }}>
                    <label>
                        <h5>Phone Number*</h5>
                        <input type="text" className="block" onChange={(v) => setPhone(v.target.value)} />
                    </label>
                </form>
                <form style={{ marginLeft: "200px", marginTop: "-175px" }}>
                    <label>
                        <h5>Ratings*</h5>
                        <input type="text" className="block" onChange={(v) => setRatings(v.target.value)} />
                    </label>
                </form>

            </div>
            <div className="info">

                <form style={{ marginLeft: "550px", marginTop: "10px" }}>
                    <label>
                        <h5>Working Days and Time*</h5>
                        <input type="text" className="block" onChange={(v) => setWorkingTime(v.target.value)} />
                    </label>
                </form>

            </div>
            <div className="info">
                <form style={{ marginLeft: "550px", marginTop: "25px" }}>
                    <label>
                        <h5>Professional Bio*</h5>
                        <input type="text" className="bio" onChange={(v) => setAbout(v.target.value)} />
                    </label>
                </form>

            </div>

            <button className="add" onClick={saveDoc} >Add</button>

        </div>
    )
}
export default DoctorsForm