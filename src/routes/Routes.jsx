import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Course from '../pages/Course';
import Feature from '../pages/Feature';
import Team from '../pages/Team';
import Testimonial from '../pages/Testimonial';
import Detail from '../pages/Detail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/course" element={<Course />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/team" element={<Team />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default AppRoutes;
