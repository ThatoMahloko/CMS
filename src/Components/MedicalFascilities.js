import React, { useState } from 'react';
import { saveMedicalFascilities} from '../databaseServices/services';
import { Link } from 'react-router-dom';

function MedicalFascilities() {

    const [name, setName] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [image, seImage] = useState("")
    const [allSpecialists, setAllSpecialitst] = useState("")
    const [availabilty, setAvailabilty] = useState("")
    const [address, setAddres] = useState("")
    const [about, setAbout] = useState("")
    const [category, setCategory] = useState("")
    const [ratings, setRatings] = useState("")

    const createDoctor = () => {
        if (name === "" && longitude === "" && latitude === "" && image === "" && allSpecialists === "" && availabilty === "" && address === "" && about === "" && category === "") {
            alert("Please complete the form")
        } else {
            saveMedicalFascilities(name, longitude, latitude, image, allSpecialists, availabilty, address, about, category)

        }
    }

    return (
        <div>
            <div className="header">
                <h1 className="heading">CyberPharm</h1>
                <div className="screens">
                    <Link to="/Dashboard" className="dashboard">Dashboard</Link>
                    <Link to="/Appointment" className="appt">Appointment</Link>
                    <Link to="/DoctorsForm" className="doctorsForm">DoctorsForm</Link>
                </div>
            </div>
            <p className="text2">Edit Fascility Information</p>
            <h5 className="di">Fascility Image*</h5>
            <div className="info">
                <div style={{ display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16" style={{ marginLeft: "40px" }}>
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                    </svg>
                    <form className="input">
                        <label style={{ marginLeft: '-40px' }}>
                            <h5>Name*</h5>
                            <input type="text" className="block" onChange={(v) => setName(v.target.value)} />
                        </label>
                    </form>
                    <form className="input">
                    <label>
                        <h5>Address*</h5>
                        <input type="text" className="block" onChange={(v) => setAddres(v.target.value)} />
                    </label>
                        
                    </form>

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
                        <h5>All Specialists*</h5>
                        <input type="text" className="block" onChange={(v) => setAllSpecialitst(v.target.value)} />
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
                <form style={{ marginLeft: "200px", marginTop: "-85px" }}>
                    <label>
                        <h5>Ratings*</h5>
                        <input type="text" className="block" onChange={(v) => setRatings(v.target.value)} />
                    </label>
                </form>

            </div>
            <div className="info">
                <form style={{ marginLeft: "550px", marginTop: "10px" }}>
                <label >
                        <h5>About*</h5>
                        <input type="text" className="bio" onChange={(v) => setAbout(v.target.value)} />
                    </label>
                </form>

            </div>


            <button className="add" onClick={createDoctor}>Add</button>

        </div>
    )
}
export default MedicalFascilities;