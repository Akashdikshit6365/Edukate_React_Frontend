import React from 'react';
import Courses from '../pages/Courses';
import Team from '../pages/Team';
import Testimonials from '../pages/Testimonial';
import Features from '../pages/Features';
import AboutMain from './AboutMain';
import CourseMain from './CourseMain';
import Contact from './Contact';
import About from './About';
import Header from '../components/Header'



const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Header/>

      {/* Sections */}
     <About showHeader={false}/>
      <CourseMain showHeader={false}/>
      <Team showHeader={false}/>
      <Testimonials showHeader={false}/>
      <Features showHeader={false}/>
      <Contact showHeader={false}/>
    </>
  );
};

export default Home;
