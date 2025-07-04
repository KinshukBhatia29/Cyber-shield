import React from 'react';
import '../styles/Footer.css'; // or use `Footer.module.css` if modular

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-section">
          <img src="/images/Logo.png" alt="Logo" className="footer-logo" />
          <p className="footer-desc">
            The [NGO Name] is a non-profit organisation that strives to eliminate [cause] by [mission].
          </p>
          <div className="social-icons">
            <a href="https://instagram.com/cybershield.naksh"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/@nakshfoundation"><i className="fab fa-youtube"></i></a>
        <img src='data:image/png;base64,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'></img>
          
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-links">
          <div>
            <h4>ABOUT US</h4>
            <ul>
              <li>About Us</li>
              <li>Vision & Mission</li>
              <li>Story of Hope</li>
              <li>Board of Trustees</li>
              <li>Tax Exemption</li>
              <li>Donation FAQs</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4>OUR WORK</h4>
            <ul>
              <li>Feeding For Education</li>
              <li>Mid-Day Meal</li>
              <li>Relief Feeding</li>
              <li>Research & Advocacy</li>
              <li>Beyond Meals</li>
            </ul>
          </div>

          <div>
            <h4>DONATE</h4>
            <ul>
              <li>Online Donations</li>
              <li>Sponsor a School</li>
              <li>Sponsor a Kitchen</li>
            </ul>
            <h4>GET IN TOUCH</h4>
            <ul><li>Contact Us</li></ul>
            <h4>GET INVOLVED</h4>
            <ul><li>Future Shaper</li></ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-newsletter">
          <h4>Subscribe E-newsletter</h4>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Id" />
          <input type="tel" placeholder="Mobile Number" />
          <button>SUBMIT</button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Charity Id: AAATT6468P</p>
        <p>&copy; The NGO Foundation 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
