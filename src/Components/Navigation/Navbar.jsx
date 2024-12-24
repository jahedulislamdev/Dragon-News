import { FcMenu } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
import UserProfile from '../../assets/user.png'
const Navbar = () => {
   const navItems = <>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/about'}>About</NavLink></li>
      <li><NavLink to={'/career'}>Career</NavLink></li>
   </>
   return (
      <div className="navbar bg-slate-50 m-1">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="lg:hidden">
                  <FcMenu className='size-7'></FcMenu>
               </div>
               <ul tabIndex={0} className="space-y-3 menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {navItems}
               </ul>
            </div>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="space-x-7 menu-horizontal px-1 text-slate-600 font-medium">
               {navItems}
            </ul>
         </div>
         <div className="navbar-end">
            {/* dynamic user image */}
            <div>
               <img className="w-[35px]" src={UserProfile} alt="userProfile" />
            </div>
            <button className="px-4 bg-red-600 text-white py-2 rounded ms-2 text-sm"><Link to={'/login'}>Login</Link></button>
         </div>
      </div>
   );
};

export default Navbar;