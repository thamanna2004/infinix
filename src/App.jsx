import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar/Nav'
import HeroPage from './components/heropage/heropage'
import Categories from './components/categories/Categories'
import About from './components/about/About'
import Products from './components/products/Products'
import Offers from './components/offers/Offers'
import Services from './components/services/Services'
import Reviews from './components/reviews/Reviews'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import CartSidebar from './components/cart/CartSidebar'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { StoreProvider } from './context/StoreContext'
import LiveChat from './components/chat/LiveChat'
import AuthModal from './components/auth/AuthModal'
import AccountSection from './components/account/AccountSection'
import CareersModal from './components/about/CareersModal'
import InfoModal from './components/about/InfoModal'
import OfferDetailModal from './components/offers/OfferDetailModal'

function App() {
  const [activeModal, setActiveModal] = useState(null); // { type, title, content, eyebrow }
  const [activeOffer, setActiveOffer] = useState(null);

  const openInfoModal = (modalData) => {
    setActiveModal(modalData);
  };

  const closeModals = () => {
    setActiveModal(null);
    setActiveOffer(null);
  };

  useEffect(() => {
    const handleOpenModal = (e) => openInfoModal(e.detail);
    const handleOpenOffer = (e) => setActiveOffer(e.detail);
    
    window.addEventListener('openInfoModal', handleOpenModal);
    window.addEventListener('openOfferModal', handleOpenOffer);
    
    return () => {
      window.removeEventListener('openInfoModal', handleOpenModal);
      window.removeEventListener('openOfferModal', handleOpenOffer);
    };
  }, []);

  return (
    <AuthProvider>
      <StoreProvider>
        <CartProvider>
        <Navbar />
        <CartSidebar />
        <LiveChat />
        <AuthModal />

        {/* About Modals */}
        <CareersModal 
          isOpen={activeModal?.type === 'careers'} 
          onClose={closeModals} 
        />
        <InfoModal 
          isOpen={activeModal && activeModal.type !== 'careers'} 
          onClose={closeModals}
          title={activeModal?.title}
          content={activeModal?.content}
          eyebrow={activeModal?.eyebrow}
          type={activeModal?.type}
        />
        <OfferDetailModal 
          isOpen={!!activeOffer} 
          onClose={closeModals} 
          offer={activeOffer} 
        />

        <main>
          <HeroPage />
          <Categories />
          <About />
          <Products />
          <Offers />
          <Services />
          <Reviews />
          <AccountSection />
          <Contact />
        </main>
        <Footer />
        </CartProvider>
      </StoreProvider>
    </AuthProvider>
  )
}

export default App;
