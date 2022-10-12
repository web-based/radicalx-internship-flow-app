import React from "react";
import {Container, Row, Col, Card, Table } from "react-bootstrap";
import Sidebar from "./Sidebar.js";
//import Internship from "./Internship.js";
import './Dashboard.css';



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
            <Container>
           <Card>


      <h3 className="internshipInsightTitle">Internship Insights</h3>
      <p>This is about the Internship Insights</p></Card>

    
    </Container>
    <Container>
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
                    <Card.Body>
                    <Table hover className="user-table align-items-center">
                        <thead>
                            <tr>
                                <th className="border-bottom">Internship Title</th>
                                <th className="border-bottom">Completion Period</th>
                                <th className="border-bottom">Total Enrolled</th>
                                <th className="border-bottom">Qualified Candidates</th>
                    
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </Table>
                    </Card.Body>
                </Card>
            </Container>
        </>
        );
  };

  export default Dashboard