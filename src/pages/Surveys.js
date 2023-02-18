import React from 'react'


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
          <div className="cell tableHeader border-right" id="5">
           
          </div>
          <div className="cell" id="6">
            <h4>Product Design GVI</h4>
            <p>
              Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
            </p>
          </div>
          <div className="cell" id="7">
            <h4>120 Days</h4>
            <p>(created on 10/29/22) </p>
          </div>
          <div className="cell" id="8">
            20,000
          </div>
          <div className="cell" id="9">
            120
            <img className="column-graph" alt="icon of graph"  />
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
          <div className="cell" id="11">
            <h4>Product Design GVI</h4>
            <p>
              Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
            </p>
          </div>
          <div className="cell" id="12">
            <h4>120 Days</h4>
            <p>(created on 10/29/22) </p>
          </div>
          <div className="cell" id="13">
            20,000
          </div>
          <div className="cell" id="14">
            120
            <img className="column-graph" alt="icon of graph"  />
          </div>
          <div className="cell" id="15">
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
          <div className="cell" id="16">
            <h4>Product Design GVI</h4>
            <p>
              Amet minim mollit non deserunt est sit aliqua dolor do amet sint.{" "}
            </p>
          </div>
          <div className="cell" id="17">
            <h4>120 Days</h4>
            <p>(created on 10/29/22) </p>
          </div>
          <div className="cell" id="18">
            20,000
          </div>
          <div className="cell" id="19">
            120
            <img className="column-graph" alt="icon of graph" />
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
          <div className="cell" id="22">
            <h4>120 Days</h4>
            <p>(created on 10/29/22) </p>
          </div>
          <div className="cell" id="23">
            20,000
          </div>
          <div className="cell" id="24">
            120
            <img className="column-graph" alt="icon of graph"  />
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