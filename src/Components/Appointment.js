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
import { ReturnAppointments } from '../databaseServices/services';


const Appointment = ({ props }) => {

    const [appoitnments, setAppointments] = useState([])
    const [appoitnmentState, setAppointmentState] = useState(false)
    const [dataDoc, setDataDoc] = useState("")
    const email = firebase.auth().currentUser.email;


    useEffect(() => {
        firebase.firestore().collection('DoctorsAppointments').doc(email).collection('Bookings').onSnapshot((querySnapshot) => {
            const dis = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setAppointments(dis)
            console.log(dis)
            //return dis;
        })
    }, [])

    const onAccept = () => {

        console.log(dataDoc, appoitnmentState)
        firebase.firestore().collection('DoctorsAppointments').doc(email).collection("Bookings").doc(dataDoc).update({
            Status: appoitnmentState
        })
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
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
                    <Link to="/UpdateStatus" className="appt">Update Status</Link>
                </div>
            </div>
            <p className="text2">Appointment</p>
            {
                <div id="page" >
                    <table id='customers'>
                        <tr>
                            <th>Appoitment ID</th>
                            <th>Doctors Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>View Appointment</th>
                            <th>Set Appointment</th>
                        </tr>

                        {

                            appoitnments.map((data) => (
                                appoitnments.length !== null ?
                                    <tr>
                                        <td onClick={(v) => setDataDoc(data.id)} id="documentId">{data.id}</td>
                                        <td>{data.Doctor}</td>
                                        <td>{data.Day}</td>
                                        {
                                            data.Status === false ?
                                                <td id="pending">Pending</td>
                                                :
                                                <td id="accepted">Accepted</td>
                                        }
                                        <td>view</td>
                                        <FormControl id="formControl" component="fieldset">
                                            <FormControl id="formControl" component="fieldset">
                                                <RadioGroup aria-label="gender" name="gender1">
                                                    <FormControlLabel id="radio" name='accept' value="true" control={<Radio />} label="Accepted" onClick={(v) => setAppointmentState(true)} />
                                                    <FormControlLabel id="radio" name="declined" value="false" control={<Radio />} label="Decline" onClick={(v) => setAppointmentState(false)} />
                                                </RadioGroup>
                                            </FormControl>
                                        </FormControl>
                                    </tr>
                                    :
                                    <tr>
                                        <td>Empty</td>
                                        <td>Empty</td>
                                        <td>Empty</td>
                                        <td>Empty</td>
                                        <td>Empty</td>
                                        <td>Empty</td>
                                    </tr>
                            ))
                        }
                    </table>
                </div>
            }
            <div>
                <button className="add" onClick={onAccept}>Refresh</button>
            </div>
        </div>
    )
}
export default Appointment

