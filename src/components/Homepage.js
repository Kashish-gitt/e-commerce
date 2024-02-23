
import React from 'react';
import CategoryItem from './CategoryItem';
// import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import ImageProduct from './imageproducts';
import './HomePage.css';
import download from '../thumbnail/accessories.jpg'
import mencasual from '../thumbnail/mencasual.jpg'
import menprofessional from '../thumbnail/menprofessional.jpg'
import mentraditional from '../thumbnail/mentraditional.jpg'
import womencasual from '../thumbnail/womencasual.jpg'
import womendress from '../thumbnail/womendress.jpg'
import womensuits from '../thumbnail/womensuits.jpg'
import kidscasual from '../thumbnail/kidscasual.jpg'
import kidstraditional from '../thumbnail/kidstraditional.jpg'
import About from './about'
import Carasol from './testing/carasol'


const categories = [
  { title: ' MEN CASUAL', description:'lorem ipsum lorem ipsum  ip nbhgggggggggggggggggggggggggggggggggggggggggggsum', thumbnail: mencasual, path: '/categories/Men-Casual' },
  { title: 'MEN PROFESSIONAL',description:'lorem ipsum lorem ipsum lorem ipsum', thumbnail: menprofessional, path: '/categories/Men-Professional' },
  { title: 'MEN TRADITIONAL',description:'lorem ipsum lorem ipsum lorem ipsum', thumbnail: mentraditional, path: '/categories/Men-Traditional' },
  { title: 'WOMEN TRADITIONAL',description:'lorem ipsum lorem ipsum lorem ipsum', thumbnail: womensuits, path: '/categories/Women-Casual' },
  { title: 'WOMEN PROFESSIONAL',description:'lorem ipsum lorem ipsum lorem ipsum', thumbnail: womendress, path: '/categories/Women-Professional' },
  { title: 'W0MEN CASUAL',description:'lorem ipsum lorem ipsum lorem ipsum', thumbnail: womencasual, path: '/categories/Women-Traditional' },
  { title: 'KIDS CASUAL',description:'lorem ipsum lorem ipsum lorem ipsum', thumbnail: kidscasual, path: '/categories/Kids-Casual' },
  { title: 'KIDS TRADITIONAL',description:'lorem ipsum lorem ipsum lorem ipsum', thumbnail: kidstraditional, path: '/categories/Kids-Traditional' },
  { title: 'KIDS TRADITIONAL',description:'lorem ipsum lorem ipsum lorem ipsum', thumbnail: download, path: '/categories/Kids-Casual' },

];

function HomePage() {
    const data={
        name:"megazone",
      }
    
  return (
    <div className="home-page">
      <Carasol/>
      <Navbar/>
      {/* <div class="parallax"></div> */}

        
        <ImageProduct myData={data}/>
        {/* <div class="parallax1"></div> */}
      <h1 className='product'>SHOP BY CATEGORY</h1>
      <div className="category-list">
        {categories.map((category, index) => (
          <CategoryItem key={index} title={category.title} description={category.description} thumbnail={category.thumbnail} path={category.path} />
        ))}
      </div>
      <h1 className='product'>ABOUT MEGAZONE</h1>

      <About/>
      {/* <div class="parallax2"></div> */}
      <Footer/>
    </div>
  );
}

export default HomePage;
