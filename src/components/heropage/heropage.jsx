import React, { useEffect, useRef } from "react";
import "./heropage.css";

const slides = [
  {
    id: "slide-iphone",
    tag: "New — iPhone 16 Pro",
    headline: "Titanium.",
    subheadline: "So strong. So light. So Pro.",
    description:
      "The most powerful iPhone ever. A17 Pro chip with a new 6-core GPU. Camera Control. All day battery life.",
    image: "/hero_iphone.png",
    theme: "dark",
    cta1: { label: "Learn more", href: "#iphone" },
    cta2: { label: "Buy", href: "#store" },
    accent: "var(--accent-blue)",
  },
  {
    id: "slide-macbook",
    tag: "New — MacBook Pro",
    headline: "Mind-blowing.",
    subheadline: "Mind-bending. Just mind.",
    description:
      "M3, M3 Pro, or M3 Max. Up to 22 hours battery. The world's best pro laptop gets better.",
    image: "/hero_macbook.png",
    theme: "light",
    cta1: { label: "Learn more", href: "#mac" },
    cta2: { label: "Buy", href: "#store" },
    accent: "#0071e3",
  },
  {
    id: "slide-ipad",
    tag: "New — iPad Pro",
    headline: "Impossibly thin.",
    subheadline: "Impossibly powerful.",
    description:
      "Ultra Retina XDR display. M4 chip. Apple Pencil Pro. The thinnest Apple product ever.",
    image: "/hero_ipad.png",
    theme: "dark",
    cta1: { label: "Learn more", href: "#ipad" },
    cta2: { label: "Buy", href: "#store" },
    accent: "var(--accent-purple)",
  },
];

const HeroPage = () => {
  const [active, setActive] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const intervalRef = useRef(null);

  const goTo = (index) => {
    if (animating || index === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 400);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 400);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const slide = slides[active];

  return (
    <section className={`hero hero--${slide.theme}`} id="hero">
      {/* Background */}
      <div className={`hero__bg ${animating ? "hero__bg--out" : "hero__bg--in"}`}>
        <img
          src={slide.image}
          alt={slide.headline}
          className="hero__bg-image"
          loading="eager"
        />
        <div className="hero__bg-overlay" />
      </div>

      {/* Content */}
      <div className="hero__content container">
        <div className={`hero__text ${animating ? "hero__text--out" : "hero__text--in"}`}>
          <span className="hero__tag">{slide.tag}</span>
          <h1 className="hero__headline">{slide.headline}</h1>
          <p className="hero__subheadline">{slide.subheadline}</p>
          <p className="hero__description">{slide.description}</p>
          <div className="hero__ctas" style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <a href={slide.cta1.href} className="btn-primary hero__btn">{slide.cta1.label}</a>
            <a href={slide.cta2.href} className="btn-glass hero__btn">{slide.cta2.label}</a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === active ? "hero__dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            id={`hero-dot-${i}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default HeroPage;