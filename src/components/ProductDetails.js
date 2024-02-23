import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductData from '../data/ProductData.json';
import Navbar from './navbar';
import './ProductDetails.css';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { useCart } from './CartContext';
import {Link, useNavigate } from 'react-router-dom'; 
import Footer from './footer'


const ProductDetails = () => {
  const { productId } = useParams();
  console.log('Product ID:', productId);
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate(); 

  useEffect(() => {
    const data = ProductData.find((item) => item.id === parseInt(productId, 10));
    setProduct(data);
  }, [productId]);
  const handleAddToCart = () => {
    addToCart(product);
    navigate('/add-to-cart');


  };

  const handleAddToWishlist = () => {
    console.log('Product added to wishlist:', product);
  };

  return (
    <div>
      <Navbar />
      <div>
        <img src={product && product.thumbnail} alt={product && product.title} className='product-image-details' />
        <div className='product-details-written'>
          <h2 className='product-title-details'>{product && product.title}</h2>
          <p className='product-desc-details'>{product && product.description}</p>
          <p className='product-specifications-details'>{product && product.specifications}</p>
          <p className='product-price-details'>MRP: {product && product.price}</p>
          <div className='line'></div>
          <h5 className='size-choose'>Select Size</h5>
          <div className='sizechart'>
            <div className='size'>XS</div>
            <div className='size'>S</div>
            <div className='size'>M</div>
            <div className='size'>L</div>
            <div className='size'>XL</div>
          </div>
          <div className='line2 line'></div>
          <div className='available-offers'>
            <h5 className='available-offers-title'>Available Offers</h5>

            <p className='available-offer'>  <CIcon icon={icon.cilCreditCard} style={{ '--ci-primary-color': 'brown' }} className='credit-cards' />Get 15% off on Bank of Baroda Debit and Credit Card</p>
            <p className='small-code'>Use Code: BOB500 | Min Purchase: ₹1500</p>

            <p className='available-offer'> <CIcon icon={icon.cilCreditCard} style={{ '--ci-primary-color': 'brown' }} className='credit-cards' />15% off on ICICI Credit Cards</p>
            <p className='small-code'>Use Code: ICICIWEEKEND | Min Purchase: ₹1500</p>
            <p className='available-offer'> <CIcon icon={icon.cilCreditCard} style={{ '--ci-primary-color': 'brown' }} className='credit-cards' />Get 10% off on AU Bank Debit Cards</p>
            <p className='small-code'>Use Code: AUMALL10 | Min Purchase: ₹1500</p>
            <p className='available-offer'> <CIcon icon={icon.cilCreditCard} style={{ '--ci-primary-color': 'brown' }} className='credit-cards' />Get flat Rs. 500 Off on purchase above Rs. 4000</p>
            <p className='small-code'>Use Code: FASHION500 | Min Purchase: ₹4000</p>
            <p className='available-offer'> <CIcon icon={icon.cilCreditCard} style={{ '--ci-primary-color': 'brown' }} className='credit-cards' />Up to 5% NeuCoins on Tata Neu HDFC Bank Credit Cards | No Promo Code Required</p>
            <p className='small-code'>Every Spend. Every Time | 1 NeuCoin = Rs.1</p>
            <p className='available-offer'> <CIcon icon={icon.cilCreditCard} style={{ '--ci-primary-color': 'brown' }} className='credit-cards' />Get additional 10% off on a shopping on or above Rs. 1599</p>
          </div>
          <div className='line3 line'></div>
          <div className='ship'>
            <h5 className='ship-to'>Ship to</h5>
            <input type='string' placeholder='Enter the pincode' className='pincode' />
          </div>
          <div className='line4 line'></div>
          <div className='product-specification'>
            <h5 className='ship-to'>Product Details</h5>
            <p>{product && product.specifications}</p>
          </div>
          <div className='line5 line'></div>
          <div className='buttons-container'>
            <button className='add-to-cart-button' onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className='add-to-wishlist-button' onClick={handleAddToWishlist}>
              Add to Wishlist
            </button>
          </div>


        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
