import React from 'react';

const Slider = () => {
      return (
            <div className="carousel w-full mt-40">
                  <div id="slide1" className="carousel-item relative w-full">
                        <img  src="https://www.familyofchildhood.com/wp-content/uploads/2019/08/K155-2.jpg" className="w-[70%] h-[70%] mx-auto rounded-xl" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="btn btn-circle">❮</a>
                              <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://5.imimg.com/data5/RG/MZ/GA/SELLER-28944391/website-development-services-500x500.jpg" className="w-[70%]  h-[70%] mx-auto rounded-xl"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn btn-circle">❮</a>
                              <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://www.webmaxit.com/assets/images/os03.png"className="w-[70%] h-[70%] mx-auto rounded-xl" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn btn-circle">❮</a>
                              <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                  </div>
                  
            </div>
      );
};

export default Slider;