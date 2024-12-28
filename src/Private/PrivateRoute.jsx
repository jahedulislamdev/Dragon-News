import React, { useContext } from 'react';
import { dataProvider } from '../Components/ContextProvider/NewsDataProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
   const { user, loader } = useContext(dataProvider);
   const clickedRoute = useLocation()
   console.log(clickedRoute.pathname);
   if (loader) {
      return <span className="loading loading-dots loading-lg"></span>;
   }
   if (user) {
      return children;
   }
   return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;