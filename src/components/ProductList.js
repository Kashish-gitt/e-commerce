import React, { useEffect, useContext, useState } from 'react';
import { CategoryContext } from './CategoryContext';
import { useParams } from 'react-router-dom';
import productsData from '../data/ProductData';
import Navbar from './navbar';
import './ProductList.css';
// import CIcon from '@coreui/icons-react';
// import * as icon from '@coreui/icons';
import { Link } from 'react-router-dom';

const colorOptions = ['all', 'pink', 'cream', 'green', 'black', 'blue', 'orange'];

const ProductList = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  const { category } = useParams();
  const [sortOption, setSortOption] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setSelectedCategory(category);
  }, [category, setSelectedCategory]);

  useEffect(() => {
    console.log('selectedCategory:', selectedCategory);
    console.log('sortOption:', sortOption);

    if (!selectedCategory) return;

    const categoryProducts = productsData.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());
    const sortedProducts = sortProducts(categoryProducts, sortOption);

    setFilteredProducts(sortedProducts);

  }, [selectedCategory, sortOption]);

  const sortProducts = (products, option) => {
    switch (option) {
      case 'price':
        return [...products].sort((a, b) => a.price - b.price);
      case 'popularity':
        return [...products].sort((a, b) => b.reviews - a.reviews);
      default:
        return products;
    }
  };
  const [filterColor, setFilterColor] = useState('');


  useEffect(() => {
    if (!selectedCategory) return;

    let categoryProducts = productsData.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

    
    if (filterColor) {
      if (filterColor === 'all') {
        return;
      }
      categoryProducts = categoryProducts.filter(product => product.color.toLowerCase() === filterColor.toLowerCase());
    }

    const sortedProducts = sortProducts(categoryProducts, sortOption);

    setFilteredProducts(sortedProducts);
  }, [selectedCategory, sortOption, filterColor]);

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };


  const handleColorChange = (newFilterColor) => {
    setFilterColor(newFilterColor === 'all' ? '' : newFilterColor);
  };


  return (
    <div>
      <Navbar />
      <h1 className='category-heading'>{category} Wear</h1>
      <div className='big'>
        <div className='sort-options'>
          <label className='sort-by'>SORT BY:</label>
          <div className="sort-buttons">
            <button onClick={() => handleSortChange('')} className='sort-button'>None</button>
            <button onClick={() => handleSortChange('price')} className='sort-button'>Price</button>
            <button onClick={() => handleSortChange('popularity')} className='sort-button'>Popularity</button>
          </div>
        </div>
        <div className='color-filter'>
          <label className='filter-color'>FILTER BY COLOR:</label>
          <div className="color-options">
            {colorOptions.map(color => (
              <div
                key={color}
                className={`color-option ${filterColor === color ? 'active' : ''}`}
                style={{ backgroundColor: color === 'all' ? 'white' : color }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>
        </div>
      </div>
      <section className='card-container'>
        <section className='card'>
          <div className='productss'>
            {filteredProducts.map(product => (
              <div key={product.id} className='inner-card'>
                <Link to={{ pathname: `/product/${product.id}`, state: { product } }}>

                  <img src={product.thumbnail} alt={product.title} className='products-image' />
                </Link>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price:{product.price}</p>
                <span className='total-reviews'>{product.reviews}</span>
                {/* <CIcon icon={icon.cilBriefcase} className='bag' /> */}
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductList;