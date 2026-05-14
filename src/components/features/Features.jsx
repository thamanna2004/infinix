import React from "react";
import "./features.css";

const features = [
  {
    id: "feat-privacy",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Privacy built in",
    description: "Your data belongs to you. We design every feature with privacy as a foundation, not an afterthought.",
    color: "#30d158",
  },
  {
    id: "feat-chip",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>
      </svg>
    ),
    title: "Apple Silicon",
    description: "Our custom chips deliver industry-leading performance per watt — blazing fast, yet whisper quiet.",
    color: "#2997ff",
  },
  {
    id: "feat-ecosystem",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49M20.49 3.51a12 12 0 010 16.97M3.51 20.49a12 12 0 010-16.97"/>
      </svg>
    ),
    title: "Seamless ecosystem",
    description: "iPhone, Mac, iPad, and Watch work together like magic. Handoff, AirDrop, Universal Clipboard — just works.",
    color: "#bf5af2",
  },
  {
    id: "feat-camera",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>
      </svg>
    ),
    title: "Pro camera system",
    description: "From cinematic portraits to ProRAW stills — our camera systems rival professional studio equipment.",
    color: "#ff9f0a",
  },
  {
    id: "feat-battery",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2M7 11v2M12 11v2"/><line x1="7" y1="12" x2="12" y2="12"/>
      </svg>
    ),
    title: "All-day battery",
    description: "Exceptional battery life across every device. Go all day — and then some — without reaching for a charger.",
    color: "#ff375f",
  },
  {
    id: "feat-planet",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: "Carbon neutral by 2030",
    description: "We're committed to making every product carbon neutral by 2030. Technology should be good for the planet.",
    color: "#32ade6",
  },
];

const Features = () => (
  <section className="features section" id="features">
    <div className="container">
      <div className="features__header text-center">
        <span className="eyebrow">Why Infinix</span>
        <h2 className="features__title">Built different.<br />By design.</h2>
        <p className="features__subtitle">
          Every product is crafted with obsessive attention to detail — hardware, software, and services working as one.
        </p>
      </div>

      <div className="features__grid">
        {features.map((feat) => (
          <div
            key={feat.id}
            className="feature-card"
            id={feat.id}
            style={{ "--feat-color": feat.color }}
          >
            <div className="feature-card__icon">
              {feat.icon}
            </div>
            <h3 className="feature-card__title">{feat.title}</h3>
            <p className="feature-card__desc">{feat.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Big stat strip */}
    <div className="features__stats">
      <div className="features__stat">
        <span className="features__stat-num">2B+</span>
        <span className="features__stat-label">Active devices worldwide</span>
      </div>
      <div className="features__stat-divider" />
      <div className="features__stat">
        <span className="features__stat-num">98%</span>
        <span className="features__stat-label">Customer satisfaction</span>
      </div>
      <div className="features__stat-divider" />
      <div className="features__stat">
        <span className="features__stat-num">175+</span>
        <span className="features__stat-label">Countries & regions</span>
      </div>
      <div className="features__stat-divider" />
      <div className="features__stat">
        <span className="features__stat-num">100%</span>
        <span className="features__stat-label">Renewable energy operations</span>
      </div>
    </div>
  </section>
);

export default Features;
