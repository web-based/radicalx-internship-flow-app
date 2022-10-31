import React from "react";
import { Nav } from "react-bootstrap";
import "./Dashboard.css";
import "./App.css";
import { TbLayoutDashboard } from "react-icons/tb";
import { TbAward } from "react-icons/tb";
import { VscBook } from "react-icons/vsc";
import { BsBriefcase } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import logo from "./images/RadicallX-Black-Logo.png"
import profile from "./images/radical_circle_logo.jpeg";

function Sidebar() {
  return (
    <>
      <div className="sideBarCode">
        <Nav activeKey="/home">
          <div className="sidebar-sticky">
            <div className="sidebar-container">
              <div className="link-style">
                <div className="sidebar-logo">
                  <img className="image-class" src={logo} alt="radicalX-logo" />
                </div>
                <Nav.Item>
                  <TbLayoutDashboard />
                  <Nav.Link href="#">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <TbAward />
                  <Nav.Link eventKey="#">Apprenticeships</Nav.Link>
                </Nav.Item>
                <Nav.Item className="active-link">
                  <VscBook />
                  <Nav.Link href="/internship">
                    Internships
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <BsBriefcase />
                  <Nav.Link eventKey="#">Jobs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <BsGear />
                  <Nav.Link eventKey="#">Settings</Nav.Link>
                </Nav.Item>
                <div className="profile-section">
                  <Nav.Item>
                    <img
                      className="profile-picture"
                      this
                      will
                      be
                      modified
                      later
                      src={profile}
                      alt="radicalX-circle-logo"
                    />
                    <Nav.Link eventKey="#">Profile</Nav.Link>
                  </Nav.Item>
                </div>
              </div>
            </div>
          </div>
        </Nav>
      </div>
    </>
  );
}

export default Sidebar;
