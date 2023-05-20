import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../PROvider/PRvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
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
      // console.log(toys)
      const handledelete=(id)=>{
            console.log(id);
            const proceed = confirm("Are sure to delete");
            if(proceed) {
                  fetch(`http://localhost:5000/bookings/${id}`,{
                        method:'DELETE'
                  })
                  .then(res=>res.json())
                  .then(data =>{
                        console.log(data);
                        if(data.deletedCount>=1) {
                        setLoad(!load)
                        Swal.fire({
                              title: 'Success!',
                              text: 'Delete toy successfully',
                              icon: 'success',
                              confirmButtonText: 'OK'
                            })

                        }
                  })
            }
      }

      const handleUpdate=(id)=>{
            console.log(id)
            const proceed = confirm("Are sure to delete");
            if(proceed) {
                  fetch(`http://localhost:5000/bookings/${id}`,{
                        method:'PATCH',
                        headers:{
                              'content-type':'application/json'
                        },
                        body:JSON.stringify()
                  })
                  .then(res=>res.json())
                  .then(data =>{
                        console.log(data);
                        if(data.modifiedCount>0) {
                        setLoad(!load)
                        Swal.fire({
                              title: 'Success!',
                              text: 'Updated toy successfully',
                              icon: 'success',
                              confirmButtonText: 'OK'
                            })

                        }
                  })
            }
      }

      
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

                                                <td> 
                                                      
                                                      <Link to={`/updated/${toy._id}`}><button className="btn btn-outline btn-primary" >Update</button></Link> 
                                                     
                                                </td>
                                                <td>
                                                <button className="btn btn-outline btn-secondary" onClick={()=>handledelete(toy._id)}>Delete</button>
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