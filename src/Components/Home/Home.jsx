import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import GallerySection from '../GallerySection/GallerySection';

const Home = () => {
      return (
            <div className='mt-3'>
                  <Slider></Slider>
                  <GallerySection></GallerySection>
            </div>
      );
};

export default Home;