import React from 'react';
import { useStore } from '../../context/StoreContext';
import './offers.css';

const offersData = [
  {
    id: 1,
    theme: 'dark',
    eyebrow: 'iPhone 16 Pro',
    title: 'Hello, Apple Intelligence.',
    desc: 'Get $170–$620 in credit toward iPhone 16 Pro when you trade in iPhone 11 or higher.',
    img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=400&auto=format&fit=crop',
    benefits: ['Up to $620 instant credit', 'Interest-free installments', 'Free data transfer'],
    discount: 'Up to $620 Trade-in Credit',
    expiry: 'Ends June 30, 2025',
    actions: [
      { label: 'Shop Now', type: 'shop', category: 'iPhone' },
      { label: 'Learn More', type: 'offer-modal' }
    ]
  },
  {
    id: 2,
    theme: 'light',
    eyebrow: 'MacBook Pro',
    title: 'Mind-blowing. Mind-bending.',
    desc: 'The new MacBook Pro. M4 Pro and M4 Max chips. Stunning Liquid Retina XDR display.',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&auto=format&fit=crop',
    benefits: ['Next-gen M4 performance', '24-hour battery life', 'Liquid Retina XDR'],
    discount: 'Starting at $1,599',
    expiry: 'Limited Quantities Available',
    actions: [
      { label: 'Shop Mac', type: 'shop', category: 'Mac' },
      { label: 'Learn More', type: 'offer-modal' }
    ]
  },
  {
    id: 3,
    theme: 'light',
    eyebrow: 'Apple Card',
    title: 'Get up to 3% Daily Cash back.',
    desc: 'Pay for your new Apple products over time, interest-free with Apple Card Monthly Installments.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=400&auto=format&fit=crop',
    benefits: ['3% Daily Cash back', 'No annual fees', 'Zero interest installments'],
    discount: '3% Daily Cash Rewards',
    expiry: 'Ongoing Benefit',
    actions: [
      { label: 'Apply Now', type: 'external', url: 'https://apple.com/apple-card' },
      { label: 'Learn More', type: 'offer-modal' }
    ]
  },
  {
    id: 4,
    theme: 'dark',
    eyebrow: 'Apple Watch',
    title: 'Adventure ready. All the time.',
    desc: 'Apple Watch Ultra 2. The most rugged and capable Apple Watch ever.',
    img: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=400&auto=format&fit=crop',
    benefits: ['Precision Dual-Frequency GPS', '36-hour battery life', 'Water-resistant to 100m'],
    discount: 'Special Pro Bundle Savings',
    expiry: 'While Supplies Last',
    actions: [
      { label: 'Explore Watch', type: 'shop', category: 'Watch' },
      { label: 'Learn More', type: 'offer-modal' }
    ]
  }
];

const Offers = () => {
  const { filterToCategory } = useStore();

  const handleAction = (offer, action) => {
    if (action.type === 'shop') {
      filterToCategory(action.category);
    } else if (action.type === 'offer-modal') {
      window.dispatchEvent(new CustomEvent('openOfferModal', { detail: offer }));
    } else if (action.type === 'external') {
      window.open(action.url, '_blank');
    }
  };

  return (
    <section className="offers section" id="offers">
      <div className="container">
        <div className="offers__header text-center">
          <span className="eyebrow">Exclusive Deals</span>
          <h2 className="offers__section-title">Save on the best of Infinix.</h2>
        </div>
        <div className="offers__grid">
          {offersData.map((offer) => (
            <div key={offer.id} className={`offer-card offer-card--${offer.theme}`}>
              <div className="offer-card__content">
                <span className="eyebrow" style={{ color: offer.theme === 'light' ? 'var(--gray-500)' : 'inherit' }}>
                  {offer.eyebrow}
                </span>
                <h3 className="offer-card__title">{offer.title}</h3>
                <p className="offer-card__desc">{offer.desc}</p>
                <div className="offer-card__actions">
                  {offer.actions.map((action, index) => (
                    <button 
                      key={index} 
                      className={`offer-action-btn ${index === 0 ? 'btn-primary' : 'btn-link'}`}
                      onClick={() => handleAction(offer, action)}
                      style={offer.theme === 'light' && index === 0 ? { background: '#000', color: '#fff' } : {}}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="offer-card__visual">
                <img src={offer.img} alt={offer.eyebrow} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
