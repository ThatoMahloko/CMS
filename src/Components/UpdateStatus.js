import React from 'react';
import { db, firebase } from '../Config/Firebase';

imp
function UpdateStatus(props) {
    const email = firebase.auth().currentUser.email
    const onUpdate = (status) => {
        db.collection('DoctorsAppointments').doc(email).collection('Bookings').doc(props.doctorID).update({
            Status: status
        })
    }

    return (
        <button className="add" onClick={onUpdate}>UpdateStatus</button>
    )
}

export const onUpdate = onUpdate()

export default UpdateStatus