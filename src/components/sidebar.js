import React from "react";
import { Nav } from "react-bootstrap";
import './Dashboard.css'
import { TbLayoutDashboard } from "react-icons/tb"
import { TbAward } from 'react-icons/tb'
import { VscBook } from "react-icons/vsc"
import { BsBriefcase } from "react-icons/bs"
import { BsGear } from "react-icons/bs"

function Sidebar () {
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
                        <Nav.Link href="/home"><TbLayoutDashboard/>Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><TbAward/>Apprenticeships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2"><VscBook/>Internships</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3"><BsBriefcase/>Jobs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-4"><BsGear/>Settings</Nav.Link>
                    </Nav.Item>
                     </div> 
                </div>

                </Nav>
            </div>
        </>
        );
  };

  export default Sidebar