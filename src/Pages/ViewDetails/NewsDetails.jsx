import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { dataProvider } from '../../Components/ContextProvider/NewsDataProvider';
import RS_Content from '../Home/RS_Content';
import { FaArrowLeftLong } from "react-icons/fa6";
const NewsDetails = () => {
   const { news } = useContext(dataProvider)
   const { id } = useParams() //access id based on the selected news;
   const selectedNews = news.find(item => item._id === id)
   //loading news condition   
   if (!news || news.length === 0) {
      return <div>Loading <span className="loading loading-dots loading-lg"></span></div>;
   }
   if (!selectedNews) {
      return <p>News not found!</p>
   }
   // 1 step back 
   const navigate = useNavigate();
   return (
      <div className='container mx-auto'>
         <button onClick={() => navigate(-1)} className=' flex border p-1 px-3 bg-gray-300 rounded mb-2 ms-2 items-center'><FaArrowLeftLong className='me-1' /> Back</button>
         <div className='grid grid-cols-4 p-2'>
            <div className='col-span-3 p-2 border rounded-l'>
               <img className="w-full max-h-[390px] mx-auto rounded-sm" src={selectedNews.image_url} alt="" />
               <p className="text-lg font-semibold my-3">{selectedNews.title}</p>
               <p className='font-light text-justify bg-gray-100 p-1'>{selectedNews.details}</p>
               <Link to={"/"} ><button className='flex items-center mt-3 bg-red-600 text-white p-1 rounded text-sm'><FaArrowLeftLong className='me-1' /> All News in this category</button>   </Link>
            </div>
            <div className='border-y border-r rounded-r mx-auto'>
               <RS_Content />
            </div>
         </div>
      </div>
   );
};

export default NewsDetails;