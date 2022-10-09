import React from 'react'
// import Dashboard from './Dashboard';
import Signup from './Signup';
import Internship from './Internship';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/internship" element={<Internship />} />
      </Routes>
    </Router>
  );
   
}

export default App;
