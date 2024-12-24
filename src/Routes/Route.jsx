import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import NewsDetails from "../Pages/ViewDetails/NewsDetails";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />
         },
         {
            path: "/news/:id",
            element: <NewsDetails />,
         }
      ]
   }
]);
export default router;