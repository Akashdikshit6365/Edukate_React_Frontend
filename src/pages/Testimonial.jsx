import React from 'react';
import Slider from 'react-slick';
import CommonHeader from '../components/CommanHeader';

import testimonial1 from '../assets/img/testimonial-1.jpg';
import testimonial2 from '../assets/img/testimonial-2.jpg';
import testimonial3 from '../assets/img/team-4.jpg';

const testimonials = [
  {
    id: 1,
    text: 'Edukate helped me land my dream job! The courses are very practical and the instructors are awesome.',
    name: 'Student Name',
    role: 'Web Developer',
    img: testimonial1
  },
  {
    id: 2,
    text: 'Very professional courses and great support whenever you need it. Highly recommend Edukate!',
    name: 'Student Name',
    role: 'Designer',
    img: testimonial2
  },
  {
    id: 3,
    text: 'Loved the flexibility of learning at my own pace. The quality of content is excellent.',
    name: 'Student Name',
    role: 'Marketing Specialist',
    img: testimonial3
  }
];

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

const Testimonial = ({ showHeader = true }) => {
  return (
    <>
      {showHeader && (
        <CommonHeader title="testimonials" currentPage="testimonials" />
      )}
      {/* Testimonial Section Start */}
      <div
        className="container-fluid bg-image py-5"
        style={{ margin: '90px 0' }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Testimonial
                </h6>
                <h1 className="display-4">What Say Our Students</h1>
              </div>
              <p className="m-0">
                Dolor est dolores et nonumy sit labore dolores est sed rebum
                amet, justo duo ipsum sanctus dolore magna rebum sit et. Diam
                lorem ea sea at. Nonumy et at at sed justo est nonumy tempor.
                Vero sea ea eirmod, elitr ea amet diam ipsum at amet. Erat sed
                stet eos ipsum diam.
              </p>
            </div>

            {/* Right Column - Carousel */}
            <div className="col-lg-7">
              <Slider {...sliderSettings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="p-3">
                    <div className="bg-white p-5 rounded shadow-sm">
                      <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                      <p className="mb-4">"{testimonial.text}"</p>
                      <div className="d-flex align-items-center mt-4">
                        <img
                          className="img-fluid rounded-circle mr-3"
                          src={testimonial.img}
                          alt={testimonial.name}
                          style={{ width: '55px', height: '55px', objectFit: 'cover' }}
                        />
                        <div>
                          <h5 className="mb-1">{testimonial.name}</h5>
                          <span>{testimonial.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Section End */}
    </>
  );
};

export default Testimonial;
