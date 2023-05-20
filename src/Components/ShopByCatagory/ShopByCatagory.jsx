import React from 'react';
import { Link } from 'react-router-dom';

const ShopByCatagory = ({ds}) => {
  // console.log(ds)

      const {_id,number,pictureUrl,name,price,rating}=ds
      return (
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-[50%] rounded-lg' src={pictureUrl} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>Price: ${price}</p>
              <p>Ratting: {rating}</p>
              <div className="card-actions justify-end">
             <Link to={`/details/${_id}`}> <button className="btn btn-sm">Veiw Details</button></Link> 
                
              </div>
            </div>
          </div>
      );
};

export default ShopByCatagory;