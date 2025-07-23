import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar"
import Nutricion from './Components/Nutricion/Nutricion'
import MedicalForm from "./Components/MedicalForm/MedicalForm"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/nutricion" element={<Nutricion />} />
      <Route path="/medical-form" element={<MedicalForm />} />
    </Routes>
    </>
  )
}

export default App