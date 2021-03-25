// this will automatically send user to login screen from root path

import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const ProtectedRoute = ({component: Component, ...rest}) => {
  const {authenticated} = useContext(AuthContext)
  return (
    <Route  
      {...rest} 
      render={(props) => authenticated ? 
        (<Component {...props}/>) 
        : 
        (<Redirect to={{
            pathname:'/login'
          }}
        />)}
    />
   
  )
}



export default ProtectedRoute;