import React, { useState, useEffect } from 'react';
import { db, firebase } from '../Config/Firebase';
import { Link } from 'react-router-dom'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';

function UpdateStatus() {
    const [doctorAvailabilityState, setDoctorAvailabilityState] = useState(true)
    const [doctorID, setDoctorId] = useState()
    const [branch, setBranch] = useState("")
    const [doctor, setDoctor] = useState([])
    const user = firebase.auth().currentUser;

    const onUpdate = () => {
        const value = doctorAvailabilityState
        
                db.collection('MedicalFascilities').doc('Branch053').collection('Doctors').doc(user.email).update({
                    Status: doctorAvailabilityState,
                })
                    .then(() => {
                        console.log("Document successfully updated!");
                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });


        console.log(doctorAvailabilityState)
    }

    useEffect(() => {
        fetchDoctor()
        console.log(doctor)
    }, [])

    const fetchDoctor = () => {
        db.collection('MedicalFascilities').doc('Branch053').collection('Doctors')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setDoctor(dis)
            })
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

            <form style={{ alignItems: 'center' }}>
                <FormControl id="formControl" component="fieldset">
                    <FormControl id="formControl" component="fieldset">
                        <RadioGroup aria-label="gender" name="gender1">
                            <FormControlLabel id="radio" name='accept' value="true" control={<Radio />} label="Available" onClick={(v) => setDoctorAvailabilityState(true)} />
                            <FormControlLabel id="radio" name="declined" value="false" control={<Radio />} label="Unavailable" onClick={(v) => setDoctorAvailabilityState(false)} />
                        </RadioGroup>
                    </FormControl>
                </FormControl>
                <input type='text' placeholder="Branch Code" />
                <button onClick={onUpdate} onChange={(v) => setBranch(v.target.value)}>Update Status</button>


                {
                    <table id="customers">
                        <tr>
                            <th>Doctor Name</th>
                            <th>Email</th>
                            <th>Availability</th>
                        </tr>
                        {doctor.map((dr) => {
                            return (
                                <tr>
                                    <td>{dr.Name}</td>
                                    <td>{dr.Email}</td>

                                    {
                                        dr.Status === false ?
                                        <td id="pending">Unavailabe</td>
                                        :
                                        <td id="accepted">Available</td>
                                    }
                                </tr>


                            )
                        })}
                    </table>
                }
            </form>



        </div>
    )
}


export default UpdateStatus 