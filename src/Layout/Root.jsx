import { Outlet } from "react-router-dom";

const Root = () => {
   return (
      <div className="font-popins bg-white px-3">
         <Outlet></Outlet>
      </div>
   );
};

export default Root;