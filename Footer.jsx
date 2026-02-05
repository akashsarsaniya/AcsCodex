import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AK Service</h3>
            <p>Digital Marketing Agency driven by Relationships & Results</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <a href="#seo">SEO</a>
            <a href="#ppc">PPC Marketing</a>
            <a href="#social">Social Media</a>
            <a href="#web-design">Web Design</a>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Phone: +91 9041314973</p>
            <p>Email: info@akservice.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2022 - AK Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

