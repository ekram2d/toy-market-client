import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ExampleComponent() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: false, // Only animate once
    });
  }, []);

  return (
    <div>
      
      <div className="card" data-aos="zoom-in" data-aos-delay="500">
        {/* Card content */}
      </div>
      <ul>
        <li data-aos="fade-right">  <section className="bg-gray-200 py-10 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl mb-4 text-center font-bold" >Customer Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded shadow">
              <p className="mb-4">"Amazing toys! My kids love them!"</p>
              <p className="font-semibold">- John Doe</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <p className="mb-4">"Great quality and fast delivery. Highly recommend!"</p>
              <p className="font-semibold">- Jane Smith</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <p className="">"Toyland has the best selection of toys in town."</p>
              <p className="font-semibold">- Mark Johnson</p>
            </div>
          </div>
        </div>
      </section>
</li>
        
      </ul>
    </div>
  );
}

export default ExampleComponent;
