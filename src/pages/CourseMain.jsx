import React from 'react';
import {Link} from 'react-router-dom'
import '../Styles/CourseMain.css';

import Course1 from '../assets/img/courses-1.jpg';
import Course2 from '../assets/img/courses-2.jpg';
import Course3 from '../assets/img/courses-3.jpg';
import Course4 from '../assets/img/courses-4.jpg';
import Course5 from '../assets/img/courses-5.jpg';
import Course6 from '../assets/img/courses-6.jpg';

const coursesData = [
  { id: 1, img: Course1, instructor: 'John Doe', rating: 4.5 },
  { id: 2, img: Course2, instructor: 'John Doe', rating: 4.5 },
  { id: 3, img: Course3, instructor: 'John Doe', rating: 4.5 },
  { id: 4, img: Course4, instructor: 'John Doe', rating: 4.5 },
  { id: 5, img: Course5, instructor: 'John Doe', rating: 4.5 },
  { id: 6, img: Course6, instructor: 'John Doe', rating: 4.5 },
];

const CourseCard = ({ img, instructor, rating }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div className="courses-item modern-card">
      <img className="img-fluid w-100" src={img} alt="Course" />
      <div className="courses-text">
        <h5 className="course-title">Web Dev Courses for Beginners</h5>
        <div className="course-meta">
          <span><i className="fa fa-user me-2"></i>{instructor}</span>
          <span><i className="fa fa-star me-2"></i>{rating} <small>(250)</small></span>
        </div>
        <Link className="btn-detail" to="/courses-Details">Course Detail</Link>

      </div>
    </div>
  </div>
);

const CoursesMain = () => {
  return (
    <section className="container-fluid px-2 py-4 bg-light">
      <div className="text-center mb-4">
        <h6 className="text-uppercase text-secondary">Our Courses</h6>
        <h2 className="fw-bold display-6">Check Out Our Newest Releases</h2>
      </div>

      <div className="row px-4">
        {coursesData.map((course) => (
          <CourseCard
            key={course.id}
            img={course.img}
            instructor={course.instructor}
            rating={course.rating}
          />
        ))}
      </div>

      {/* 30% Off Signup Form Section */}
      <div className="row justify-content-center bg-image mx-0 mb-5">
        <div className="col-lg-6 py-5">
          <div className="bg-white p-5 my-5">
            <h1 className="text-center mb-4">30% Off For New Students</h1>
            <form>
              <div className="form-row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ padding: "30px 20px" }} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ padding: "30px 20px" }} />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <select className="custom-select bg-light border-0 px-3" style={{ height: "60px" }}>
                      <option defaultValue>Select A course</option>
                      <option value="1">Course 1</option>
                      <option value="2">Course 2</option>
                      <option value="3">Course 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <button className="btn btn-primary btn-block" type="submit" style={{ height: "60px" }}>
                    Sign Up Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesMain;
