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

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='SignUp' element={<SignUp />} />
        <Route path='Dashboard' element={<Dashboard />} />
        <Route path='Appointment' element={<Appointment />} />
        <Route path='DoctorsForm' element={<DoctorsForm />} />
        <Route path='MedicalFascilities' element={<MedicalFascilities />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;



