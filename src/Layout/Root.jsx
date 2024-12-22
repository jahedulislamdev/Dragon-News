import { Outlet } from "react-router-dom";

const Root = () => {
   return (
      <div className="font-popins p-3 bg-white">
         <Outlet></Outlet>
      </div>
   );
};

export default Root;