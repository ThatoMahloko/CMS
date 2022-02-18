import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
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
    const [profile, setProfile] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
    const [branchCode, setBrancCode] = useState("")
    const saveDoc = () => {
        if (about === "" && email === "" && experience === "" && name === "" && patients === "" && phone === "" && profileImage === "" && ratings === "" && specialization === "" && workingTime === "") {
        } else {
            console.log(about, email, experience, name, patients, phone, profile, ratings, specialization, workingTime)
            saveDoctor(about, email, experience, name, patients, phone, profileImage, ratings, specialization, workingTime, branchCode)
        }

        // console.log(specialization)

    }


    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfile(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };


    return (
        <div>
            <div className="header">
                <h1 className="heading">CyberPharm</h1>
                <div className="screens">
                    <Link to="/Dashboard" className="dashboard">Dashboard</Link>
                    <Link to="/Appointment" className="appt">Appointment</Link>
                    <Link to="/MedicalFascilities" className="medicalFacilities">MedicalFacilities</Link>
                    <Link to="/DoctorsForm" className="doctorsForm">DoctorsForm</Link>
                    <Link to="/UpdateStatus" className="doctorsForm">Update Satus</Link>
                </div>
            </div>
            <p className="text2">Edit Doctor Information</p>
            <h5 className="di">Doctors Image*</h5>
            <div className="info">
                <div>
                    <div className="img-holder">
                        <img src={profile} alt="" id="img" className="img" />
                    </div>

                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
                    <div className="label">
                        <label className="image-upload" htmlFor="input">
                            <i className="material-icons">add_photo_alternate</i>
                            Choose your Photo
                        </label>
                    </div>
                    <form className="input">
                        <label style={{ marginLeft: "900px", marginTop: "-85px" }}>
                            <h5>No. of Patients Worked With*</h5>
                            <input type="text" className="block" onChange={(v) => setName(v.target.value)} />
                        </label>
                    </form>
                    <form style={{ marginLeft: "1100px", marginTop: "-100px" }} className="input">
                        <label style={{ marginTop: "-60px" }}>
                            <FormControl style={{width:'200px', marginTop:'-20px'}}>
                                <InputLabel id="demo-simple-select-label">Select Specilization</InputLabel>
                                <Select>
                                    <MenuItem  value={"Neurology"}>Neurology</MenuItem>
                                    <MenuItem value={"Dentistry"}>Dentistry</MenuItem>
                                    <MenuItem value={"Surgery"}>Surgery</MenuItem>
                                    <MenuItem value={"Biology"}>Biology</MenuItem>
                                </Select>
                            </FormControl>
                        </label>
                    </form>

                </div>

            </div>
            <div className="info">
                <form className="input2">
                    <label>
                        <h5>Name*</h5>
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
                        <h5>Email*</h5>
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
                    <h5>Branch Code*</h5>
                    <input type="text" className="block" onChange={(v) => setBrancCode(v.target.value)} />
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