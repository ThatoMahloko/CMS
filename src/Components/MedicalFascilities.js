import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../Config/Firebase'

function MedicalFascilities() {

    const [profile, setProfile] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
    const [name, setName] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [image, setImage] = useState("")
    const [allSpecialists, setAllSpecialitst] = useState("")
    const [availabilty, setAvailabilty] = useState("")
    const [address, setAddres] = useState("")
    const [about, setAbout] = useState("")
    const [category, setCategory] = useState("")
    const [ratings, setRatings] = useState("")
    const [branchCode, setBranchCode] = useState("")


    const saveMedicalFascilities = ((name, longitude, latitude, image, allSpecialists, availabilty, address, about, category, branchCode) => {
        console.log(name, longitude, latitude, image, allSpecialists, availabilty, address, about, category, branchCode)
        firebase.firestore().collection("MedicalFascilities").doc(branchCode).set({
            name: name,
            longitude: longitude,
            latitude: latitude,
            image: image,
            allSpecialists: allSpecialists,
            availabilty: availabilty,
            address: address,
            about: about,
            category: category,
            BranchCode: branchCode

        }).then((docRef) => {
            console.log('Document successfully written with ID: ', branchCode)
            alert("Medical Fascility added successfully")
        }).catch((error) => {
            console.error('Error adding document: ', error)
        })
    })
    const saveFascility = () => {
        if (name === "" && longitude === "" && latitude === "" && image === "" && allSpecialists === "" && availabilty === "" && address === "" && about === "" && category === "" && branchCode === "") {
            alert("Please complete the form")
        } else {
            saveMedicalFascilities(name, longitude, latitude, image, allSpecialists, availabilty, address, about, category, branchCode)

        }
    }

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfile(reader.result)
                setImage(reader.result)
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
                    <Link to="/UpdateStatus" className="appt">Update Status</Link>
                </div>
            </div>
            <p className="text2">Edit Fascility Information</p>
            <h5 className="di">Fascility Image*</h5>
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

                    <div className="info">
                        <form className="input2">
                            <label style={{ marginLeft: '0px', marginTop: "-80px" }}>
                                <h5>Name*</h5>
                                <input type="text" className="block" onChange={(v) => setName(v.target.value)} />
                            </label>
                        </form>
                        <form style={{ marginLeft: "200px", marginTop: "-350px" }} className="input">
                            <label>
                                <h5>All Specialists*</h5>
                                <input type="text" className="block" onChange={(v) => setAllSpecialitst(v.target.value)} />
                            </label>

                        </form>
                    </div>

                </div>

            </div>
            <div className="info">
                <form className="input2">
                    <label>
                        <h5>latitude*</h5>
                        <input type="text" className="block" onChange={(v) => setLatitude(v.target.value)} />
                    </label>
                </form>
                <form style={{ marginLeft: "200px", marginTop: "-265px" }}>
                    <label>
                        <h5>longitude*</h5>
                        <input type="text" className="block" onChange={(v) => setLongitude(v.target.value)} />
                    </label>
                </form>

            </div>
            <div className="info">
                <form style={{ marginLeft: "550px", marginTop: "-175px" }}>
                    <label>
                        <h5>Availablity*</h5>
                        <input type="text" className="block" onChange={(v) => setAvailabilty(v.target.value)} />
                    </label>
                </form>
                <form style={{ marginLeft: "200px", marginTop: "-175px" }}>
                    <label>
                        <h5>Address*</h5>
                        <input type="text" className="block" onChange={(v) => setAddres(v.target.value)} />
                    </label>
                </form>

            </div>
            <div className="info">
                <form style={{ marginLeft: "550px", marginTop: "-85px" }}>
                    <label>
                        <h5>Category*</h5>
                        <input type="text" className="block" onChange={(v) => setCategory(v.target.value)} />
                    </label>

                </form>
            </div>
            <div className="info">

                <form style={{ marginLeft: "550px", marginTop: "10px" }}>
                    <label>
                        <h5>About*</h5>
                        <input type="text" className="block" onChange={(v) => setAbout(v.target.value)} />
                    </label>
                </form>


            </div>


            <button className="add" onClick={saveFascility}>Add</button>

        </div>
    )
}
export default MedicalFascilities