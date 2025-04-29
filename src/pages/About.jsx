// About.jsx
import React from 'react';
import CommonHeader from '../components/CommanHeader'; // path according to where you saved CommonHeader
import AboutMain from './AboutMain';
import Feature from './Features';

const About = ({ showHeader = true }) => {
  return (
    <>
       {showHeader && (
        <CommonHeader title="About" currentPage="About" />
      )}
      <AboutMain />
      {/* <Feature/> */}
    </>
  );
};

export default About;
