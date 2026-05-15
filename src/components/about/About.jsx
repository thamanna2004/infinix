import React, { useEffect, useRef, useState } from 'react';
import './about.css';

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '5000+', label: 'Products Sold' },
  { value: '24/7', label: 'Expert Support' },
  { value: '100%', label: 'Genuine Products' }
];

const features = [
  {
    title: 'Trusted & Reliable',
    desc: 'We are committed to providing genuine Apple products with complete trust and transparency.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    )
  },
  {
    title: 'Innovation Guaranteed',
    desc: 'Experience the latest Apple technology with innovative solutions designed for you.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    )
  },
  {
    title: 'Customer Satisfaction',
    desc: 'Our customers are at the heart of everything we do. Your satisfaction is our top priority.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )
  },
  {
    title: 'Always Here for You',
    desc: 'We believe in building lasting relationships and supporting you every step of the way.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        
        {/* Top Intro Area */}
        <div className={`about__intro ${isVisible ? 'fade-up' : 'hidden'}`}>
          <div className="about__intro-text">
            <span className="eyebrow">About Infinix</span>
            <h2 className="about__title">Redefining the<br/>ecommerce experience.</h2>
            <p className="about__desc">
              We believe that shopping for your favorite Apple products should be as magical as the products themselves. 
              Infinix provides a curated, premium, and trustworthy environment for technology enthusiasts worldwide.
            </p>
          </div>
          <div className="about__intro-visual">
            <div className="about__collage">
              <div className="collage-item collage-item--1">
                <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop" alt="iPhone" />
              </div>
              <div className="collage-item collage-item--2">
                <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop" alt="MacBook" />
              </div>
              <div className="collage-item collage-item--3">
                <img src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800&auto=format&fit=crop" alt="Apple Watch" />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Strip */}
        <div className={`about__stats ${isVisible ? 'fade-up delay-1' : 'hidden'}`}>
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <h3 className="stat-card__value">{stat.value}</h3>
              <p className="stat-card__label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className={`about__features ${isVisible ? 'fade-up delay-2' : 'hidden'}`}>
          <div className="about__features-header text-center">
            <h3 className="about__features-title">Why Choose Us</h3>
            <p className="about__features-subtitle">The Infinix Difference.</p>
          </div>
          
          <div className="about__features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="about-feature-card">
                <div className="about-feature-card__icon-wrapper">
                  <div className="about-feature-card__icon">
                    {feature.icon}
                  </div>
                  <div className="about-feature-card__glow" />
                </div>
                <h4 className="about-feature-card__title">{feature.title}</h4>
                <p className="about-feature-card__desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
