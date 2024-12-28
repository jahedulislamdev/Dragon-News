import React, { useContext, useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navigation/Navbar';
import { dataProvider } from '../../Components/ContextProvider/NewsDataProvider';
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';

const Registration = () => {
   const [showPass, setShowPass] = useState(false);
   const { createUser, user, setUser } = useContext(dataProvider);
   const [passErr, SetPassErr] = useState("");

   const handlesubmit = (e) => {
      e.preventDefault();
      SetPassErr("");

      const UserData = new FormData(e.currentTarget);
      const Email = UserData.get("email");
      const Name = UserData.get("name");
      const Profile = UserData.get("photo"); // You may need to handle file uploads
      const Password = UserData.get("password");
      const termsAccepted = e.target.terms.checked
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(Password)) {
         SetPassErr("Password must contain at least 8 characters, including letters, numbers, and symbols.");
         return;
      }

      if (!termsAccepted) {
         toast.error("You must accept the Terms & Conditions");
         return;
      }

      createUser(Email, Password)
         .then((userCredential) => {
            updateProfile(userCredential.user, {
               displayName: Name,
               photoURL: Profile,
            }).then(() => {
               setUser(userCredential.user);
               console.log(userCredential.user);
               e.target.reset();
               toast.success("User Registered Successfully!");
            })
            return;
         })
         .catch(err => {
            toast.error(err.code);
         });
   };

   return (
      <div>
         <Navbar />
         <div className='md:w-3/4 lg:w-2/5 mx-auto h-dvh mt-3'>
            <form onSubmit={handlesubmit} className='border p-5 rounded text-sm font-light'>
               <p className='text-center text-xl font-semibold'>Register Your Account</p>
               <hr className='border border-gray-300 my-3 w-11/12 mx-auto' />
               <div className="form-control mb-3">
                  <label className="label">
                     <span className="label-text font-medium">Your Username</span>
                  </label>
                  <input type="text" name="name" placeholder='@username' className='p-2 bg-gray-100 border focus:outline-none' required />
               </div>
               <div className="form-control mb-3">
                  <label className="label">
                     <span className="label-text font-medium">Photo URL</span>
                  </label>
                  <input type="url" name="photo" className='p-2 bg-gray-100 border focus:border-violet-600' />
               </div>
               <div className="form-control mb-3">
                  <label className="label">
                     <span className="label-text font-medium">Email</span>
                  </label>
                  <input type="email" name="email" placeholder='example@gmail.com' className='p-2 bg-gray-100 border focus:outline-none' required />
               </div>
               <div className="form-control mb-3">
                  <label className="label">
                     <span className="label-text font-medium">Password</span>
                  </label>
                  <div className="join">
                     <input type={showPass ? "text" : "password"} name="password" placeholder='Enter Your Password' required className='rounded-none w-full join-item p-2 bg-gray-100 border focus:outline-none' />
                     <button
                        onClick={(e) => {
                           e.preventDefault();
                           setShowPass(!showPass);
                        }}
                        type='button'
                        className='join-item p-1 bg-gray-100 border-r border-y rounded-none'
                     >
                        {showPass ? <IoEyeOutline className='size-5' /> : <IoEyeOffOutline className='size-5' />}
                     </button>
                  </div>
                  <p className='text-sm text-red-600 p-1'>{passErr}</p>
               </div>
               <div className="form-control">
                  <div className="flex space-x-1 items-center">
                     <input name='terms' type="checkbox" className="checkbox-xs checkbox rounded border-gray-700" />
                     <span className='label-text'>Accept <a href="">Terms & Conditions</a></span>
                  </div>
               </div>
               <button type='submit' className='w-full bg-gray-700 text-white p-2 mt-3 rounded-sm'>Register</button>
               <p className='mt-2 text-sm'>Already Have an Account? <Link to={'/login'} className='font-semibold'>Login</Link></p>
            </form>
            <Toaster position="top-right" reverseOrder={true} />
         </div>
      </div>
   );
};

export default Registration;
