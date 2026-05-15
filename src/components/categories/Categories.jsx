import React from 'react';
import './categories.css';

const categories = [
  { id: 'iPhone', name: 'iPhone', description: 'Pro cameras. Pro display. Pro performance.', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop', color: 'rgba(41, 151, 255, 0.1)' },
  { id: 'Mac', name: 'Mac', description: 'Mind-blowing speed. Mind-bending battery life.', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop', color: 'rgba(255, 255, 255, 0.05)' },
  { id: 'iPad', name: 'iPad', description: 'Lovable. Drawable. Magical.', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop', color: 'rgba(191, 90, 242, 0.1)' },
  { id: 'Watch', name: 'Watch', description: 'Adventure ready. All the time.', image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800&auto=format&fit=crop', color: 'rgba(255, 159, 10, 0.1)' },
  { id: 'AirPods', name: 'AirPods', description: 'Adaptive Audio. Just magic.', image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?q=80&w=800&auto=format&fit=crop', color: 'rgba(48, 209, 88, 0.1)' },
  { id: 'Accessories', name: 'Accessories', description: 'Stylishly designed for your devices.', image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=800&auto=format&fit=crop', color: 'rgba(255, 55, 95, 0.1)' },
];

const Categories = () => {
  const handleScrollToStore = (categoryId) => {
    // Scroll to store
    const storeSection = document.getElementById('store');
    if (storeSection) {
      window.scrollTo({
        top: storeSection.offsetTop - 52,
        behavior: 'smooth'
      });
      // In a real app we might pass state or use Context to set the filter in Products.jsx
      // For now, it scrolls smoothly. (We could simulate a click on the filter button if needed)
      setTimeout(() => {
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
          if (btn.textContent === categoryId) {
            btn.click();
          }
        });
      }, 500);
    }
  };

  return (
    <section className="categories section" id="categories">
      <div className="container">
        <div className="categories__header text-center">
          <span className="eyebrow">Store</span>
          <h2 className="categories__title">The best way to buy the<br/>products you love.</h2>
        </div>
        
        <div className="categories__grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card" onClick={() => handleScrollToStore(cat.id)}>
              <div className="category-card__image-container" style={{ background: cat.color }}>
                <img src={cat.image} alt={cat.name} className="category-card__img" />
              </div>
              <div className="category-card__content">
                <h3 className="category-card__name">{cat.name}</h3>
                <p className="category-card__desc">{cat.description}</p>
                <span className="category-card__explore">
                  Explore {cat.name}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
