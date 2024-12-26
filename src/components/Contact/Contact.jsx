import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
      <div className="open-hours">
        <h3>Opening Hours</h3>
        <p>
          <span>Monday - Friday:</span> 9:00 AM - 5:00 PM
        </p>
        <p>
          <span>Saturday:</span> 10:00 AM - 4:00 PM
        </p>
        <p>
          <span>Sunday:</span> Closed
        </p>
      </div>
      <div className="address">
        <h3>Our Address</h3>
        <p>123 Barber Street, Barbershop City, BS1234</p>
      </div>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@barbershop.com</p>
      </div>
    </section>
  );
};

export default Contact;
