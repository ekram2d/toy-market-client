import React, { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../Register/Provider/AuthProvider';




const Header = () => {
      const { user, Logout } = useContext(AuthContext);
      const [showtxt, setShowtxt] = useState(false)
      // console.log(user.photoURL            )
      // console.log("he",user?.displayName)
      const handleLogout = () => {

            Logout()
                  .then((result) => {

                  })
                  .catch(error => {

                  })

      }
      return (
            <div className='mb-40'>
                  <div className="navbar bg-base-300 rounded-lg">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                          <li> <NavLink to="/">Home</NavLink></li>
                                          <li> <NavLink to="/blog">Blog</NavLink></li>
                                          <li> <NavLink to="/toy">All ToY</NavLink></li>
                                         {
                                          user && <><li> <NavLink to="/addToy">Add Toy</NavLink></li>
                                          <li> <NavLink to="/mytoys">My Toys</NavLink></li></> 
                                         }

                                    </ul>
                              </div>
                              <a className=" text-xl font-bold uppercase">Amazon Toys
                              </a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                    <li> <NavLink to="/">Home</NavLink></li>
                                    <li> <NavLink to="/blog">Blog</NavLink></li>
                                    <li> <NavLink to="/toy">All ToY</NavLink></li>
                                    {
                                          user && <><li> <NavLink to="/addToy">Add Toy</NavLink></li>
                                          <li> <NavLink to="/mytoys">My Toys</NavLink></li></> 
                                         }
                              </ul>
                        </div>



                        <div className="navbar-end">
                              <span>
                                    {user && <div className='d-flex flex-col relative '>
                                          <div className='block '>
                                                <img className='rounded w-[50%]'

                                                      src={user.photoURL}
                                                      roundedCircle
                                                      onMouseEnter={() => setShowtxt(true)}
                                                      onMouseLeave={() => setShowtxt(false)}
                                                />
                                          </div>
                                          <div> <NavLink
                                                className='absolute text-decoration-none fw-bolder text-xl font-bold bottom-1 text-red-700'
                                          >
                                                {showtxt && user.displayName}
                                          </NavLink></div>

                                    </div>}
                              </span>


                              <div>
                                    {
                                          user ? <button className=" btn btn-light " variant="secondary" onClick={handleLogout}>Logout</button> :
                                                <button className=" btn btn-light "><NavLink to='/login'
                                                      className={`${location.pathname === '/' ? '' : ''} text-decoration-none text-dark font-weight-bold`}
                                                >Login</NavLink></button>
                                    }
                              </div>
                        </div>
                  </div >
            </div>
      );
};

export default Header;