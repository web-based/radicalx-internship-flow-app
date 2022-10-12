import React from 'react'
import "./InternshipLists.css"

function InternshipLists() {
  return (
    <div className="tableLayout">
        <div className="colOne">
            <div className="colOneEle tableHeader">Internship Title</div>
        </div>
        <div className="colTwo">
            <div className="colTwoEle tableHeader">Completion Period</div>
        </div>
        <div className="colThree">
            <div className="colTwoEle tableHeader">Total Enrolled</div>
        </div>
        <div className="colFour">
            <div className="colFourEle tableHeader">Qualified Candidates</div>
        </div>
        <div className="colFive">
            <div className="colFiveEle tableHeader"></div>
        </div>
    </div> 
  );
}

export default InternshipLists
