import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Register/Provider/AuthProvider';

const PrivateRoute = ({children}) => {
      const location=useLocation();
      const navigation=useNavigate();
      const {user,loading} =useContext(AuthContext);
      if(loading){
            return <p className='text-red-900'>Loading......</p>
        }
      if(user){
            return children;

      }
      
      return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default PrivateRoute;