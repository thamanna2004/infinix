import React, { createContext, useContext, useState } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filterToCategory = (category) => {
    setSelectedCategory(category);
    setSearchQuery("");
    
    // Smooth scroll to store
    const storeSection = document.getElementById("store");
    if (storeSection) {
      storeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const searchProducts = (query) => {
    setSearchQuery(query);
    setSelectedCategory("All");
    
    const storeSection = document.getElementById("store");
    if (storeSection) {
      storeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StoreContext.Provider value={{ 
      selectedCategory, 
      setSelectedCategory, 
      searchQuery, 
      setSearchQuery, 
      sortBy, 
      setSortBy,
      filterToCategory,
      searchProducts
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
