import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoryItem.css';
import { CategoryContext } from './CategoryContext';

function CategoryItem({ title, thumbnail, path, description, searchTerm }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryClick = () => {
    setSelectedCategory(title);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      <Link to={path} onClick={handleCategoryClick} className="category-item">
        <div className='category-item-container'>
          <h3>{title}</h3>
          <img src={thumbnail} alt={title} className='thumbnail_image' />
          <p className='desc'>{description}</p>
        </div>
      </Link>
    </CategoryContext.Provider>
  );
}

export default CategoryItem;
