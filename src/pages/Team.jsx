import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import your common header
import CommonHeader from '../components/CommanHeader';

// Import images
import instructor1 from '../assets/img/team-1.jpg';
import instructor2 from '../assets/img/team-2.jpg';
import instructor3 from '../assets/img/team-3.jpg';
import instructor4 from '../assets/img/team-4.jpg';

const instructors = [
  { name: "John Doe", role: "Web Design & Development", img: instructor1 },
  { name: "Jane Smith", role: "Full Stack Developer", img: instructor2 },
  { name: "Mike Johnson", role: "UI/UX Specialist", img: instructor3 },
  { name: "Emily Davis", role: "Backend Developer", img: instructor4 },
];

const Instructors = ({ showHeader = true }) => {
  return (
    <>
      {showHeader && (
        <CommonHeader title="Instructors" currentPage="Instructors" />
      )}

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="section-title text-center position-relative mb-5">
            <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
              Instructors
            </h6>
            <h1 className="display-4">Meet Our Instructors</h1>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {instructors.map((instructor, index) => (
              <SwiperSlide key={index}>
                <div className="team-item rounded overflow-hidden shadow-sm">
                  <img
                    className="img-fluid w-100"
                    src={instructor.img}
                    alt={instructor.name}
                  />
                  <div className="bg-light text-center p-4">
                    <h5 className="mb-1">{instructor.name}</h5>
                    <small className="text-muted">{instructor.role}</small>
                    <div className="d-flex justify-content-center mt-3">
                      {['twitter', 'facebook-f', 'linkedin-in', 'instagram', 'youtube'].map((platform, idx) => (
                        <a key={idx} className="btn btn-square mx-1" href="#">
                          <i className={`fab fa-${platform}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Instructors;
