import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import CommonHeader from '../components/CommanHeader'; // Adjust path if needed!
import '../Styles/Contact.css'

const Contact = ({ showHeader = true }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bif53ku', 'template_rn49pre', form.current, 'nh1tJ9JDUcQIrcZ0J')
      .then((result) => {
        console.log(result.text);
        toast.success('Message Sent Successfully!');
      }, (error) => {
        console.log(error.text);
        toast.error('Something went wrong!');
      });

    e.target.reset();
  };

  return (
    <>
      {showHeader && (
        <CommonHeader title="Contact" currentPage="Contact" />
      )}

      {/* Contact Section */}
      <div className="contact-container py-5">
        <div className="contact-wrapper py-5">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="contact-info d-flex flex-column justify-content-center px-5">
                <div className="contact-item d-flex align-items-center mb-5">
                  <div className="btn-icon bg-primary mr-4">
                    <i className="fa fa-2x fa-map-marker-alt text-white"></i>
                  </div>
                  <div className="mt-n1">
                    <h4>Our Location</h4>
                    <p className="m-0">123 Street, New York, USA</p>
                  </div>
                </div>
                <div className="contact-item d-flex align-items-center mb-5">
                  <div className="btn-icon bg-secondary mr-4">
                    <i className="fa fa-2x fa-phone-alt text-white"></i>
                  </div>
                  <div className="mt-n1">
                    <h4>Call Us</h4>
                    <p className="m-0">+012 345 6789</p>
                  </div>
                </div>
                <div className="contact-item d-flex align-items-center">
                  <div className="btn-icon bg-warning mr-4">
                    <i className="fa fa-2x fa-envelope text-white"></i>
                  </div>
                  <div className="mt-n1">
                    <h4>Email Us</h4>
                    <p className="m-0">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Need Help?</h6>
                <h1 className="display-4">Send Us A Message</h1>
              </div>
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-6 form-group">
                      <input type="text" className="form-control" id="name" name="user_name" placeholder="Your Name" required />
                    </div>
                    <div className="col-6 form-group">
                      <input type="email" className="form-control" id="email" name="user_email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Message" id="message" name="message" rows="5" required></textarea>
                  </div>
                  <div>
                    <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Section */}
    </>
  );
};

export default Contact;
