import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
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
          <div className="contact-details">
            <div className="opening-hours">
              <h3>Opening Hours</h3>
              <ul>
                <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
