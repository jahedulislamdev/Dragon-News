import React, { useContext, useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navigation/Navbar';
import { dataProvider } from '../../Components/ContextProvider/NewsDataProvider';
import toast, { Toaster } from 'react-hot-toast';

const Registration = () => {
   const [showPass, setShowPass] = useState(false);
   const { createUser, setUser } = useContext(dataProvider);
   const handlesubmit = (e) => {
      e.preventDefault();
      const UserData = new FormData(e.currentTarget)
      const Email = UserData.get("email");
      const Name = UserData.get("name")
      const Profile = UserData.get("photo")
      const Password = UserData.get("password")

      //create new user
      createUser(Email, Password)
         .then((userCredential) => {
            setUser(userCredential.user)
            e.target.reset();
            toast.success("User Registerd Successfully !")
         })
         .catch(err => {
            toast.error(err.code)
            console.error(err)
         })
   }
   return (
      <div>
         <Navbar />
         <div className='md:w-3/4 lg:w-2/5 mx-auto h-dvh mt-3'>
            <form onSubmit={handlesubmit} className='border p-5 rounded text-sm font-light'>
               <p className='text-center text-xl font-semibold'>Register Your Account</p>
               <hr className='border border-gray-300 my-3 w-11/12 mx-auto' />
               <div className="form-control mb-3">
                  <label className="label">
                     <span className="label-text font-medium" >Your Name</span>
                  </label>
                  <input type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-gray-100 border focus:outline-none' />
               </div>
               <div className="form-control mb-3">
                  <label className="label">
                     <span className="label-text font-medium">Photo URl</span>
                  </label>
                  <input type="file" name="photo" placeholder='Select your Profile' className='p-2 bg-gray-100 border focus:border-violet-600' />
               </div>
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
                     <span className='label-text'>Accept <a href="">Terms & Conditions</a></span>
                  </div>
               </div>
               <button type='submit' className='w-full bg-gray-700 text-white p-2 mt-3 rounded-sm'>Register</button>
               <p className='mt-2 text-sm'>Already Have an Account ? <Link to={'/login'} className='font-semibold'>Login</Link></p>
            </form>
            <Toaster
               position="top-right"
               reverseOrder={true}
            />
         </div>
      </div>
   );
};

export default Registration;