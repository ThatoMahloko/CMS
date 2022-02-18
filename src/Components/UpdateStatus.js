import React, { useState, useEffect } from 'react';
import { db, firebase } from '../Config/Firebase';
import { Link } from 'react-router-dom'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';

function UpdateStatus() {
    const [doctorAvailabilityState, setDoctorAvailabilityState] = useState(true)
    const [doctor, setDoctor] = useState([])
    const [branch, setBranch] = useState([])
    const [searchByEmail, setSearchByEmail] = useState([])
    const [doctors, setDoctors] = useState([])

    var value = 0

    /*    
        *---------------------------------------------------STEP1---------------------------------------------------
        *Get the users Email Address
    */
    const user = firebase.auth().currentUser
    /*    
        *---------------------------------------------------E-N-D---------------------------------------------------
        *Get the users Email Address
    */

    /*    
        *---------------------------------------------------STEP2---------------------------------------------------
        *Get all branches
    */
    const getAllBranches = () => {
        db.collection("MedicalFascilities")
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data
                }))
                // console.log(branch)
                getDoctorsInBranches(branch)

                return (
                    setBranch(dis)

                )

            })
    }
    /*    
      *---------------------------------------------------E-N-D---------------------------------------------------
      *Get all branches
    */

    /*    
        *---------------------------------------------------STEP3---------------------------------------------------
        *Get all Doctors in the branches (dorctors are set by email)
    */
    const getDoctorsInBranches = (branch) => {
        for (let index = 0; index >= branch.length; index++) {
            value = branch[0];
                db.collection('MedicalFascilities').doc(value).collection('Doctors')
                    .onSnapshot((snapshot) => {
                        const dis = snapshot.docs.forEach((doc) => ({
                            id: doc.id,
                            ...doc.data
                        }))
                        setDoctors(dis)
                    })

        }

        /*
        trying to get doctors in a fascilty, loop through each facility and retrive Doctors collection
        setting sate for doctors ***const [doctors, setDoctors] = useState([])***
        state is set for comparison for use in filter later
        */
        console.log('hello')
    }

    useEffect(() => {
        // getAllBranches()
        // getDoctorsInBranches(branch)
    }, [])
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
                <input type='text' placeholder="Branch Code" onChange={(v) => setSearchByEmail(v.target.value)} />
                <button onChange={(v) => setBranch(v.target.value)}>Update Status</button>


                {
                    <table id="customers">
                        <tr>
                            <th>Doctor Name</th>
                            <th>Email</th>
                            <th>Availability</th>
                        </tr>
                    </table>
                }
            </form>



        </div>
    )
}


export default UpdateStatus 