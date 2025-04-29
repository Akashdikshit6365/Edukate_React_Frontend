import React from 'react';
import aboutImage from '../assets/img/about.jpg';
import '../Styles/AboutMain.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  return (
    <div className="about-section">
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            {/* Image */}
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '500px' }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={aboutImage}
                  alt="About Us"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">About Us</h6>
                <h1 className="display-4">First Choice For Online Education Anywhere</h1>
              </div>
              <p>
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit...
              </p>
              <div className="row pt-3 mx-0">
                {/* Counter Boxes */}
                <CounterBox end={123} label="Available Subjects" bgColor="bg-success" />
                <CounterBox end={1234} label="Online Courses" bgColor="bg-primary" />
                <CounterBox end={123} label="Skilled Instructors" bgColor="bg-secondary" />
                <CounterBox end={1234} label="Happy Students" bgColor="bg-warning" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Counter Box with animation
const CounterBox = ({ end, label, bgColor }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="col-6 col-md-3 px-0" ref={ref}>
      <div className={`text-center p-4 ${bgColor}`}>
        <h1 className="text-white">
          {inView && <CountUp start={0} end={end} duration={2} />}
        </h1>
        <h6 className="text-uppercase text-white">{label}</h6>
      </div>
    </div>
  );
};

export default About;
