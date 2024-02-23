import React,{useEffect,useState} from 'react'
// import { NavLink } from 'react-router-dom';
import first from '../assets/grid.jpg';
import second from '../assets/grid1.jpg';
import third from '../assets/grid2.jpg';
import fourth from '../assets/grid4.jpg';
import './imageproduct.css'
import use from '../assets/usee.jpg'
import Carousel from './testing/carasol'; 
const images = [first, second, third, fourth];
const initialimages=[use, second, third, fourth]
const HeroSection = ({myData}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3500); 
  
      return () => clearInterval(intervalId);
    }, []);
          const {name}=myData;
  return (
    <div className='test1'>
        <Carousel images={initialimages} />
        {/* <img src={use} className='usee'/> */}
        <div className="intro-data">
        <p className='welcometo'>Welcome to </p>
            <h1>{name}</h1>
                <p className='majordesc'>Embark on a journey where style meets convenience</p>
        </div>
        <div className='second-container'>
        {images.map((image, index) => (
          <img
            key={index}
            src={images[(currentIndex + index) % images.length]}
            className='second-container-images'
            alt={`image-${index}`}
          />
        ))}
        </div>
    </div>

  )
}

export default HeroSection