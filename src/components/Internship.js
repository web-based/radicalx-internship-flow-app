import React from 'react'
import InternInsight from './InternInsight';
import MainTitle from './MainTitle';
import Sidebar from './Sidebar'
import InternshipLists from './InternshipLists';

function Internship() {
  return (
    <>
      <MainTitle />
      <Sidebar />
      <InternInsight />
      <InternshipLists />

    </>
  );
}

export default Internship