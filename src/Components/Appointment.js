import React, { useEffect, useState } from 'react';
// import './App.css'
import { Link } from 'react-router-dom';
import { getBookings } from '../databaseServices/services';
import { firebase } from '../Config/Firebase'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import { updateAppoitmentStatus } from '../databaseServices/services';


const Appointment = () => {

    const [appoitnments, setAppointments] = useState([])
    const [appoitnmentState, setAppointmentState] = useState(false)

    


    useEffect(() => {

        const email = firebase.auth().currentUser.email;
        console.log(email)
        firebase.firestore().collection('DoctorsAppointments').doc(email).collection('Bookings').onSnapshot((querySnapshot) => {
            const dis = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setAppointments(dis)
            console.log(dis)
            return dis;

        })

    }, [])


    return (
        <div>

            <div className="header">
                <h1 className="heading">CyberPharm</h1>
                <div className="screens">
                    <Link to="/DoctorsForm" className="dashboard">DoctorsForm</Link>
                    <Link to="/Dashboard" className="dashboard">Dashboard</Link>
                    <Link to="/Appointment" className="appt">Appointment</Link>
                    <Link to="/MedicalFascilities" className="doctor">medicalfasilities</Link>
                </div>
            </div>

            <button className="add" onPress={updateAppoitmentStatus()}>Update</button>
            <div className="appt2">
                <div className="show">
                    <h5 style={{ marginLeft: "20px", marginTop: "20px" }}>Show</h5>
                    <div className="no1">
                        <p >10</p>

                    </div>
                    <h5 style={{ marginLeft: "10px", marginTop: "20px" }}>Entries</h5>
                    <h5 style={{ marginLeft: "1100px", marginTop: "20px" }}>Search:</h5>
                    <input
                        type="text"
                        // placeholder="Search name"
                        style={{ height: "30px", marginLeft: "10px", marginTop: "20px" }}

                    />
                </div>

                {

                    appoitnments.map((data) => {
                        console.log(data)
                        return (
                            <div id="tableData">
                                <table id="customers">
                                    <tr>
                                        <th>Appoitment ID</th>
                                        <th>Doctors Name</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>View Appointment</th>
                                        <th>Set Appointment</th>
                                    </tr>
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.Doctor}</td>
                                        <td>Empty</td>

                                        {data.Status === true ?
                                            <td id="pending">Pending</td>
                                            :
                                            <td id="accepted">Accepted</td>

                                        }
                                        <td>view</td>
                                        <FormControl id="formControl" component="fieldset">
                                            <RadioGroup aria-label="gender" name="gender1">
                                                <FormControlLabel value="true" control={<Radio />} label="Accepted" onChange={setAppointmentState(data.Status)} />
                                                <FormControlLabel value="false" control={<Radio />} label="Pending" onChange={setAppointmentState(data.Status)} />
                                            </RadioGroup>
                                        </FormControl>
                                        
                                    </tr>
                                </table>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Appointment