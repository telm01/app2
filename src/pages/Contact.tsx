import React from 'react'; // Make sure to import React if you haven't already
import { Mail, Phone, MapPin, Clock } from "lucide-react";
const Contact = () => {
  return (
    <><div className="Compass"><p>/Contact Informantion/</p></div>
      
      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="header-description">
          Thank you for your interest in DaiSys Mongolia. We value your feedback, questions, and inquiries.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Information */}
        <div className="contact-info-section">
          <div>
            <h2 className="section-title">Contact Information</h2>
            <div className="info-items">
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h3>General Inquiries</h3>
                  <p>support@dms.com</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h3>Sales and Partnerships</h3>
                  <p>support@dms.com</p>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h3>Customer Support</h3>
                  <p>+976 (123) 456-789</p>
                </div>
              </div>

              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h3>Office</h3>
                  <p>
                    S105, Baigal Ordon, Bayangol Dist-16<br />
                    Ulaanbaatar, Mongolia<br />
                    Zip 16080
                  </p>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon" />
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="contact-card">
            <div className="card-header">
              <h3 className="card-title">Need Immediate Help?</h3>
              <p className="card-description">
                For urgent matters, please call our support line.
              </p>
            </div>
            <div className="card-content">
              <div className="card-buttons">
                <button className="card-button">
                  <Phone className="button-icon" />
                  Call Support: +976 (123) 911-HELP
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-card">
          <div className="card-header">
            <h3 className="card-title">Send us a Message</h3>
            <p className="card-description">Fill out the form below and we'll get back to you.</p>
          </div>
          <div className="card-content">
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="+976 (123) 456-789" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" placeholder="How can we help you?" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  className="message-input"
                  required />
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="newsletter" />
                <label htmlFor="newsletter">
                  I'd like to receive updates and newsletters
                </label>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <div className="contact-card">
          <div className="card-header">
            <h3 className="card-title">Find Us</h3>
            <p className="card-description">Visit our office or use the map below to get directions.</p>
          </div>
          <div className="card-content">
            <div className="map-container">
              <a href="https://www.google.com/maps/place/47%C2%B955'05.6%22N+106%C2%B953'44.7%22E/@47.9181875,106.8951045,19z/data=!4m13!1m8!3m7!1s0x5d9692f803007be3:0xb7c8d53b5d05fd5b!2sBaigali+Palace,+Ulaanbaatar+16040!3b1!8m2!3d47.9181875!4d106.8957482!16s%2Fg%2F11b6ydz_mg!3m3!8m2!3d47.918212!4d106.895751?entry=ttu" className="map-link">
                <img src="map.jpg" alt="DaiSys Mongolia Location" className="map-image" />
              </a>
              <p className="map-address">
                S105, Baigal Ordon, Bayangol Dist-16, Ulaanbaatar, Mongolia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="social-section">
        <h2 className="section-title">Connect with Us</h2>
        <p className="social-description">
          Follow us on social media to stay updated with our latest news and updates:
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com/diasysmongolia" className="social-link">Facebook</a>
          <a href="https://www.instagram.com/yourcompany" className="social-link">Instagram</a>
        </div>
      </div>
    </>
  );
};

export default Contact;
