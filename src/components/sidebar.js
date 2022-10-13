import React from "react";
import { Nav } from "react-bootstrap";
import './Dashboard.css'
import { TbLayoutDashboard } from "react-icons/tb"
import { TbAward } from 'react-icons/tb'
import { VscBook } from "react-icons/vsc"
import { BsBriefcase } from "react-icons/bs"
import { BsGear } from "react-icons/bs"
import rad_logo from './images/RadicallX-Black-Logo.png'

function Sidebar () {
    return (
        <>            
            <div className="sideBarCode">
                <Nav
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <div className="sidebar-sticky">
                        <div className="sidebar-container">
                            <div className="link-style">
                                <div className="sidebar-logo" >
                                    <img className="image-class" src={rad_logo} alt="radicalX-logo"/>
                                </div>
                                <Nav.Item>
                                    <Nav.Link href="/home"><TbLayoutDashboard/>Dashboard</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1"><TbAward/>Apprenticeships</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href = "/internship"><VscBook/>Internships</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-3"><BsBriefcase/>Jobs</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-4"><BsGear/>Settings</Nav.Link>
                                </Nav.Item>
                            </div> 
                        </div>
                    </div>  

                </Nav>
            </div>
        </>
        );
  };

  export default Sidebar