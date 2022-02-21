import React, { useState, useEffect, Aler } from 'react';
import { db, firebase } from '../Config/Firebase';
import { Link } from 'react-router-dom'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import '../../src/UpdateStatus.css'

function UpdateStatus() {
    const [doctorAvailabilityState, setDoctorAvailabilityState] = useState(true)
    const [doctor, setDoctor] = useState([])
    const [branch, setBranch] = useState([])
    const [currentUserEmail, setCurrentUserEmail] = useState([])
    const [branchDisplay, setBranchDisplay] = useState([])
    const [branches, setBranches] = useState([])

    /*
        *get user email
    */


    /*
        *get user email input
    */

    const validate = () => {
        const email = firebase.auth().currentUser.email
        if (email !== currentUserEmail) {
            alert("Invalid Email")
        } else {
            branchCheck(currentUserEmail)
        }
    }

    /*
        *confirm that user exists in branch
    */
    const branchCheck = (mail) => {
        console.log(mail + " is valid")
        db.collection('MedicalFascilities')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data
                }))
                setBranches(dis)
            })
        //     alert('!!⚠️InValid Doctor Not Belonging to branch⚠️!!')

        // console.log(branches)

        if (branches.some(br => br.id === branch)) {
            console.log('working')
            db.collection('MedicalFascilities').doc(branch).collection('Doctors')
                .onSnapshot((snapshot) => {
                    const dis = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                    setDoctor(dis)
                })
            console.log(doctor)
        } else {
            console.log('No such Branch')
        }
    }





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



            <div>
                <input type="text" placeholder="Email Address" onChange={(v) => setCurrentUserEmail(v.target.value)} />
                <input type="text" placeholder="Branch Code" onChange={(v) => setBranch(v.target.value)} />
                <button onClick={() => validate()} >Submit</button>
            </div>


            <div>
                <FormControl id="formControl" component="fieldset">
                    <FormControl id="formControl" component="fieldset">
                        <RadioGroup aria-label="gender" name="gender1">
                            <FormControlLabel id="radio" name='accept' value="true" control={<Radio />} label="Available" onClick={(v) => setDoctorAvailabilityState(true)} />
                            <FormControlLabel id="radio" name="declined" value="false" control={<Radio />} label="Unavailable" onClick={(v) => setDoctorAvailabilityState(false)} />
                        </RadioGroup>
                        <button  >Submit</button>
                    </FormControl>
                </FormControl>
            </div>


            {
                <table id="customers">
                    <tr>
                        <th>Doctor Name</th>
                        <th>Email</th>
                        <th>Availability</th>
                    </tr>

                    {
                        doctor.map((dr) => {
                            return (
                                <tr>
                                    <td>{dr.Name}</td>
                                    <td>{dr.Email}</td>
                                    {
                                        dr.Status === false ?
                                            <td id="pending">Pending</td>
                                            :
                                            <td id="accepted">Available</td>
                                    }
                                </tr>
                            )

                        })
                    }



                </table>
            }

        </div>
    )
}


export default UpdateStatus 