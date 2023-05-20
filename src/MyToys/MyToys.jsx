import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../PROvider/PRvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
      const { user } = useContext(AuthContext);
      // console.log(user?.email);
      const [toys, setBooking] = useState([]);
      const [load, setLoad] = useState(true);
      const url = `http://localhost:5000/bookings?email=${user?.email}`
      useEffect(() => {
            fetch(url)
                  .then(res => res.json())
                  .then(data => setBooking(data))
      }, [load])
      console.log(toys)
      return (
            <div>
                  <div className="w-full">
                        {/* <h1>{location.pathname}</h1> */}
                        <table className="table table-compact w-full">
                              <thead>
                                    <tr>
                                          <th></th>
                                          <th>Seller</th>
                                          <th>Toy Name</th>
                                          <th>Sub-Category</th>
                                          <th>Price</th>
                                          <th>Avialble Quantity</th>
                                          <th>Update</th>
                                          <th>Delete</th>
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

                                                <td> <button className="btn btn-outline btn-primary">Update</button>
                                                     
                                                </td>
                                                <td>
                                                <button className="btn btn-outline btn-secondary">Delete</button>
                                                </td>

                                          </tr>


                                    )}

                              </tbody>

                        </table>
                  </div>

            </div>
      );
};

export default MyToys;