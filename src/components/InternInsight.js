import React from 'react'
import "./Dashboard.css";
import { BsCalendar4Week } from "react-icons/bs";
// This component is for Slav
function InternInsight() {
  return (
    <>
      <div className="int-insight-main-container">
        <div className="intern-insight-container">
          <h5>Internship Insights.</h5>
          <p>
            In the eighteenth century the German philosopher Immanuel Kant
            developed a theory of knowledge in which knowledge about space can
            be both a priori and synthetic.
          </p>
        </div>
        <div className="layout-container">
          <div className="this-week-container">This week</div>
          <div className="this-month-container">This month</div>
          <div className="select-dates-container">
            <div className="calender-icon">
              <BsCalendar4Week />
            </div>
            Select dates
          </div>
        </div>
      </div>
    </>
  );
}

export default InternInsight