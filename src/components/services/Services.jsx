import React, { useState, useEffect, useRef } from 'react';
import './services.css';
import SupportModal from './SupportModal';

const serviceData = [
  { id: 'delivery', category: 'Delivery', title: 'Fast Delivery', desc: 'Get your products delivered to your doorstep at lightning speed.', icon: '🚚' },
  { id: 'payments', category: 'Payments', title: 'Secure Payments', desc: 'Shop with confidence using our 100% secure, encrypted payment gateways.', icon: '🔒' },
  { id: 'warranty', category: 'Warranty', title: 'Product Warranty', desc: 'All items come with a comprehensive 1-year manufacturer warranty.', icon: '🛡️' },
  { id: 'support', category: 'Support', title: '24/7 Customer Support', desc: 'Our dedicated team of Apple experts is here to assist you 24/7.', icon: '💬' },
  { id: 'returns', category: 'Support', title: 'Easy Returns', desc: 'Not satisfied? Return your product within 14 days, no questions asked.', icon: '↩️' },
  { id: 'genuine', category: 'Warranty', title: 'Genuine Apple Products', desc: 'Every item we sell is guaranteed authentic and meets the highest standards.', icon: '✨' },
];

const faqs = [
  { q: "How fast is your standard delivery?", a: "Standard delivery typically takes 2-3 business days. We also offer next-day delivery in select areas." },
  { q: "What is your return policy?", a: "We offer a 14-day hassle-free return policy. Products must be in original condition with all accessories." },
  { q: "Do you offer international shipping?", a: "Currently, we only ship domestically. We plan to expand internationally soon." },
  { q: "Are the products covered by Apple Warranty?", a: "Yes, all Apple products come with a standard 1-year limited warranty from Apple." }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeFaq, setActiveFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const tabs = ['All', 'Delivery', 'Support', 'Warranty', 'Payments'];

  const filteredServices = activeTab === 'All' 
    ? serviceData 
    : serviceData.filter(s => s.category === activeTab);

  const openModal = (service) => {
    setModalContent(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openSupportModal = () => {
    setIsSupportModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSupportModal = () => {
    setIsSupportModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="services section" id="services" ref={sectionRef}>
      <div className="container">
        
        {/* Header & Tabs */}
        <div className={`services__header text-center ${isVisible ? 'fade-up' : 'hidden'}`}>
          <span className="eyebrow">Services</span>
          <h2 className="services__title">Designed for your peace of mind.</h2>
          
          <div className="services__tabs">
            {tabs.map(tab => (
              <button 
                key={tab}
                className={`service-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className={`services__grid ${isVisible ? 'fade-up delay-1' : 'hidden'}`}>
          {filteredServices.map((service, index) => (
            <div key={service.id} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <button className="service-card__link" onClick={() => openModal(service)}>
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <div className="service-card__glow" />
            </div>
          ))}
        </div>

        {/* Statistics Strip */}
        <div className={`services__stats ${isVisible ? 'fade-up delay-2' : 'hidden'}`}>
          <div className="s-stat-card">
            <h4>10K+</h4>
            <p>Deliveries</p>
          </div>
          <div className="s-stat-card">
            <h4>24/7</h4>
            <p>Support</p>
          </div>
          <div className="s-stat-card">
            <h4>99%</h4>
            <p>Customer Satisfaction</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`services__faq ${isVisible ? 'fade-up delay-2' : 'hidden'}`}>
          <h3 className="faq__title text-center">Frequently Asked Questions</h3>
          <div className="faq__list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq__item ${activeFaq === idx ? 'active' : ''}`} onClick={() => toggleFaq(idx)}>
                <div className="faq__question">
                  <span>{faq.q}</span>
                  <svg className="faq__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="faq__answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support CTA */}
        <div className={`services__cta text-center ${isVisible ? 'fade-up delay-2' : 'hidden'}`}>
          <h3>Need more help?</h3>
          <p>Our dedicated support team is available around the clock.</p>
          <div className="services__cta-actions">
            <button className="btn-primary" onClick={openSupportModal}>Contact Support</button>
            <button className="btn-secondary" onClick={() => window.dispatchEvent(new CustomEvent('openChat'))}>Live Chat</button>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {isModalOpen && modalContent && (
        <div className="s-modal-overlay" onClick={closeModal}>
          <div className="s-modal" onClick={e => e.stopPropagation()}>
            <button className="s-modal__close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="s-modal__icon">{modalContent.icon}</div>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.desc}</p>
            <p style={{ marginTop: '16px', color: 'var(--gray-400)', fontSize: '15px', lineHeight: '1.6' }}>
              Here is where detailed terms and conditions or expanded explanations regarding {modalContent.title.toLowerCase()} would go. 
              Infinix ensures a premium experience by backing our products with industry-leading service protocols.
            </p>
            <button className="btn-primary" style={{ marginTop: '32px', width: '100%' }} onClick={closeModal}>Got it</button>
          </div>
        </div>
      )}

      {/* Premium Support Modal Form */}
      <SupportModal isOpen={isSupportModalOpen} onClose={closeSupportModal} />
    </section>
  );
};

export default Services;
