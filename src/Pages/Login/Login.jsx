import React, { useContext, useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navigation/Navbar';
import { dataProvider } from '../../Components/ContextProvider/NewsDataProvider';
import toast, { Toaster } from 'react-hot-toast';
const Login = () => {
   const [showPass, setShowPass] = useState(false);
   const { userLogin, setUser, user } = useContext(dataProvider);
   const [err, setErr] = useState(null);
   const location = useLocation();
   const navigateAfterLogin = useNavigate();
   const handlesubmit = (e) => {
      e.preventDefault();
      setErr("");
      const UserData = new FormData(e.currentTarget)
      const Email = UserData.get("email");
      const Password = UserData.get("password")
      //varify email  with regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(Email)) {
         setErr("Unauthorized Email, Enter a vlid Email.");
         return;
      }
      //create new user
      if (user) {
         toast.error("You are Already Logged In")
         return;
      }
      userLogin(Email, Password)
         .then((userCredential) => {
            setUser(userCredential.user)
            navigateAfterLogin(location?.state ? location.state : '/') //navigate after login
            e.target.reset();
            toast.success("User Login Successfully !")
         })
         .catch(err => {
            if (err.code == "auth/invalid-credential") {
               toast.error("Invalid Email or Password")
            } else {
               toast.error(err.code)
            }
         })
   }
   return (
      <div>
         <Navbar />
         <div className='md:w-3/4 lg:w-2/5 mx-auto h-dvh'>
            <form onSubmit={handlesubmit} className='border p-5 rounded text-sm font-light mt-3'>
               <p className='text-center text-xl font-semibold'>Login Your Account</p>
               <hr className='border border-gray-300 my-5 w-11/12 mx-auto' />
               <div className="form-control mb-3">
                  <label className="label">
                     <span className="label-text font-medium">Email</span>
                  </label>
                  <input type="email" name="email" placeholder='example@gmail.com' className='p-2 bg-gray-100 border focus:outline-none' required />
                  <p className='text-red-600 text-xs p-1'>{err}</p>
               </div>
               <div className="form-control mb-3">
                  <label className="label">
                     <span className="label-text font-medium">Password</span>
                  </label>
                  <div className="join">
                     <input type={showPass ? "text" : "password"} name="password" placeholder='Enter Your Password' className='rounded-none w-full join-item p-2 bg-gray-100 border focus:outline-none' />
                     <button onClick={() => setShowPass(!showPass)} type='button' className='join-item p-1 bg-gray-100 border-r border-y rounded-none'> {showPass ? <IoEyeOutline className='size-5' /> : <IoEyeOffOutline className='size-5' />} </button>
                  </div>
               </div>
               <div className="form-control">
                  <div className="flex space-x-1 items-center">
                     <input type="checkbox" className="checkbox-xs checkbox rounded border-gray-700" />
                     <span className='label-text'>Remember me</span>
                  </div>
               </div>
               <button type='submit' className='w-full bg-gray-700 text-white p-2 mt-3 rounded-sm'>Login</button>
               <p className='mt-2 text-sm'>Don't Have an Account? <Link to={'/registration'} className='font-semibold'>Register</Link></p>
            </form>
            <Toaster
               position="top-right"
               reverseOrder={true}
            />
         </div>
      </div>
   );
};

export default Login;