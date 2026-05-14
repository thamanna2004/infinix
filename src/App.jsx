import React from 'react'
import Navbar from './components/navbar/Nav'
import HeroPage from './components/heropage/heropage'
import Products from './components/products/Products'
import Features from './components/features/Features'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroPage />
        <Products />
        <Features />
      </main>
      <Footer />
    </>
  )
}

export default App
