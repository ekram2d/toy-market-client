import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    
            const [error, setError] = useState(null);
      const handleLogin = (event) => {
            event.preventDefault();
            setError("");
            const form = event.target;
            // console.log(form)
            const email = form.email.value;
            const password = form.password.value;

            if (password.length < 6) {
                  setError('password must be at least 6 character')
                  return;
            }
            console.log(email, password)


      }
      return (
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex">
                        <div className="text-center ">
                              <h1 className="text-5xl font-bold">Register now!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                    <form onSubmit={handleLogin}>

                                    <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">User Name</span>
                                                </label>
                                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                          </div>


                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">User Image Url</span>
                                                </label>
                                                <input type="text" name="url" placeholder="url" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                                <label className="label">
                                                      <p>Have account? <Link to="/login" className="label-text-alt link link-hover font-bold">Go Login</Link></p>
                                                </label>
                                          </div>
                                          <div className="form-control mt-6">
                                                <input type="submit" value="Register" className="btn btn-primary" />

                                          </div>
                                    </form>
                                    <div>
                                          <p className='text-red-700'>{error}</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;