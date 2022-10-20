import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import "./btn.css" 
import "./App.css";

function MainTitle() {
  return (
    <div className="main-title-row">
        <div className="internship-main-text">
          <h4>Internship</h4>
        </div>
        <div className="create-int-btn">
          <button className="home-title-btn">+ Create New Internship</button>
        </div>
      
    </div>
  );
}

export default MainTitle