import React from 'react'
import "./Dashboard.css";

// This component is for Slav
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
        <div className="int-insight-title-containter">
          <div>
            this week
          </div>
          <div>
            this month
          </div>
          <div>
            select date
          </div>
        
        </div>
      </div>
    </>
  );
}

export default InternInsight