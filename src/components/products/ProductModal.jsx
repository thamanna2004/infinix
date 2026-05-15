import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import './product-modal.css';

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedStorage, setSelectedStorage] = useState('256GB');
  const [selectedColor, setSelectedColor] = useState('Titanium');
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [zoomStyle, setZoomStyle] = useState({});

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!product) return null;

  const storages = ['128GB', '256GB', '512GB', '1TB'];
  const colors = ['Titanium', 'Silver', 'Space Black'];

  const handleAddToCart = () => {
    addToCart({
      ...product,
      id: `${product.id}-${selectedStorage}-${selectedColor}`, // unique cart item id
      name: `${product.name} (${selectedStorage}, ${selectedColor})`
    });
    onClose();
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: 'scale(1.5)'
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: 'center',
      transform: 'scale(1)'
    });
  };

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={e => e.stopPropagation()}>
        <button className="product-modal__close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="product-modal__content">
          {/* Left Column: Gallery */}
          <div className="product-modal__gallery">
            <div 
              className="product-modal__main-image"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img 
                src={activeImage} 
                alt={product.name} 
                style={zoomStyle}
              />
            </div>
            <div className="product-modal__thumbnails">
              {product.images.map((img, i) => (
                <div 
                  key={i} 
                  className={`thumbnail ${activeImage === img ? 'active' : ''}`} 
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`Thumbnail ${i+1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="product-modal__info">
            <div className="product-modal__header">
              <span className="product-card__badge">{product.badge}</span>
              <h2>{product.name}</h2>
              <div className="product-modal__rating">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <span>{product.rating}</span>
                <span className="reviews-count">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="product-modal__description">{product.description}</p>
            <p className="product-modal__tagline">{product.tagline}</p>

            <div className="product-modal__specs">
              <h3>Key Features</h3>
              <ul>
                {product.features.map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>

            <div className="product-modal__variants">
              <div className="variant-group">
                <h3>Storage</h3>
                <div className="variant-options">
                  {storages.map(s => (
                    <button 
                      key={s} 
                      className={`variant-btn ${selectedStorage === s ? 'active' : ''}`}
                      onClick={() => setSelectedStorage(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="variant-group">
                <h3>Color</h3>
                <div className="variant-options">
                  {colors.map(c => (
                    <button 
                      key={c} 
                      className={`variant-btn ${selectedColor === c ? 'active' : ''}`}
                      onClick={() => setSelectedColor(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="product-modal__footer">
              <div className="product-modal__price">
                ${product.price.toLocaleString()}
              </div>
              <div className="product-modal__actions">
                <button className="btn-secondary" onClick={handleAddToCart}>Add to Cart</button>
                <button className="btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
