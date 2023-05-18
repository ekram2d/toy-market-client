import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import GallerySection from '../GallerySection/GallerySection';
import TabsSection from '../TabsSection/TabsSection';

const Home = () => {
      return (
            <div className='mt-3'>
                  <Slider></Slider>
                  <GallerySection></GallerySection>
                  <TabsSection></TabsSection>
            </div>
      );
};

export default Home;