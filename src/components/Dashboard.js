import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import Sidebar from "./sidebar.js";
import './Dashboard.css'

const Dashboard = props => {
   

    return (
        <>
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                    </Col> 
                </Row>

            </Container>
        </>
        );
  };

  export default Dashboard