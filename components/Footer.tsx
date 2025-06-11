import { FaFacebookF, FaSquareInstagram } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content-company">
          <img
            src="logo-white.png"
            alt="Company Logo"
            className="footer__content-company-logo"
          />
          <p className="footer__content-company-description">
            A faith-based, transformative rehabilitation center dedicated to
            restoring hope, rebuilding lives, and renewing purpose.
          </p>
        </div>
        <div className="footer__content-actions">
          <h4 className="footer__content-actions-title">What We Do</h4>
          <ul className="footer__content-actions-list">
            <li className="footer__content-actions-list-item">
              <span>Daily Structure And Support</span>
            </li>
            <li className="footer__content-actions-list-item">
              <span>Balanced Nutritious Meals</span>
            </li>
            <li className="footer__content-actions-list-item">
              <span>Mental Health Therapy </span>
            </li>
            <li className="footer__content-actions-list-item">
              <span>Professional Medical And Clinical Care</span>
            </li>
            <li className="footer__content-actions-list-item">
              <span>Spiritual Growth and Guidance </span>
            </li>
            <li className="footer__content-actions-list-item">
              <span>Skill Acquisition And Vocational Training</span>
            </li>
            <li className="footer__content-actions-list-item">
              <span>
                A Safe And Loving Environment To Enhance Wholeness And A Fresh
                Start
              </span>
            </li>
          </ul>
        </div>
        <div className="footer__content-socials">
          <h4 className="footer__content-socials-title">Follow Us</h4>
          <ul className="footer__content-socials-list">
            <li className="footer__content-socials-list-item">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </li>
            <li className="footer__content-socials-list-item">
              <a
                href="https://www.instagram.com/falrehabfoundation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
