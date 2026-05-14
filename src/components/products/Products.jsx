import React from "react";
import "./products.css";

const products = [
  {
    id: "iphone-16-pro",
    category: "iPhone",
    name: "iPhone 16 Pro",
    tagline: "Hello, Apple Intelligence.",
    price: "From $999",
    badge: "New",
    gradient: "linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accentColor: "#2997ff",
    emoji: "📱",
    features: ["A18 Pro chip", "Camera Control", "48MP Fusion camera"],
  },
  {
    id: "macbook-pro",
    category: "Mac",
    name: "MacBook Pro",
    tagline: "Mind-blowing. Mind-bending.",
    price: "From $1,599",
    badge: "Bestseller",
    gradient: "linear-gradient(145deg, #1c1c1e 0%, #2d2d2f 50%, #3a3a3c 100%)",
    accentColor: "#ffffff",
    emoji: "💻",
    features: ["M4 Pro chip", "Up to 24 hours battery", "Liquid Retina XDR"],
  },
  {
    id: "ipad-pro",
    category: "iPad",
    name: "iPad Pro",
    tagline: "Impossibly thin. Impossibly powerful.",
    price: "From $999",
    badge: "Thinnest Ever",
    gradient: "linear-gradient(145deg, #1a0533 0%, #2d0a5e 50%, #3d0f7a 100%)",
    accentColor: "#bf5af2",
    emoji: "⬛",
    features: ["M4 chip", "Ultra Retina XDR", "Apple Pencil Pro"],
  },
  {
    id: "apple-watch",
    category: "Watch",
    name: "Apple Watch Ultra 2",
    tagline: "Adventure ready. All the time.",
    price: "From $799",
    badge: "Pro",
    gradient: "linear-gradient(145deg, #1a1500 0%, #3d3100 50%, #5e4a00 100%)",
    accentColor: "#ff9f0a",
    emoji: "⌚",
    features: ["S9 SiP chip", "Up to 36 hours", "Double Tap gesture"],
  },
  {
    id: "airpods-pro",
    category: "AirPods",
    name: "AirPods Pro 2",
    tagline: "Adaptive Audio. Just magic.",
    price: "From $249",
    badge: "Popular",
    gradient: "linear-gradient(145deg, #001a14 0%, #003326 50%, #00533d 100%)",
    accentColor: "#30d158",
    emoji: "🎵",
    features: ["H2 chip", "Active Noise Cancellation", "Up to 30hr battery"],
  },
  {
    id: "mac-studio",
    category: "Mac",
    name: "Mac Studio",
    tagline: "The ultimate studio on a desk.",
    price: "From $1,999",
    badge: "Power",
    gradient: "linear-gradient(145deg, #1a000a 0%, #3a0014 50%, #5c0020 100%)",
    accentColor: "#ff375f",
    emoji: "🖥️",
    features: ["M4 Max chip", "192GB unified memory", "12 ports"],
  },
];

const ProductCard = ({ product }) => (
  <article
    className="product-card"
    id={`product-${product.id}`}
    style={{ "--card-gradient": product.gradient, "--card-accent": product.accentColor }}
  >
    <div className="product-card__inner">
      <div className="product-card__top">
        <span className="product-card__badge">{product.badge}</span>
        <span className="product-card__category">{product.category}</span>
      </div>

      <div className="product-card__emoji">{product.emoji}</div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__tagline">{product.tagline}</p>

        <ul className="product-card__features">
          {product.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="product-card__footer">
        <span className="product-card__price">{product.price}</span>
        <a href={`#${product.id}`} className="product-card__cta" aria-label={`Learn more about ${product.name}`}>
          Learn more
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
    <div className="product-card__glow" />
  </article>
);

const Products = () => (
  <section className="products section" id="store">
    <div className="container">
      <div className="products__header text-center">
        <span className="eyebrow">Our lineup</span>
        <h2 className="products__title">The best of Infinix.<br />All in one place.</h2>
        <p className="products__subtitle">
          Shop the latest iPhone, Mac, iPad, Apple Watch and AirPods.
        </p>
      </div>

      <div className="products__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

export default Products;
