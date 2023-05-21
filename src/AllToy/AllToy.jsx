import React, { useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';




const AllToy = () => {
      const toys = useLoaderData();
      const location = useLocation();
      const [text,setText]=useState();

      // console.log("lo",location);
      // console.log(toys);
console.log(text)
      return (
            <div className="w-full">
                  {/* <h1>{location.pathname}</h1> */}
                 <div className='flex items-center justify-center m-3 gap-2'><input type='text' className='rounded p-1 text-white' onChange={e=>setText(e.target.value)}></input> <button className='rounded bg-black text-white p-1'>search</button></div>
                  <table className="table table-compact w-full">
                        <thead>
                              <tr>
                                    <th></th>
                                    <th>Seller</th>
                                    <th>Toy Name</th>
                                    <th>Sub-Category</th>
                                    <th>Price</th>
                                    <th>Avialble Quantity</th>
                                  
                              </tr>
                        </thead>
                        <tbody>
                              {toys?.map((toy, index) =>

                                    <tr>
                                          <th>{index + 1}</th>
                                          <td>{toy?.sellerName}</td>
                                          <td>{toy?.name}</td>
                                          <td>{toy?.subCategory}</td>
                                          <td>{toy?.price}</td>
                                          <td>{toy?.availableQuantity}</td>

                                          <td> <Link to={`/singletoy/${toy._id}`}> <button className="btn btn-sm">Veiw Details</button></Link> </td>

                                    </tr>


                              ) }

                        </tbody>

                  </table>
            </div>
      );
};

export default AllToy;