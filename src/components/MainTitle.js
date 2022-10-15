import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import "./btn.css" 
import "./App.css";

function MainTitle() {
  return (

    <Container>      
      <Row className="main-title-row">
        <Col md={{ span: 7, offset: 2 }} > 
          <h4>
            Internship
          </h4>
        </Col>
        <Col >
          <Button className="home-title-btn" size="sm">
            + Create New Internship
          </Button>
        </Col>
      </Row>
    </Container>


  )
}

export default MainTitle