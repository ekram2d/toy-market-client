import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';




const AllToy = () => {
      const toys1 = useLoaderData();
      const location = useLocation();
      const [text,setText]=useState("");

      const[toys,setToys]=useState(toys1)
      const [set,setD]=useState(true)
      const url = `https://server-fawn-chi.vercel.app/search?name=${text}`
      useEffect(() => {
            fetch(url)
                  .then(res => res.json())
                  .then(data => setToys(data))
      }, [set])
      // console.log("lo",location);
      // console.log(toys);
      
// console.log(text)
const handletext=()=>{
      console.log(text);
      setD(!set)
      // http://localhost:5001/search?name=Building%20and%20Construction%20Toy
}
      return (
            <div className="w-full">
                  {/* <h1>{location.pathname}</h1> */}
                 <div className='flex items-center justify-center m-3 gap-2'><input type='text' className='rounded p-1 text-white' onChange={e=>setText(e.target.value)} placeholder='search by TOY NAME'></input> <button onClick={handletext} className='rounded bg-black text-white p-1'>search</button></div>
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