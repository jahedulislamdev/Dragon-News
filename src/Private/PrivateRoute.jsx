import React, { useContext } from 'react';
import { dataProvider } from '../Components/ContextProvider/NewsDataProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
   const { user, loader } = useContext(dataProvider);
   if (loader) {
      return <span className="loading loading-dots loading-lg"></span>;
   }
   if (user) {
      return children;
   }
   return <Navigate to={"/login"}></Navigate>
};

export default PrivateRoute;