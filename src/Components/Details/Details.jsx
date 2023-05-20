import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../PROvider/PRvider';

const Details = () => {
      const _id = useParams();
      const { id } = _id;
      const { user } = useContext(AuthContext);
      console.log("ki", user)
      const singledata= useLoaderData()
      // useEffect(() => {
      //       fetch(`http://localhost:5000/singleservices/${id}`)
      //             .then(res => res.json())
      //             .then(data => setSingledata(data))
      // }, [])
      console.log(singledata);
      //    if(!user){
      //       alert("first login")

      //       useNavigate('/login') picture, toy name, seller name, seller email, price, rating, available quantity, and detail description
      //       return
      //    }
      const { pictureUrl, name, sellerName, sellerEmail, price, rating, availableQuantity, description } = singledata;
      return (
            <div className="card  w-[80%]lg:card-side bg-base-100 shadow-xl mt-24">
                  <figure><img className='lg:w-[50%] rounded-lg' src={pictureUrl} alt="Album" /></figure>
                  <div className=" justify-start lg:w-[50%] mx-auto lg:flex flex-col mt-3">
                        <h2 className="card-title">Name:{name}</h2>
                        <div className='flex'>
                        <p className='font-bold'>Seller Name: </p>
                        <p>{sellerName}</p>
                        </div>
                        <div className='flex'>
                        <p className='font-bold'>Seller Email: </p>
                        <p>{sellerEmail}</p>
                        </div>
                        <div className='flex'>
                        <p className='font-bold'>Price: </p>
                        <p>${price}</p>
                        </div>
                        <div className='flex'>
                        <p className='font-bold'>Rating: </p>
                        <p>{rating}</p>
                        </div>
                        <div className='flex'>
                        <p className='font-bold'>availableQuantity: </p>
                        <p>{availableQuantity}</p>
                        </div>
                        <div className='flex'>
                        <p className='font-bold'>description: </p>
                        <p>{description}</p>
                        </div>
                       
                  </div>
            </div>
      );
};

export default Details;