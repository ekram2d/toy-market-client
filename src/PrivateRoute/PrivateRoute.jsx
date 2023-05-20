import React, { useContext } from 'react';

import { Navigate, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from '../PROvider/PRvider';

const PrivateRoute = ({ children }) => {

      const location = useLocation();
      const navigate = useNavigate();
      const { user,  loading} = useContext(AuthContext);
      console.log("orrr",user?.email);

      if (loading) {
            <progress className="progress w-56"></progress>
      }
      if (user) {
            return children;

      }



      return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;