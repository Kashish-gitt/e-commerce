// CategoryContext.js
import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
