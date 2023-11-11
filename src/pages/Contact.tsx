import React from 'react'; // Make sure to import React if you haven't already

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>
        Thank you for your interest in DaiSys Mongolia. We value your feedback, questions, and inquiries. Our dedicated team is here to assist you. Please choose the most suitable method of contact below, and we will respond promptly.
      </p>

      <h2>Contact Information:</h2>

      <ul>
        <li>
          <strong>General Inquiries:</strong> For general questions or information about our products and services, please email us at{' '}
          <a href="mailto:support@dms.com"><strong>support@dms.com</strong></a>.
        </li>
        <li>
          <strong>Customer Support:</strong> If you require assistance with a product you've purchased or need technical support, our customer support team is ready to help.
        </li>
        <li>
          <strong>Sales and Partnerships:</strong> If you're interested in partnering with us or wish to discuss sales opportunities, please reach out to our sales team at{' '}
          <a href="mailto:support@dms.com"><strong>support@dms.com</strong></a>.
        </li>
        <li>
          <strong>Media and Press Inquiries:</strong> Journalists and media professionals seeking information or interviews can contact our media relations team at{' '}
          <a href="mailto:support@dms.com"><strong>support@dms.com</strong></a>.
        </li>
      </ul>

      <h2>Business Hours:</h2>

      <p>
        Our office hours are [mention your business hours, e.g., Monday to Friday, 9:00 AM to 5:00 PM, local time]. We strive to respond to all inquiries within 24 hours during business days.
      </p>

      <h2>Visit Us:</h2>

      <address>
        <p>
          <strong>DaiSys Mongolia</strong>
        </p>
        <a   href="https://www.google.com/maps/place/47%C2%B955'05.6%22N+106%C2%B953'44.7%22E/@47.9181875,106.8951045,19z/data=!4m13!1m8!3m7!1s0x5d9692f803007be3:0xb7c8d53b5d05fd5b!2sBaigali+Palace,+Ulaanbaatar+16040!3b1!8m2!3d47.9181875!4d106.8957482!16s%2Fg%2F11b6ydz_mg!3m3!8m2!3d47.918212!4d106.895751?entry=ttu">
        <img src="map.jpg" alt="" width={600} height={300}>
</img>
        </a>
        
        <p>[S105, Baigal Ordon, Bayangol Dist-16, Ulaanbaatar, Mongolia]</p>
        <p>[Ulaanbaatar, Tuv, Zip 16080]</p>
      </address>

      <h2>Connect with Us:</h2>

      <p>
        Follow us on social media to stay updated with our latest news, product launches, and industry insights:
      </p>
      <ul className="social-media">
        <li>
          <a href="https://www.facebook.com/diasysmongolia"><strong>Facebook</strong></a>
        </li>
        <li>
          <a href="https://www.instagram.com/yourcompany"><strong>Instagram</strong></a>
        </li>
      </ul>

      <h2>Get in Touch:</h2>
      <p>
        We appreciate your interest in DaiSys Mongolia and look forward to hearing from you. Your feedback and inquiries are valuable to us as we strive to provide the best possible experience for our customers and partners.
      </p>
      {/* <!-- Add the Location Map here if applicable --> */}
    </div>
  );
};

export default Contact;
