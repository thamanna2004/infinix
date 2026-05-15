import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
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

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");
  const { isLoggedIn, toggleAuthModal } = useAuth();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setMessage("");
    setTimeout(() => {
      setStatus("success");
      setMessage("Successfully Subscribed!");
      setEmail("");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 3000);
    }, 1500);
  };

  const handleLinkClick = (e, link, colHeading) => {
    const heading = colHeading.trim();
    
    if (heading === "Shop & Learn") {
      e.preventDefault();
      const targetId = link === "Store" ? "categories" : "products";
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (heading === "Account") {
      e.preventDefault();
      if (!isLoggedIn) {
        toggleAuthModal(true);
      } else {
        const element = document.getElementById("account");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (heading === "About Infinix") {
      e.preventDefault();
      if (link === "Contact Infinix") {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Prepare modal data based on link
        let modalData = { 
          type: 'info', 
          title: link, 
          eyebrow: 'About Infinix',
          content: '' 
        };
        
        if (link === "Career Opportunities") {
          modalData.type = 'careers';
        } else if (link === "Newsroom") {
          modalData.type = 'news';
        } else if (link === "Apple Leadership") {
          modalData.type = 'leadership';
        } else if (link === "Investors") {
          modalData.type = 'investors';
        } else if (link === "Ethics & Compliance") {
          modalData.content = "Our commitment to conducting business ethically and in compliance with the law. Infinix maintains high standards of integrity, transparency, and accountability in everything we do.";
        }

        window.dispatchEvent(new CustomEvent('openInfoModal', { detail: modalData }));
      }
    }
  };

  return (
    <footer className="footer" id="support">
      <div className="footer__newsletter">
        <div className="container">
          <div className="footer__newsletter-inner">
            <div className="footer__newsletter-text">
              <h3>Stay in the loop.</h3>
              <p>Get the latest on new products, features, and announcements.</p>
            </div>
            <div className="footer__newsletter-form-container">
              <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={`footer__newsletter-input ${status === 'error' ? 'error' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="footer__newsletter-btn" disabled={status === 'loading'}>
                  {status === 'loading' ? <span className="footer-spinner"></span> : "Subscribe"}
                </button>
              </form>
              {message && <p className={`footer__newsletter-message ${status}`}>{message}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {footerLinks.map((col) => (
              <div key={col.heading} className="footer__col">
                <h4 className="footer__col-heading">{col.heading}</h4>
                <ul className="footer__col-links">
                  {col.links.map((link) => {
                    let tooltip = "";
                    const heading = col.heading.trim();
                    if (heading === "About Infinix") {
                      if (link === "Newsroom") tooltip = "Latest company updates";
                      else if (link === "Apple Leadership") tooltip = "Meet the team";
                      else if (link === "Career Opportunities") tooltip = "Join Infinix";
                      else if (link === "Investors") tooltip = "Financial info";
                      else if (link === "Ethics & Compliance") tooltip = "Our values";
                      else if (link === "Contact Infinix") tooltip = "Get support";
                    }

                    return (
                      <li key={link}>
                        <a 
                          href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                          className="footer__link"
                          onClick={(e) => handleLinkClick(e, link, col.heading)}
                          data-tooltip={tooltip}
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divider" />
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
              <a 
                href="#" 
                className="footer__legal-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('openInfoModal', { 
                    detail: { 
                      type: 'info', 
                      title: 'Privacy Policy', 
                      eyebrow: 'Legal',
                      content: 'At Infinix, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information across our website and services. We implement industry-standard encryption and security measures to ensure your data remains private and secure.'
                    } 
                  }));
                }}
              >
                Privacy Policy
              </a>
              <span className="footer__legal-sep">|</span>
              <a 
                href="#" 
                className="footer__legal-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('openInfoModal', { 
                    detail: { 
                      type: 'info', 
                      title: 'Terms of Use', 
                      eyebrow: 'Legal',
                      content: 'By accessing the Infinix website, you agree to abide by our Terms of Use. These terms govern your use of our platform, content, and services. We reserve the right to update these terms at any time to reflect changes in our business or legal requirements.'
                    } 
                  }));
                }}
              >
                Terms of Use
              </a>
              <span className="footer__legal-sep">|</span>
              <a 
                href="#" 
                className="footer__legal-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('openInfoModal', { 
                    detail: { 
                      type: 'info', 
                      title: 'Sales Policy', 
                      eyebrow: 'Legal',
                      content: 'Our Sales Policy outlines the terms and conditions related to purchasing Infinix products. This includes information on pricing, shipping, taxes, and our commitment to providing genuine, high-quality Apple products.'
                    } 
                  }));
                }}
              >
                Sales Policy
              </a>
              <span className="footer__legal-sep">|</span>
              <a 
                href="#" 
                className="footer__legal-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('openInfoModal', { 
                    detail: { 
                      type: 'info', 
                      title: 'Accessibility', 
                      eyebrow: 'Legal',
                      content: 'Infinix is committed to ensuring our website is accessible to everyone, including individuals with disabilities. We continuously work to improve the user experience for all and apply the relevant accessibility standards.'
                    } 
                  }));
                }}
              >
                Accessibility
              </a>
            </nav>
            <div className="footer__social">
              <a 
                href="https://twitter.com/apple" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer__social-btn" 
                aria-label="Twitter" 
                id="social-twitter"
                data-tooltip="Follow on X"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/apple" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer__social-btn" 
                aria-label="Instagram" 
                id="social-instagram"
                data-tooltip="Follow on Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/apple" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer__social-btn" 
                aria-label="YouTube" 
                id="social-youtube"
                data-tooltip="Subscribe on YouTube"
              >
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
};

export default Footer;
