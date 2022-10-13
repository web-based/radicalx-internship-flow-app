import React from 'react'
import InternInsight from './InternInsight';
import MainTitle from './MainTitle';
import Sidebar from './Sidebar'
import InternshipLists from './InternshipLists';

function Internship() {
  return (
    <>
      <div>
        <Sidebar />
        <MainTitle />
        <InternInsight />
        <InternshipLists />
      </div>
    </>
  );
}

export default Internship