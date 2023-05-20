import { GithubAuthProvider, GoogleAuthProvider, getAuth } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../PROvider/PRvider';
const auth = getAuth(app);
const Login = () => {
      const [error, setError] = useState(null);
      
      const Provider = new GoogleAuthProvider();

      const navigate = useNavigate();
      const location = useLocation();
      const { signIn, LogWithGoogle } = useContext(AuthContext);

      // console.log('dddddd',location.state.from);

      const from = location.state?.from?.pathname || '/'
      const handleLogin = (event) => {
            event.preventDefault();
            setError("");
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;

            if (password.length < 6) {
                  setError('password must be at least 6 character')
                  return;
            }
            signIn(email, password)
                  .then(result => {
                        const singUser = result.user;
                        // console.log(singUser);
                        navigate(from)
                  })
                  .catch(error => {
                        setError(error.message);
                  })

      }
      const handleGoogleSignIn = () => {
            // console.log("gihub mama is coming")
            LogWithGoogle(auth, Provider)
                  .then(result => {
                        const user = result.user;

                        // console.log(user);
                        navigate(from)
                  })
                  .catch((error) => setError(error))

      }

      return (
            <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col lg:flex">
                        <div className="text-center ">
                              <h1 className="text-5xl font-bold">Login now!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                    <form onSubmit={handleLogin}>


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
                                                      <p>Have account? <Link to="/register" className="label-text-alt link link-hover font-bold">Go Register</Link></p>
                                                </label>
                                          </div>

                                          <div className="form-control mt-6">
                                                <input type="submit" value="Login" className="btn btn-primary" />

                                          </div>
                                    </form>
                                   

                                    <div>
                                    <div className='text-center'>
                                          <button onClick={handleGoogleSignIn} type="submit" className="btn btn-outline btn-danger">Google Login</button>


                                    </div>
                                          <p className='text-red-700'>{error}</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;