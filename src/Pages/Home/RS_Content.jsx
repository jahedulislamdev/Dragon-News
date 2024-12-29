import React, { useContext } from 'react';
import { FaFacebookSquare, FaGithub, FaGoogle, FaInstagramSquare, } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Swimming from '../../assets/swimming.png'
import PlayGround from '../../assets/playground.png'
import Classroom from '../../assets/class.png'
import { dataProvider } from '../../Components/ContextProvider/NewsDataProvider';
const RS_Content = () => {
   const { createUserWithGoogle, createUserWithGithub } = useContext(dataProvider);
   return (
      <div>
         <p className='text-lg text-slate-500 font-semibold ms-2 mb-3'>Login with</p>
         <div className='px-2'>
            <button onClick={createUserWithGoogle} className='w-full p-2 bg-blue-500 text-white rounded my-1 flex items-center justify-center'><FaGoogle className='me-1' /> Login with Google</button>
            <button onClick={createUserWithGithub} className='w-full p-2 bg-gray-600 text-white rounded my-1 flex items-center justify-center'><FaGithub className='me-1' /> Login with Github</button>
         </div>
         <p className='text-lg ms-2 font-semibold text-slate-500 mt-5'>Find Us On</p>
         <div className=' p-3'>
            <button className='w-full flex items-center border-gray-600 p-3 border rounded-t'> <FaFacebookSquare className='size-6 me-3 text-blue-500' /><a href="https://www.facebook.com/jahedulislam.jishan.9" target='_blank'>Facebook</a></button>
            <button className='w-full flex items-center border-gray-600 p-3 border-x '> <FaInstagramSquare className='size-6 me-3 text-pink-500' /><a href="https://www.instagram.com/m_jishan_2?fbclid=IwY2xjawHeZ7NleHRuA2FlbQIxMAABHW5F768-GZdFVL_2vgIsp7ljRRzpkEDatJ6QH_Z9hKMiQf2DXCc1HtMrUQ_aem_v6vm7Nz89_BW8mfyY6mmYA" target='_blank'>Instagram</a></button>
            <button className='w-full flex items-center border-gray-600 p-3 border rounded-b'> <FaXTwitter className='size-6 me-3' /><a href="https://x.com/JISHAN0002" target='_blank'>Twitter</a></button>
         </div>
         <div>
            <p className='text-lg ms-2 font-semibold text-slate-500 mt-3'>Q-Zone</p>
            <div className='p-2 space-y-2'>
               <img className='mx-auto' src={Swimming} />
               <img className='mx-auto' src={PlayGround} />
               <img className='mx-auto' src={Classroom} />
            </div>
         </div>
      </div>
   );
};

export default RS_Content;