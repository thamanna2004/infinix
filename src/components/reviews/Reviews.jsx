import React from 'react';
import './reviews.css';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    product: "iPhone 16 Pro",
    rating: 5,
    text: "The titanium finish is absolutely stunning, and the camera control button changes how I take photos entirely. Best upgrade in years.",
  },
  {
    id: 2,
    name: "David Chen",
    product: "MacBook Pro M3",
    rating: 5,
    text: "Battery life that defies physics. I can compile code all day and still have 40% left by evening. The Space Black color is gorgeous.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    product: "AirPods Pro 2",
    rating: 5,
    text: "The adaptive audio feature is pure magic. It perfectly blends my music with the environment when I'm walking through the city.",
  },
  {
    id: 4,
    name: "Michael Chang",
    product: "Apple Watch Ultra 2",
    rating: 5,
    text: "Takes everything I throw at it. The double tap gesture is incredibly useful when my hands are full on the trail.",
  }
];

const Reviews = () => {
  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <div className="reviews__header text-center">
          <span className="eyebrow">Customer Stories</span>
          <h2 className="reviews__title">Loved by millions.</h2>
        </div>
        
        <div className="reviews__grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-card__stars">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="review-card__text">"{review.text}"</p>
              <div className="review-card__footer">
                <span className="review-card__name">{review.name}</span>
                <span className="review-card__product">{review.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
