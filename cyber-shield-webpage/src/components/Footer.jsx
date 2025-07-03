import React from 'react';
import '../styles/Footer.css'; // or use `Footer.module.css` if modular

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-section">
          <img src="/logo.png" alt="Logo" className="footer-logo" />
          <p className="footer-desc">
            The [NGO Name] is a non-profit organisation that strives to eliminate [cause] by [mission].
          </p>
          <div className="social-icons">
            <a href="https://instagram.com/cybershield.naksh"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/@nakshfoundation"><i className="fab fa-youtube"></i></a>
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
