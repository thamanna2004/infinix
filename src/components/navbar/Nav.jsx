import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import "./nav.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { toggleCart, totalItems } = useCart();
  const { isLoggedIn, user, logout, toggleAuthModal } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, { threshold: 0.3, rootMargin: "-52px 0px 0px 0px" });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 52,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#store" },
    { label: "Service", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav id="main-nav" className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" aria-label="Infinix Home" onClick={(e) => handleScrollTo(e, '#hero')}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>infinix</span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className={`navbar__link ${activeSection === link.href ? 'active' : ''}`}
                  onClick={(e) => handleScrollTo(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="navbar__actions">
            {isLoggedIn ? (
              <div className="navbar__user">
                <span 
                  className="navbar__user-avatar" 
                  onClick={(e) => handleScrollTo(e, '#account')}
                  style={{ cursor: 'pointer' }}
                >
                  {user?.avatar}
                </span>
                <button className="navbar__logout-btn" onClick={logout}>Sign Out</button>
              </div>
            ) : (
              <button className="navbar__login-btn" onClick={() => toggleAuthModal(true)}>Log in</button>
            )}
            <button className="navbar__icon-btn" aria-label="Search" id="search-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button className="navbar__icon-btn" aria-label="Shopping Bag" id="bag-btn" onClick={toggleCart} style={{ position: 'relative' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </button>
            <button
              className={`navbar__burger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              id="menu-btn"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <ul className="mobile-menu__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href} 
                className={`mobile-menu__link ${activeSection === link.href ? 'active' : ''}`} 
                onClick={(e) => handleScrollTo(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          {isLoggedIn ? (
            <li className="mobile-menu__user-li">
              <button className="mobile-menu__link" onClick={logout}>Sign Out ({user?.name})</button>
            </li>
          ) : (
            <li>
              <button className="mobile-menu__link" onClick={() => { toggleAuthModal(true); setMenuOpen(false); }}>Log in</button>
            </li>
          )}
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
