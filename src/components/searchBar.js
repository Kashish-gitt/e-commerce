// App.js
import React, { useState } from 'react';
import CategoryItem from './CategoryItem';

const categories = [
  { title: 'Accessories', thumbnail: 'accessories.jpg', path: '/accessories', description: 'Description for Accessories' },
  { title: 'Clothing', thumbnail: 'clothing.jpg', path: '/clothing', description: 'Description for Clothing' },
  { title: 'Electronics', thumbnail: 'electronics.jpg', path: '/electronics', description: 'Description for Electronics' }
]; // Add your categories here

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by category"
        value={searchTerm}
        onChange={handleSearch}
      />

      <div>
        {categories.map(category => (
          <CategoryItem
            key={category.title}
            title={category.title}
            thumbnail={category.thumbnail}
            path={category.path}
            description={category.description}
            searchTerm={searchTerm}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
