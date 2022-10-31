import React from 'react'
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import './internshipTable.css';
import graph from './images/graph.png';
import { VscGraph } from "react-icons/vsc";
import { TbCircles } from "react-icons/tb";

import { BsArrowDownSquare, BsPerson } from "react-icons/bs";

function internshipTable() {
  return (
    <>
      <div className="int-container">
        <div className="grid">
          <div className="cell tableHeader border-left" id="1">
            <p>Internship Title</p>
            <div className="icon">
              <BsArrowDownSquare />
            </div>
          </div>
          <div className="cell tableHeader" id="2">
            <p>Completion Period</p>
            <div className="icon">
              <BsArrowDownSquare />
            </div>
          </div>
          <div className="cell tableHeader" id="3">
            <p>Total Enrolled</p>
            <div className="icon">
              <BsArrowDownSquare />
            </div>
          </div>
          <div className="cell tableHeader" id="4">
            <p>Qualified Candidates</p>
            <div className="icon">
              <BsArrowDownSquare />
            </div>
          </div>
          <div class="cell tableHeader border-right" id="5">
           
          </div>
          <div class="cell" id="6">
            <h4>Product Design GVI</h4>
            <p>
              Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
            </p>
          </div>
          <div class="cell" id="7">
            <h4>120 Days</h4>
            <p>(created on 10/29/22) </p>
          </div>
          <div class="cell" id="8">
            20,000
          </div>
          <div class="cell" id="9">
            120
            <img className="column-graph" alt="icon of graph" src={graph} />
          </div>
          <div class="cell" id="10">
            <div className="column-icons">
              <div className="icon">
                <VscGraph />
              </div>
              <div className="icon">
                <BsPerson />
              </div>
              <div className="icon">
                <TbCircles />
              </div>
            </div>
          </div>
          <div class="cell" id="11">
            <h4>Product Design GVI</h4>
            <p>
              Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
            </p>
          </div>
          <div class="cell" id="12">
            <h4>120 Days</h4>
            <p>(created on 10/29/22) </p>
          </div>
          <div class="cell" id="13">
            20,000
          </div>
          <div class="cell" id="14">
            120
            <img className="column-graph" alt="icon of graph" src={graph} />
          </div>
          <div class="cell" id="15">
            <div className="column-icons">
              <div className="icon">
                <VscGraph />
              </div>
              <div className="icon">
                <BsPerson />
              </div>
              <div className="icon">
                <TbCircles />
              </div>
            </div>
          </div>
          <div class="cell" id="16">
            <h4>Product Design GVI</h4>
            <p>
              Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
            </p>
          </div>
          <div class="cell" id="17">
            <h4>120 Days</h4>
            <p>(created on 10/29/22) </p>
          </div>
          <div class="cell" id="18">
            20,000
          </div>
          <div className="cell" id="19">
            120
            <img className="column-graph" alt="icon of graph" src={graph} />
          </div>
          <div className="cell" id="20">
            <div className="column-icons">
              <div className="icon">
                <VscGraph />
              </div>
              <div className="icon">
                <BsPerson />
              </div>
              <div className="icon">
                <TbCircles />
              </div>
            </div>
          </div>
          <div className="cell border-left-bottom" id="21">
            <h4>Product Design GVI</h4>
            <p>
              Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
            </p>
          </div>
          <div class="cell" id="22">
            <h4>120 Days</h4>
            <p>(created on 10/29/22) </p>
          </div>
          <div class="cell" id="23">
            20,000
          </div>
          <div class="cell" id="24">
            120
            <img className="column-graph" alt="icon of graph" src={graph} />
          </div>
          <div className="cell border-right-bottom" id="25">
            <div className="column-icons">
              <div className="icon">
                <VscGraph />
              </div>
              <div className="icon">
                <BsPerson />
              </div>
              <div className="icon">
                <TbCircles />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default internshipTable