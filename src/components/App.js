import React from 'react'
import Signup from './Signup'
// import MainTitle from './MainTitle';
import Dashboard from './Dashboard';
import Internship from './Internship';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/internship" element={<Internship />}/>
        <Route path="#" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
