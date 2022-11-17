import React from 'react'
import "./InternInsight.css";
import { BsCalendar4Week } from "react-icons/bs";
import graph from "./images/comparison-graph-piece.png";
import line from "./images/line.png";

function InternInsight() {
  return (
    <>
      <div className="int-insight-main-container">
        <div className="intern-insight-container">
          <h5>Internship Insights</h5>
          <p>
            In the eighteenth century the German philosopher Immanuel Kant
            developed a theory of knowledge in which knowledge about space can
            be both a priori and synthetic.
          </p>        
        </div>

        <div className="layout-and-graph-container">
        
          <div className="layout-container">
            <div className="this-week-container">This week</div>
            <div className="this-month-container">This month</div>
            <div className="select-dates-container">
              <div className="select-dates">
                <div className="calender-icon">
                  <BsCalendar4Week />
                </div>
                Select dates
              </div>
            </div>
          </div>

          <div className="graph-container">
              {/* <img className="image-class" src={graph}/> */}
              <img className="graph" src={graph}/>
              <img className="line1" src={line}/>              
              <img className="line2" src={line}/>            
              <img className="line3" src={line}/> 
              <img className="line4" src={line}/>
              <img className="line5" src={line}/>
              <img className="line6" src={line}/>
              <img className="line7" src={line}/>
          </div>

          <div className='label-container'>
                  <div className="label1">
                      <p>100,000</p>
                      <p className="sub-label">Total Enrollments</p>                  
                  </div>               
                  <div className="label2">
                      <p>65,000</p>   
                      <p className="sub-label">Completion</p>            
                  </div> 
                  <div className="label3">
                      <p>850</p> 
                      <p className="sub-label">Qualified Candidates</p>                
                  </div>
                  <div className="label4">
                      <p>375</p>       
                      <p className="sub-label">Reached Out</p>          
                  </div>
                  <div className="label5">
                      <p>300</p>  
                      <p className="sub-label">Interview Set</p>                
                  </div>
                  <div className="label6">
                      <p>150</p> 
                      <p className="sub-label">Candidates Hired</p>                 
                  </div>                
              </div>
         
        </div>
      </div>
    </>
  );
}

export default InternInsight