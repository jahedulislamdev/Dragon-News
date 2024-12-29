import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import NewsDetails from "../Pages/ViewDetails/NewsDetails";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "../Private/PrivateRoute";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      children: [
         { path: "/", element: <Home /> },
         { path: "/news/:id", element: <PrivateRoute><NewsDetails /></PrivateRoute>, },
         { path: "/login", element: <Login /> },
         { path: "/registration", element: <Registration /> },
         { path: "/about", element: <About /> },
         { path: "/career", element: <Career /> }
      ]
   }
]);
export default router;