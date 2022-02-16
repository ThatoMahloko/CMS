import React, { useEffect, useState } from 'react';
//import '../App.css';
import { Link } from 'react-router-dom'
import { db } from '../Config/Firebase';
import { firebase } from '../Config/Firebase'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import { UpdateStatus, onUpdate } from './UpdateStatus';

const Dashboard = () => {
    const [doctor, setDoctor] = useState([])
    const [BranchDoctor, setBranchDoctor] = useState([])
    const [totalDoctors, setTotalDoctors] = useState()
    const [totalPatients, setTotalpatients] = useState([])
    const [branchCode, setBranchCode] = useState("")
    const [doctorAvailabilityState, setDoctorAvailabilityState] = useState(true)
    const [doctorID, setDoctorId] = useState()

    const Doctors = () => {
        db.collection('Doctors')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setDoctor(dis)
                setTotalDoctors(doctor.length)
            })
    }

    const Bookings = () => {
        db.collection('DoctorsAppointments')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setTotalpatients(dis)
            })
    }


    const HospitalBranchDoctors = (code) => {
        console.log(code)
        db.collection("MedicalFascilities").doc(code).collection("Doctors")
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setBranchDoctor(dis)
                console.log(BranchDoctor)
                console.log(branchCode)
            })
    }


    useEffect(() => {
        Doctors()
        Bookings()
    })

    return (
        <div>
            <div className="header">
                <h1 className="heading">CyberPharm</h1>
                <div className="screens">
                    <Link to="/Dashboard" className="dashboard">Dashboard</Link>
                    <Link to="/Appointment" className="appt">Appointment</Link>
                    <Link to="/MedicalFascilities" className="medicalFacilities">MedicalFacilities</Link>
                    <Link to="/DoctorsForm" className="doctorsForm">DoctorsForm</Link>
                </div>
            </div>
            <p className="text2">Dashboard</p>
            <div className="info">
                <div className="total">
                    <div className="totalText">
                        <svg xmlns="http://www.w3.org/2000/svg" width="102" height="96" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16" style={{ marginTop: "20px" }}>
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        </svg>
                        <div className="totals">
                            <h2>Total Patients</h2> <br />
                            <h2 style={{ marginLeft: "60px" }}>{totalPatients.length}</h2>
                        </div>
                    </div>
                </div>
                <div className="total">
                    <div className="totalText">
                        <svg xmlns="http://www.w3.org/2000/svg" width="102" height="96" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                        </svg>
                        <div className="totals">
                            <h2>Appointments</h2> <br />
                            <h2 style={{ marginLeft: "60px" }}>74</h2>
                        </div>
                    </div>
                </div>
                <div className="total">
                    <div className="totalText">
                        <svg xmlns="http://www.w3.org/2000/svg" width="102" height="96" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <div className="totals">
                            <h2>Doctors</h2> <br />
                            <h2 style={{ marginLeft: "40px" }}>{totalDoctors}</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lists">
                <div className="doctors-list">
                    <h4 className="name">Doctors List</h4>
                    <hr style={{ width: "1300px", marginLeft: "30px" }} />
                    <div className="show">
                        <h5 style={{ marginLeft: "990px" }}>Search:</h5>
                        <input type="text" class="button" onChange={(v) => setBranchCode(v.target.value)} />
                        <button class="button button2" onClick={() => HospitalBranchDoctors(branchCode)}>Search</button>
                    </div>
                    <table id="customers">
                        <tr>
                            <th>SELECT</th>
                            <th>Doctors Name</th>
                            <th>Doctors Email</th>
                            <th>Availability</th>
                            <th>Specialization</th>
                            <th>Phone Number</th>
                            <th>Workoing time</th>
                            <th>Status</th>
                        </tr>
                        {
                            branchCode === "" ?
                                < div class="w3-panel w3-blue-grey">
                                    <h3>Danger!</h3>
                                    <p>Enter The branch code of the medical Fascility</p>
                                </div>
                                :
                                BranchDoctor.map((dr) => {
                                    return (
                                        <>
                                            <tr>
                                                <td className='selectID' onClick={setDoctorId(dr.id)}>SELECT</td>
                                                <td>{dr.Name}</td>
                                                <td>{dr.Email}</td>
                                                {
                                                    dr.Availablity === true ?
                                                        <td id="avail">Available</td>
                                                        :
                                                        <td id="booked">Booked</td>

                                                }
                                                <td>{dr.Specialization}</td>
                                                <td>{dr.Phone}</td>
                                                <td>{dr.WorkingTime}</td>
                                                <FormControl id="formControl" component="fieldset">
                                                    <FormControl id="formControl" component="fieldset">
                                                        <RadioGroup aria-label="gender" name="gender1">
                                                            <FormControlLabel id="radio" name='accept' value="true" control={<Radio />} label="Available" /*onClick={(v) => setDoctorAvailabilityState(true)}*/ />
                                                            <FormControlLabel id="radio" name="declined" value="false" control={<Radio />} label="Unavailabe" /*onClick={(v) => setDoctorAvailabilityState(false)}*/ />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </FormControl>
                                            </tr>
                                        </>
                                    )
                                })
                        }
                    </table>
                    <UpdateStatus doctorId={doctorID} status={doctorAvailabilityState} />
                </div>
            </div >
        </div >
    )
}
export default Dashboard