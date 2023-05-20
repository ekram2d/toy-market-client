import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToy = () => {
      const toys = useLoaderData();
      console.log(toys);
      return (
            <div className="w-full">
                  <table className="table table-compact w-full">
                        <thead>
                              <tr>
                                    <th></th>
                                    <th>Seller</th>
                                    <th>Toy Name</th>
                                    <th>Sub-Category</th>
                                    <th>Price</th>
                                    <th>Avialble Quantity</th>
                                    <th>Veiw Details</th>
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

                                          <td> <Link to={`/details/${toy?._id}`}> <button className="btn btn-sm">Veiw Details</button></Link> </td>

                                    </tr>


                              )}

                        </tbody>

                  </table>
            </div>
      );
};

export default AllToy;