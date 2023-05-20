import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../PROvider/PRvider';
import Swal from 'sweetalert2'
// const Swal = require('sweetalert2')
const AddToy = () => {
      const { user } = useContext(AuthContext);
      
      // console.log(user);
      //  pictureUrl, name, sellerName, sellerEmail, price, rating, availableQuantity, description
      const handleBookService = event => {
            event.preventDefault();

            const form = event.target;
            const pictureUrl = form.url.value;
            const name = form.toyname.value;
            const sellerName = user?.displayName;
            const sellerEmail = user?.email;
            const subCategory = form.subcata.value;
            const price = form.price.value;
            const rating = form.rating.value;
            const availableQuantity = form.quantity.value;
            const description = form.detail.value;
        
            const number = 1;
            const booking = {
                  number,
                  pictureUrl,
                  name,
                  sellerName,
                  sellerEmail,
                  subCategory,
                  price,
                  rating,
                  availableQuantity,
                  description

            }

            // console.log(booking);

            fetch('http://localhost:5000/bookings', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(booking)
            })
                  .then(res => res.json())
                  .then(data => {
                        // console.log(data);
                        if (data.insertedId) {
                              // alert('service book successfully')
                              Swal.fire({
                                    title: 'Success!',
                                    text: 'add toy successfully',
                                    icon: 'success',
                                    confirmButtonText: 'OK'
                                  })
                        }
                  })

      }

      return (
            <div>
                  {/* <h2 className='text-center text-3xl'>Book Service: {title} </h2> */}
                  <form onSubmit={handleBookService}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Picture Url</span>
                                    </label>
                                    <input type="text" defaultValue="" name="url" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="toyname" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Seller name</span>
                                    </label>
                                    <input type="text" name="sellername" defaultValue={user?.displayName} className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">seller Email</span>
                                    </label>
                                    <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                              </div>





                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Sub Catagory</span>
                                    </label>
                                    <input type="text" name="subcata" defaultValue="" placeholder="" className="input input-bordered" required />
                              </div>

                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name="price" defaultValue="" placeholder="" className="input input-bordered" required />
                              </div>

                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" name="rating" defaultValue="" placeholder="" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Availavle Quantity</span>
                                    </label>
                                    <input type="number" name="quantity" defaultValue="" placeholder="" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Detail Description</span>
                                    </label>
                                    <input type="text" name="detail" defaultValue="" placeholder="" className="input input-bordered" required />
                              </div>
                        </div>
                        <div className="form-control mt-6">
                              <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" required />
                        </div>
                  </form>
                  <div className="card-body">

                  </div>
            </div>
      );
};

export default AddToy;