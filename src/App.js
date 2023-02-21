import React from "react";
// pages start
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateInternship from "./pages/CreateInternship";
import InternshipGuide from "./pages/InternshipGuide";
import Surveys from './pages/Surveys';
import Settings from './pages/Settings';
// pages end
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createInternship" element={<CreateInternship />} />
        <Route path="/internshipGuide" element={<InternshipGuide />} />
        <Route path="/surveys" element={<Surveys />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
