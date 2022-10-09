import React from "react";
import {Nav} from "react-bootstrap";
import './Dashboard.css'

const Sidebar = props => {
    return (
        <>            
            <div className="sideBarCode">
                <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <div className="sidebar-sticky">
                    <div className="link-style">
                    <Nav.Item>
                        <Nav.Link href="/home">Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Apprenticeships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Internships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Jobs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4">Settings</Nav.Link>
                    </Nav.Item>
                     </div> 
                </div>

                </Nav>
            </div>
        </>
        );
  };

  export default Sidebar