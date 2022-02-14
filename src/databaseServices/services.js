import { firebase } from '../Config/Firebase';



const saveDoctor = ((about, email, experience, name, patients, phone, profileImage, ratings, specialization, workingTime) => {
    firebase.firestore().collection("Doctors").add({
        About: about,
        Email: email,
        Experience: experience,
        Name: name,
        Patients: patients,
        Phone: phone,
        ProfileImage: profileImage,
        Ratings: ratings,
        Specialization: specialization,
        WorkingTime: workingTime

    }).then((docRef) => {
        console.log('Document successfully written with ID: ', docRef.id)
        alert("Docter has been added successfully")
    }).catch((error) => {
        console.error('Error adding document: ', error)
    })
})


const saveMedicalFascilities = ((name, longitude, latitude, image, allSpecialists, availabilty, address, about, category) => {
    firebase.firestore().collection("MedicalFascilities").add({
        name: name,
        longitude: longitude,
        latitude: latitude,
        image: image,
        allSpecialists: allSpecialists,
        availabilty: availabilty,
        address: address,
        about: about,
        category: category

    }).then((docRef) => {
        console.log('Document successfully written with ID: ', docRef.id)
        alert("Medical Fascility added successfully")
    }).catch((error) => {
        console.error('Error adding document: ', error)
    })
})


const getBookings = (() => {

    const email = firebase.auth().currentUser.email;
    console.log(email)
    firebase.firestore().collection('DoctorsAppointments').doc(email).collection('Bookings').onSnapshot((querySnapshot) => {
        const dis = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(dis)
        return dis;

    })


})

const deleteDoctors = () => {
    firebase.firestore().collection('Doctors').doc("").delete()
        .then(() => {
            console.log("Document Successfully deleted!");
            alert("You deleted a doctor from database!")
        }).catch((error) => {
            console.error("Error removing Document: ", error);
            alert("Could'nt delete a doctor from database!")

        })
}


const updateAppoitmentStatus = (doc, appoitnmentState) => {
    firebase.firestore().collection('DoctorsAppointments').doc(doc).update({
        Status: appoitnmentState
    })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        })
}

export {
    saveDoctor,
    saveMedicalFascilities,
    getBookings,
    deleteDoctors,
    updateAppoitmentStatus
}