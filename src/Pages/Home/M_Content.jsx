import React, { useContext, useState } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { IoMdShare, IoMdEye } from 'react-icons/io';
import './Home.css';
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { dataProvider } from '../../Components/ContextProvider/NewsDataProvider';

const M_Content = () => {
   const { news } = useContext(dataProvider)
   const [expandedCard, setExpandedCard] = useState(null); // Store expanded card ID
   const handleShowHideNewsDetails = (id) => {
      setExpandedCard((prevId) => (prevId === id ? null : id)); // Toggle  based on the card ID
   };
   return (
      <div className="ms-2">
         {news.map((N) => (
            <div key={N._id} className="mb-5 text-black bg-gray-50 p-3 rounded-lg">
               {/* Card header */}
               <div className="flex justify-between items-center bg-gray-200 p-2 rounded-t">
                  <div className="flex">
                     <img className="w-[40px] h-[40px] border border-gray-300 rounded-full object-center me-2 " src={N.author.img} alt="author"
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
               <Link to={`/news/${N._id}`}>
                  {/* Card title */}
                  <p className="text-lg font-semibold my-3">{N.title}</p>
                  {/* Card thumbnail */}
                  <img className="w-full h-[280px] object-cover object-center mx-auto rounded-sm" src={N.image_url} alt=""
                  />
               </Link>
               {/* Card details */}
               {N.details && <p
                  className={`my-2 text-justify font-light ${expandedCard === N._id ? "expanded_news_details" : "news_details"
                     }`}
               >
                  {expandedCard === N._id ? N.details : N.details.slice(0, 270) + "..."}
               </p>}
               {N.details && N.details.length > 270 && <button className="text-blue-800 ms-2" onClick={() => handleShowHideNewsDetails(N._id)}
               >
                  {expandedCard === N._id ? "Show Less" : "Show More"}
               </button>}
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
