import React from 'react';
import { Link } from 'react-router-dom';

// Importing images from src/assets/img folder
import CourseHeader from './CourseHeader';
import CourseMain from './CourseMain';

const Course = ({ showHeader = true }) => {
 

  return (
    <>
    <CourseHeader/>
    <CourseMain/>
    </>
  );
};

export default Course;
