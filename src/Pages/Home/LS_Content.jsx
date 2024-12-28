import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import demoCard from '../../assets/demo-card-thumbnail.png'
import { CiCalendar } from 'react-icons/ci';
import demo2 from "../../assets/demo 2.png"
import demo3 from "../../assets/demo 3.png"
const LS_Content = () => {
   const [newsCategories, setNewsCatagories] = useState([]);
   useEffect(() => {
      fetch("categories.json")
         .then(res => res.json())
         .then(data => setNewsCatagories(data))
   }, [])
   return (
      <div className='text-slate-500'>
         {newsCategories.map(item => <NavLink to={`/categories/${item.id} `} className="block m-2 font-medium p-2" key={item.id}>{item.name}</NavLink>)}
         {/* news cards */}
         <div className='text-black mb-3'>
            <img className='rounded w-full max-h-[250px]' src={demoCard} alt="" />
            <p className='mt-1 font-medium'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className='flex items-center space-x-3 mt-1 text-gray-500'>
               <p>Sports</p>
               <span><CiCalendar /></span>
               <p className='text-sm'>Jan 4, 2024</p>
            </div>
         </div>
         <div className='text-black mb-3'>
            <img className='rounded w-full max-h-[250px]' src={demo2} alt="" />
            <p className='mt-1 font-medium'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className='flex items-center space-x-3 mt-1 text-gray-500'>
               <p>Sports</p>
               <span><CiCalendar /></span>
               <p className='text-sm'>Jan 4, 2024</p>
            </div>
         </div>
         <div className='text-black mb-3'>
            <img className='rounded w-full max-h-[250px]' src={demo3} alt="" />
            <p className='mt-1 font-medium'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className='flex items-center space-x-3 mt-1 text-gray-500'>
               <p>Sports</p>
               <span><CiCalendar /></span>
               <p className='text-sm'>Jan 4, 2024</p>
            </div>
         </div>
      </div>
   );
};

export default LS_Content;