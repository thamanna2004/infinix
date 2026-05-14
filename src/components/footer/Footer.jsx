import React from "react";
import "./footer.css";

const footerLinks = [
  {
    heading: "Shop & Learn",
    links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home"],
  },
  {
    heading: "Services",
    links: ["Apple Music", "Apple TV+", "Apple Arcade", "iCloud", "Apple Books", "Apple Podcasts"],
  },
  {
    heading: "Account",
    links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
  },
  {
    heading: "About Infinix",
    links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Contact Infinix"],
  },
];

const Footer = () => (
  <footer className="footer" id="support">
    {/* Newsletter Banner */}
    <div className="footer__newsletter">
      <div className="container">
        <div className="footer__newsletter-inner">
          <div className="footer__newsletter-text">
            <h3>Stay in the loop.</h3>
            <p>Get the latest on new products, features, and announcements.</p>
          </div>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="footer__newsletter-input"
              id="newsletter-email"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="footer__newsletter-btn" id="newsletter-submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="divider" />

    {/* Main Footer Links */}
    <div className="footer__main">
      <div className="container">
        <div className="footer__grid">
          {footerLinks.map((col) => (
            <div key={col.heading} className="footer__col">
              <h4 className="footer__col-heading">{col.heading}</h4>
              <ul className="footer__col-links">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="divider" />

    {/* Bottom Bar */}
    <div className="footer__bottom">
      <div className="container">
        <div className="footer__bottom-inner">
          <div className="footer__logo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span>Copyright © 2025 Infinix Inc. All rights reserved.</span>
          </div>

          <nav className="footer__legal-links" aria-label="Legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <span className="footer__legal-sep">|</span>
            <a href="#" className="footer__legal-link">Terms of Use</a>
            <span className="footer__legal-sep">|</span>
            <a href="#" className="footer__legal-link">Sales Policy</a>
            <span className="footer__legal-sep">|</span>
            <a href="#" className="footer__legal-link">Accessibility</a>
          </nav>

          <div className="footer__social">
            <a href="#" className="footer__social-btn" aria-label="Twitter" id="social-twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="footer__social-btn" aria-label="Instagram" id="social-instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="footer__social-btn" aria-label="YouTube" id="social-youtube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
