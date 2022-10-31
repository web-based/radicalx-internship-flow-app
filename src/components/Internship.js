import React from 'react'
import InternInsight from './InternInsight';
import MainTitle from './MainTitle';
import Sidebar from './Sidebar'
// import InternshipLists from './InternshipLists';
import InternshipTable from './internshipTable';

function Internship() {
  const arrOfObj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14, 15, 16, 17, 18, 19, 20 ];
 

  return (
    
    <>
      <div>
        <Sidebar />
        <MainTitle />
        <InternInsight />
        <InternshipTable arrOfObj={arrOfObj} />
        {/* <InternshipLists /> */}
      </div>
    </>
  );
}

export default Internship