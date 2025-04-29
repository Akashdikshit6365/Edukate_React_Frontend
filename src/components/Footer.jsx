import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style={{ marginTop: '90px' }}>
        <div className="container mt-5 pt-5">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-6 mb-5">
              <Link to="/" className="navbar-brand">
                <h1 className="mt-n2 text-uppercase text-white">
                  <i className="fa fa-book-reader mr-3"></i>Edukate
                </h1>
              </Link>
              <p className="m-0">
                Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at et diam est, tempor rebum ipsum sit ea tempor stet et consetetur dolores.
                Justo stet diam ipsum lorem vero clita diam
              </p>
            </div>

            {/* Newsletter */}
            <div className="col-md-6 mb-5">
              <h3 className="text-white mb-4">Newsletter</h3>
              <div className="w-100">
                <div className="input-group">
                  <input type="text" className="form-control border-light" style={{ padding: '30px' }} placeholder="Your Email Address" />
                  <div className="input-group-append">
                    <button className="btn btn-primary px-4">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info and Links */}
          <div className="row">
            {/* Contact Info */}
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
              <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
              <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
              <div className="d-flex justify-content-start mt-4">
                <a className="text-white mr-4" href="#"><i className="fab fa-2x fa-twitter"></i></a>
                <a className="text-white mr-4" href="#"><i className="fab fa-2x fa-facebook-f"></i></a>
                <a className="text-white mr-4" href="#"><i className="fab fa-2x fa-linkedin-in"></i></a>
                <a className="text-white" href="#"><i className="fab fa-2x fa-instagram"></i></a>
              </div>
            </div>

            {/* Courses Links */}
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Our Courses</h3>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Web Design</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Apps Design</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Marketing</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Research</Link>
                <Link className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>SEO</Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Privacy Policy</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Terms & Condition</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Regular FAQs</Link>
                <Link className="text-white-50 mb-2" to="#"><i className="fa fa-angle-right mr-2"></i>Help & Support</Link>
                <Link className="text-white-50" to="#"><i className="fa fa-angle-right mr-2"></i>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container-fluid bg-dark text-white-50 border-top py-4" style={{ borderColor: 'rgba(256, 256, 256, .1) !important' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0">Copyright &copy; <Link className="text-white" to="#">Your Site Name</Link>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <p className="m-0">Designed by <Link className="text-white" to="https://htmlcodex.com">HTML Codex</Link> Distributed by <a href="https://themewagon.com" target="_blank" rel="noopener noreferrer">ThemeWagon</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
