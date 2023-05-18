import React from 'react';

const GallerySection = () => {
  const images = [
    {
      id: 1,
      src: 'https://lh3.googleusercontent.com/-3fnAQoD-mQw/WYUfTWMsGvI/AAAAAAAAOhc/_bQb_hCZ3QcNvgpitQxM4J6TNNg9X6aAACHMYCw/s640/blogger-image--627737948.jpg',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: 'https://geekout.ph/images/ToyRack/tk-expo-discounts.jpg',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: 'https://cdn.applianceretailer.com.au/wp-content/uploads/2016/11/31102046/Retail-discounts-740x432.jpg',
      alt: 'Image 3',
    },
    // Add more images as needed
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img  src={image.src} alt={image.alt} className="w-full h-40 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
