import React, { useEffect, useState } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { IoMdShare, IoMdEye } from 'react-icons/io';
import './Home.css';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from "react-icons/fa6";

const M_Content = () => {
   const [news, setNews] = useState([]);
   const [expandedCard, setExpandedCard] = useState(null); // Store expanded card ID

   useEffect(() => {
      fetch("news.json")
         .then(res => res.json())
         .then(data => setNews(data));
   }, []);

   const handleShowHideNewsDetails = (id) => {
      setExpandedCard((prevId) => (prevId === id ? null : id)); // Toggle based on the card ID
   };

   return (
      <div className="m-2">
         {news.map((N) => (
            <div key={N._id} className="mb-5 text-black bg-gray-50 p-3 rounded-lg">
               {/* Card header */}
               <div className="flex justify-between items-center bg-gray-200 p-3 rounded-t">
                  <div className="flex">
                     <img className="w-[40px] h-[40px] rounded-full object-center me-2" src={N.author.img} alt="author"
                     />
                     <div>
                        <p className="font-medium">{N.author.name}</p>
                        <p className="font-light text-sm">{N.author.published_date}</p>
                     </div>
                  </div>
                  <div className="flex items-center justify-around space-x-2">
                     <button>
                        <CiBookmark className="size-6" />
                     </button>
                     <button>
                        <IoMdShare className="size-6" />
                     </button>
                  </div>
               </div>
               {/* Card title */}
               <p className="text-lg font-semibold my-3">{N.title}</p>
               {/* Card thumbnail */}
               <img className="w-full h-[280px] object-cover object-center mx-auto rounded-sm" src={N.image_url} alt=""
               />
               {/* Card details */}
               <p
                  className={`my-2 text-justify font-light ${expandedCard === N._id ? "expanded_news_details" : "news_details"
                     }`}
               >
                  {expandedCard === N._id ? N.details : N.details.slice(0, 270) + "..."}
               </p>
               <button className="text-blue-800" onClick={() => handleShowHideNewsDetails(N._id)}
               >
                  {expandedCard === N._id ? "Show Less" : "Show More"}
               </button>
               <hr className='border border-gray-300 mt-3 px-9' />
               <div className='flex justify-between items-center'>
                  <div className='flex space-x-2 my-2'>
                     <FaStar className='text-yellow-700 size-5' />
                     <FaStar className='text-yellow-700 size-5' />
                     <FaStar className='text-yellow-700 size-5' />
                     <FaStar className='text-yellow-700 size-5' />
                     <FaRegStarHalfStroke className='text-yellow-700 size-5' />
                     <p>{N.rating.number} </p>
                  </div>
                  <div className='flex space-x-3 justify-center'>
                     <IoMdEye className='size-6 text-gray-600' />
                     <p>{N.total_view}</p>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default M_Content;
