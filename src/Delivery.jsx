import React from 'react';

const Delivery = () => {
      const deliveryTeam = [
            {
              name: 'John Doe',
              position: 'Delivery Manager',
              image: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
            },
            {
              name: 'Jane Smith',
              position: 'Delivery Driver',
              image: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
            },
            {
              name: 'Mark Johnson',
              position: 'Delivery Associate',
              image: 'https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg',
            },
            // Add more delivery personnel here
          ];
      return (
            <div>
                  <section className="py-10 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl mb-4 text-center">Our Delivery Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryTeam.map((member, index) => (
              <div key={index} className="p-4 bg-white rounded shadow">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-lg">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
                  
            </div>
      );
};

export default Delivery;