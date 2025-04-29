import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import course1 from '../assets/img/courses-1.jpg';
import course2 from '../assets/img/courses-4.jpg';
import course3 from '../assets/img/courses-3.jpg';
import course4 from '../assets/img/courses-4.jpg';
import course5 from '../assets/img/courses-5.jpg';
import course6 from '../assets/img/courses-6.jpg';
import courseDetail from '../assets/img/header.jpg'

const CourseDetail = () => {
  const relatedCourses = [
    {
      id: 1,
      title: "Web design & development courses for beginners",
      image: course1,
      instructor: "John Doe",
      rating: 4.5,
      reviews: 250,
    },
    {
      id: 2,
      title: "Advanced React and Redux",
      image: course2,
      instructor: "Jane Smith",
      rating: 4.7,
      reviews: 300,
    },
    {
      id: 3,
      title: "JavaScript Essentials",
      image: course3,
      instructor: "Jim Brown",
      rating: 4.6,
      reviews: 200,
    },
  ];

  const recentCourses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      instructor: "Alice Walker",
      rating: 4.8,
      reviews: 100,
    },
    {
      id: 2,
      title: "Node.js for Beginners",
      instructor: "Bob Green",
      rating: 4.3,
      reviews: 150,
    },
  ];

  const categories = [
    { name: "Web Design", count: 150 },
    { name: "Web Development", count: 131 },
    { name: "Online Marketing", count: 78 },
    { name: "Keyword Research", count: 56 },
    { name: "Email Marketing", count: 98 },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid py-5 fade-in">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-5">
              <div className="section-title position-relative mb-5">
                <h6 className="text-secondary text-uppercase pb-2 border-bottom border-secondary d-inline-block">
                  Course Detail
                </h6>
                <h1 className="display-4 fw-bold">
                  Web design & development courses for beginners
                </h1>
              </div>
              <img
                className="img-fluid rounded w-100 mb-4 shadow-sm"
                src={courseDetail}
                alt="Course Header"
              />
              <p className="text-muted">
                Tempor erat elitr at rebum at at clita aliquyam consetetur...
              </p>
            </div>

            <h2 className="mb-4">Related Courses</h2>
            <Slider {...carouselSettings}>
              {relatedCourses.map((course) => (
                <div key={course.id} className="px-2">
                  <a className="d-block text-white rounded overflow-hidden shadow-sm hover-zoom" href="detail.html">
                    <img className="img-fluid" src={course.image} alt={course.title} />
                    <div className="p-3">
                      <h5 className="mb-2">{course.title}</h5>
                      <div className="d-flex justify-content-between">
                        <small><i className="fa fa-user me-2"></i>{course.instructor}</small>
                        <small><i className="fa fa-star me-1 text-warning"></i>{course.rating} ({course.reviews})</small>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </Slider>
          </div>

          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="bg-primary text-white rounded shadow-sm mb-5">
              <h3 className="py-3 px-4 m-0 border-bottom">Course Features</h3>
              <div className="px-4 py-2">
                {[
                  ["Instructor", "John Doe"],
                  ["Rating", "4.5 (250)"],
                  ["Lectures", "15"],
                  ["Duration", "10.00 Hrs"],
                  ["Skill level", "All Level"],
                  ["Language", "English"],
                ].map(([key, value], idx) => (
                  <div key={idx} className="d-flex justify-content-between border-bottom py-2">
                    <span>{key}</span><span>{value}</span>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3">
                <h5>Course Price: $199</h5>
                <a className="btn btn-light w-100 mt-2" href="">Enroll Now</a>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="mb-3">Categories</h3>
              <ul className="list-group">
                {categories.map((cat, idx) => (
                  <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" className="text-decoration-none text-dark">{cat.name}</a>
                    <span className="badge bg-primary rounded-pill">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-5">
              <h3 className="mb-4">Recent Courses</h3>
              {recentCourses.map((course, idx) => (
                <a key={idx} className="d-flex align-items-center text-decoration-none mb-3 p-2 rounded bg-light shadow-sm hover-zoom" href="#">
                  <img className="img-fluid rounded" src={course6} alt="Recent" width="60" />
                  <div className="ms-3">
                    <h6 className="mb-1 text-dark">{course.title}</h6>
                    <div className="d-flex small text-muted">
                      <span className="me-3"><i className="fa fa-user text-primary me-1"></i>{course.instructor}</span>
                      <span><i className="fa fa-star text-warning me-1"></i>{course.rating} ({course.reviews})</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;