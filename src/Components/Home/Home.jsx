import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import GallerySection from '../GallerySection/GallerySection';
import TabsSection from '../TabsSection/TabsSection';
import Delivery from '../../Delivery';
import ToyWebsite from '../../ToyWebsite';
import AOS from 'aos';
import 'aos/dist/aos.css'
import ExampleComponent from './ExampleComponent';

const Home = () => {
      
      return (
            <div className='mt-10'>
                  <Slider></Slider>
                  <GallerySection></GallerySection>
                  <TabsSection></TabsSection>
                  
                  <Delivery></Delivery>
                  {/* <ToyWebsite></ToyWebsite> */}
                  <ExampleComponent></ExampleComponent>
      
            </div>
      );
};

export default Home;