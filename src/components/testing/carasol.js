import React, { useState } from 'react';
import './carasol.css'; // Create a CSS file for styling

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (!images || images.length === 0) {
    return ; 
  }

  return (
    <div className="carousel">
      {images.length > 1 && <button className="arrow left-arrow" onClick={handlePrev}>{'<'}</button>}
      <img src={images[currentIndex]} alt={`image-${currentIndex}`} />
      {images.length > 1 && <button className="arrow right-arrow" onClick={handleNext}>{'>'}</button>}
    </div>
  );
};

export default Carousel;
