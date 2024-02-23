import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Import the useCart hook
import './AddToCart.css'; // Add your own styling for the page
import Navbar from './navbar';
const AddToCartPage = () => {
    const { state, addToCart } = useCart(); // Use the useCart hook to get cart state
    const [couponCode, setCouponCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState(null);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cart');

        // Parse the stored JSON data
        const parsedCartItems = JSON.parse(storedCartItems);

        // If there are stored items, update the cart state
        if (parsedCartItems) {
            parsedCartItems.forEach((item) => addToCart(item));
        }
    }, [addToCart]);
    // const handleRemoveFromCart = (productId) => {
    //     removeFromCart(productId);
    //   };
    
    //   const handleUpdateQuantity = (productId, quantity) => {
    //     updateQuantity(productId, quantity);
    //   };
    
    //   const handleClearCart = () => {
    //     clearCart();
    //   };
    
    const getTotalPrice = () => {
        // Calculate the total price based on the items in the cart
        const subtotal = state.cartItems.reduce((total, item) => total + item.price, 0);
        const discount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0;
        return subtotal - discount;
    };

    const applyCoupon = () => {
        // Implement logic to check and apply the coupon
        // Example: fetchCouponFromAPI(couponCode).then(coupon => setAppliedCoupon(coupon));
    };

    return (
        <div>
            <Navbar />

            <h2 className='add-to-cart-title'>Add to Your Bag</h2>
            <div className='boxes'>
                <div className='cart-products'>
                    {state.cartItems.map((item) => (
                        <div key={item.id}>
                            <div className='column'>
                                <img src={item.thumbnail} className='cart-images'></img>
                                <div className='desc-cart'>
                                    <p className='cart-title'>{item.title}</p>
                                    <p className='cart-price'>Price: {item.price}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div>
                    <p className='sub-total'>Subtotal: {getTotalPrice()}</p>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter coupon code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            className='coupon'
                        />
                        <button onClick={applyCoupon} className='coupon-button'>Apply Coupon</button>
                    </div>
                    {appliedCoupon && (
                        <div>
                            <p>Applied Coupon: {appliedCoupon.code}</p>
                            <p>Discount: {appliedCoupon.discount}%</p>
                        </div>
                    )}
                    <p className='total-price'>Total Price: {getTotalPrice()}</p>
                    <button className='pay-now' >Pay now</button>
                    {state.cartItems.map((item) => (
                        <div key={item.id}>
                            
                            <Link to={`/product/${item.id}`} className='product-nav'> Click to go back to Product {item.id}</Link>
                            

                        </div>
                    ))}

                   
                </div>
            </div>
        </div>
    );
};

export default AddToCartPage;
