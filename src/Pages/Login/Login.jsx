import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Login = () => {
   const [showPass, setShowPass] = useState(false);
   return (
      <div className='md:w-3/4 lg:w-2/5 mx-auto h-dvh'>
         <form className='border p-5 rounded text-sm font-light'>
            <p className='text-center text-xl font-semibold'>Login Your Account</p>
            <hr className='border border-gray-300 my-5 w-11/12 mx-auto' />
            <div className="form-control mb-3">
               <label className="label">
                  <span className="label-text font-medium">Email</span>
               </label>
               <input type="email" name="email" placeholder='example@gmail.com' className='p-2 bg-gray-100 border focus:outline-none' />
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
      </div>
   );
};

export default Login;