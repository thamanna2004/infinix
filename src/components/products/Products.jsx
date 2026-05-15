import React, { useState, useMemo } from "react";
import { useCart } from "../../context/CartContext";
import { useStore } from "../../context/StoreContext";
import ProductModal from "./ProductModal";
import "./products.css";

const products = [
  {
    id: "iphone-16-pro",
    category: "iPhone",
    name: "iPhone 16 Pro",
    tagline: "Hello, Apple Intelligence.",
    description: "The ultimate iPhone with a stunning titanium design, A18 Pro chip, and advanced Camera Control.",
    price: 999,
    rating: 4.9,
    reviews: 1245,
    stock: "In Stock",
    badge: "New",
    gradient: "linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accentColor: "#2997ff",
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["A18 Pro chip", "Camera Control", "48MP Fusion camera"],
    dateAdded: "2024-09-10"
  },
  {
    id: "macbook-pro",
    category: "Mac",
    name: "MacBook Pro",
    tagline: "Mind-blowing. Mind-bending.",
    description: "Supercharged by M4 Pro. Features a stunning Liquid Retina XDR display and up to 24 hours of battery life.",
    price: 1599,
    rating: 4.8,
    reviews: 892,
    stock: "Low Stock",
    badge: "Bestseller",
    discount: "Save $100",
    gradient: "linear-gradient(145deg, #1c1c1e 0%, #2d2d2f 50%, #3a3a3c 100%)",
    accentColor: "#ffffff",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["M4 Pro chip", "Up to 24 hours battery", "Liquid Retina XDR"],
    dateAdded: "2024-01-15"
  },
  {
    id: "ipad-pro",
    category: "iPad",
    name: "iPad Pro",
    tagline: "Impossibly thin. Impossibly powerful.",
    description: "The thinnest Apple product ever. Features the breakthrough Apple M4 chip and a gorgeous Ultra Retina XDR display.",
    price: 999,
    rating: 4.9,
    reviews: 534,
    stock: "In Stock",
    badge: "Thinnest Ever",
    gradient: "linear-gradient(145deg, #1a0533 0%, #2d0a5e 50%, #3d0f7a 100%)",
    accentColor: "#bf5af2",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558562805-4bf1e2a724eb?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["M4 chip", "Ultra Retina XDR", "Apple Pencil Pro"],
    dateAdded: "2024-05-07"
  },
  {
    id: "apple-watch",
    category: "Watch",
    name: "Apple Watch Ultra 2",
    tagline: "Adventure ready. All the time.",
    description: "The most rugged and capable Apple Watch. Designed for outdoor adventures and supercharged workouts.",
    price: 799,
    rating: 4.7,
    reviews: 2109,
    stock: "In Stock",
    badge: "Pro",
    gradient: "linear-gradient(145deg, #1a1500 0%, #3d3100 50%, #5e4a00 100%)",
    accentColor: "#ff9f0a",
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["S9 SiP chip", "Up to 36 hours", "Double Tap gesture"],
    dateAdded: "2023-09-12"
  },
  {
    id: "airpods-pro",
    category: "AirPods",
    name: "AirPods Pro 2",
    tagline: "Adaptive Audio. Just magic.",
    description: "Richer audio experience, next-level Active Noise Cancellation, and Personalized Spatial Audio.",
    price: 249,
    rating: 4.8,
    reviews: 4321,
    stock: "In Stock",
    badge: "Popular",
    discount: "15% Off",
    gradient: "linear-gradient(145deg, #001a14 0%, #003326 50%, #00533d 100%)",
    accentColor: "#30d158",
    images: [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606220588913-b3aaa1ceb719?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["H2 chip", "Active Noise Cancellation", "Up to 30hr battery"],
    dateAdded: "2023-09-12"
  },
  {
    id: "mac-studio",
    category: "Mac",
    name: "Mac Studio",
    tagline: "The ultimate studio on a desk.",
    description: "Embraced by creative pros everywhere, Mac Studio delivers exceptional power with the M4 Max chip.",
    price: 1999,
    rating: 5.0,
    reviews: 156,
    stock: "Pre-order",
    badge: "Power",
    gradient: "linear-gradient(145deg, #1a000a 0%, #3a0014 50%, #5c0020 100%)",
    accentColor: "#ff375f",
    images: [
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["M4 Max chip", "192GB unified memory", "12 ports"],
    dateAdded: "2023-06-05"
  },
];

const ProductCard = ({ product, onAdd, onOpenModal }) => (
  <article
    className="product-card"
    id={`product-${product.id}`}
    style={{ "--card-gradient": product.gradient, "--card-accent": product.accentColor }}
  >
    <div className="product-card__inner">
      <div className="product-card__top">
        <div className="product-card__badges">
          <span className="product-card__badge">{product.badge}</span>
          {product.discount && <span className="product-card__badge discount-badge">{product.discount}</span>}
        </div>
        <span className="product-card__category">{product.category}</span>
      </div>

      <div className="product-card__image-container">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="product-card__img" 
        />
      </div>

      <div className="product-card__body">
        <div className="product-card__meta">
          <div className="product-card__rating">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>{product.rating}</span>
            <span className="reviews-count">({product.reviews})</span>
          </div>
          <span className={`product-card__stock ${product.stock === 'Low Stock' ? 'warning' : ''}`}>{product.stock}</span>
        </div>

        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
      </div>

      <div className="product-card__footer">
        <div className="product-card__price-row">
          <span className="product-card__price">${product.price.toLocaleString()}</span>
        </div>
        
        <div className="product-card__actions">
          <button className="btn-secondary product-card__btn" onClick={() => onOpenModal(product)}>
            Details
          </button>
          <button className="btn-primary product-card__btn" onClick={() => onAdd(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <div className="product-card__glow" />
  </article>
);

const Products = () => {
  const { addToCart } = useCart();
  const { 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery, 
    sortBy, 
    setSortBy 
  } = useStore();
  const [activeProduct, setActiveProduct] = useState(null);

  const categories = ["All", "iPhone", "Mac", "iPad", "Watch", "AirPods"];
  
  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    // 1. Filter by Category
    if (selectedCategory !== "All") {
      result = result.filter(p => p.category === selectedCategory);
    }

    // 2. Filter by Search Query
    if (searchQuery.trim() !== "") {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.description.toLowerCase().includes(lowerQuery)
      );
    }

    // 3. Sort
    return result.sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "latest") return new Date(b.dateAdded) - new Date(a.dateAdded);
      // default "popular" based on reviews count
      return b.reviews - a.reviews;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <>
      <section className="products section" id="store">
        <div className="container">
          <div className="products__header text-center">
            <span className="eyebrow">Our lineup</span>
            <h2 className="products__title">The best of Infinix.<br />All in one place.</h2>
            
            <div className="products__toolbar">
              <div className="products__search-bar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="products__filters">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="products__sort">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="popular">Most Popular</option>
                  <option value="latest">Latest Releases</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {filteredAndSortedProducts.length === 0 ? (
            <div className="products__empty text-center" style={{ padding: '64px 0', color: 'var(--gray-500)' }}>
              <h3>No products found.</h3>
              <p>Try adjusting your search or category filters.</p>
            </div>
          ) : (
            <div className="products__grid">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAdd={addToCart} 
                  onOpenModal={setActiveProduct} 
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {activeProduct && (
        <ProductModal 
          product={activeProduct} 
          onClose={() => setActiveProduct(null)} 
        />
      )}
    </>
  );
};

export default Products;
