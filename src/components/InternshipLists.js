import React from 'react';
import "./InternshipLists.css";
import "./App.css";
import "./Dashboard.css"
import graph from './images/graph.png';
import {BsArrowDownSquare, BsPerson} from "react-icons/bs";
import {VscGraph} from "react-icons/vsc";
import {TbCircles} from "react-icons/tb";
import {Table,Col} from "react-bootstrap";

function InternshipLists() {
  return (
    <container className="check3">
    <Table classname="check" responsive>
    <div className="tableLayout">
        <Col>
        <div className="colOne">
        <div className="colOneEle tableHeader border-left">Internship Title
          <div className="icon">
            <BsArrowDownSquare/>
          </div>
        </div>
        <div className="colOneEle">
          <div className="colOneTextBox">
            <div className="colOneMainText">Product Design GVI</div>
            <div className="colOneText">11</div>
          </div>
        </div>
        <div className="colOneEle">
          <div className="colOneTextBox">
            <div className="colOneMainText">Product Design GVI</div>
            <div className="colOneText">11</div>
          </div>
        </div>
        <div className="colOneEle">
          <div className="colOneTextBox">
            <div className="colOneMainText">Product Design GVI</div>
            <div className="colOneText">11</div>
          </div>
        </div>
        <div className="colOneEle">
          <div className="colOneTextBox">
            <div className="colOneMainText">Product Design GVI</div>
            <div className="colOneText">11</div>
          </div>
        </div>
        <div className="colOneEle border-left-bottom">
          <div className="colOneTextBox">
            <div className="colOneMainText">Product Design GVI</div>
            <div className="colOneText">11</div>
          </div>
        </div>
        </div>
        </Col>
        <Col>
        <div className="colTwo">
        <div className="colTwoEle tableHeader">
          Completion Period
          <div className="icon">
            <BsArrowDownSquare />
          </div>
        </div>
        <div className="colTwoEle">
          <div className="colTwoTextBox">
            <div className="colTwoDayText">120 days</div>
            <div className="colTwoText">(created on 10/14/22)</div>
          </div>
        </div>
        <div className="colTwoEle">
          <div className="colTwoTextBox">
            <div className="colTwoDayText">120 days</div>
            <div className="colTwoText">(created on 10/14/22)</div>
          </div>
        </div>
        <div className="colTwoEle">
          <div className="colTwoTextBox">
            <div className="colTwoDayText">120 days</div>
            <div className="colTwoText">(created on 10/14/22)</div>
          </div>
        </div>
        <div className="colTwoEle">
          <div className="colTwoTextBox">
            <div className="colTwoDayText">120 days</div>
            <div className="colTwoText">(created on 10/14/22)</div>
          </div>
        </div>
        <div className="colTwoEle">
          <div className="colTwoTextBox">
            <div className="colTwoDayText">120 days</div>
            <div className="colTwoText">(created on 10/14/22)</div>
          </div>
        </div>
      </div>
      </Col>
      <Col>
      <div className="colThree">
        <div className="colThreeEle tableHeader">
          Total Enrolled
          <div className="icon">
            <BsArrowDownSquare />
          </div>
        </div>
        <div className="colThreeEle">
          <div className="colThreeTextBox">
            <div className="colThreeText">20,000</div>
          </div>
        </div>
        <div className="colThreeEle">
          <div className="colThreeTextBox">
            <div className="colThreeText">20,000</div>
          </div>
        </div>
        <div className="colThreeEle">
          <div className="colThreeTextBox">
            <div className="colThreeText">20,000</div>
          </div>
        </div>
        <div className="colThreeEle">
          <div className="colThreeTextBox">
            <div className="colThreeText">20,000</div>
          </div>
        </div>
        <div className="colThreeEle">
          <div className="colThreeTextBox">
            <div className="colThreeText">20,000</div>
          </div>
        </div>
      </div>
      </Col>
      <Col>
      <div className="colFour">
        <div className="colFourEle tableHeader">
          Qualified Candidates
          <div className="icon">
            <BsArrowDownSquare />
          </div>{" "}
        </div>
        <div className="colFourEle">
          <div className="colFourBox">
            <div className="colFourTextBox">
              <div className="colFourText">120</div>
            </div>
            <img className="colFourGraph" alt="icon of graph" src={graph} />
          </div>
        </div>
        <div className="colFourEle">
          <div className="colFourBox">
            <div className="colFourTextBox">
              <div className="colFourText">120</div>
            </div>
            <img className="colFourGraph" alt="icon of graph" src={graph} />
          </div>
        </div>
        <div className="colFourEle">
          <div className="colFourBox">
            <div className="colFourTextBox">
              <div className="colFourText">120</div>
            </div>
            <img className="colFourGraph" alt="icon of graph" src={graph} />
          </div>
        </div>
        <div className="colFourEle">
          <div className="colFourBox">
            <div className="colFourTextBox">
              <div className="colFourText">120</div>
            </div>
            <img className="colFourGraph" alt="icon of graph" src={graph} />
          </div>
        </div>
        <div className="colFourEle">
          <div className="colFourBox">
            <div className="colFourTextBox">
              <div className="colFourText">120</div>
            </div>
            <img className="colFourGraph" alt="icon of graph" src={graph} />
          </div>
        </div>
      </div>
      </Col>
      <Col>
      <div className="colFive ">
        <div className="colFiveEle tableHeader border-right"></div>
        <div className="colFiveEle">
          <div className="colFiveIcon">
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
        <div className="colFiveEle">
          <div className="colFiveIcon">
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
        <div className="colFiveEle">
          <div className="colFiveIcon">
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
        <div className="colFiveEle">
          <div className="colFiveIcon">
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
        <div className="colFiveEle border-right-bottom">
          <div className="colFiveIcon">
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
      </Col>
     </div> 
     </Table>
    </container>  
  );
}

export default InternshipLists