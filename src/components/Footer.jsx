import '../styles/Footer.css';

import Logo from '../assets/Logo';
import TwitterLogo from '../assets/TwitterLogo.svg';
import Linkedin from '../assets/Linkedin.svg';
import Pinterest from '../assets/Pinterest.svg';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <Logo />
        <div className="footer-social-icons">
          <a
            href="https://twitter.com/dragonlaye22848"
            target="_blank"
            rel="noopener noreferrer">
            <img src={TwitterLogo} width="20" height="20" alt="Twitter" />
          </a>
          <a
            href="https://t.me/DragonlayerAI"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Pinterest} alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/company/dragonlayer-protocol/about/"
            target="_blank"
            rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-link-column">
          <h4 className="footer-column-title">Product</h4>
          <a className="footer-link" href="/#">
            Features
          </a>
          <a className="footer-link" href="/#">
            FAQ
          </a>
          <a className="footer-link" href="/#">
            Pricing
          </a>
        </div>

        <div className="footer-link-column">
          <h4 className="footer-column-title">Company</h4>
          <a className="footer-link" href="/#">
            About
          </a>
          <a className="footer-link" href="/#">
            Blog
          </a>
          <a className="footer-link" href="/#">
            Contact
          </a>
        </div>

        <div className="footer-link-column">
          <h4 className="footer-column-title">Resources</h4>
          <a className="footer-link" href="/#">
            Examples
          </a>
          <a className="footer-link" href="/#">
            Community
          </a>
        </div>

        <div className="footer-link-column">
          <h4 className="footer-column-title">Legal</h4>
          <a className="footer-link" href="/#">
            Privacy
          </a>
          <a className="footer-link" href="/#">
            Terms
          </a>
          <a className="footer-link" href="/#">
            Security
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
