import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import Appointment from './Components/Appointment';
import DoctorsForm from './Components/DoctorsForm';
import getBookings from './databaseServices/services'
import MedicalFascilities from './Components/MedicalFascilities';
import UpdateStatus from './Components/UpdateStatus';
import ResetPassword from './Components/ResetPassword';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<LogIn />} />
        <Route path='SignUp' element={<SignUp />} />
        <Route path='ResetPassword' element={<ResetPassword />} />
        <Route path='Dashboard' element={<Dashboard />} /> */}
        <Route path='/' element={<Appointment />} />
        <Route path='DoctorsForm' element={<DoctorsForm />} />
        <Route path='MedicalFascilities' element={<MedicalFascilities />} />
        <Route path='UpdateStatus' element={<UpdateStatus />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;



