import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LS_Content = () => {
   const [newsCategories, setNewsCatagories] = useState([]);
   useEffect(() => {
      fetch("categories.json")
         .then(res => res.json())
         .then(data => setNewsCatagories(data))
   }, [])
   return (
      <div className='text-slate-500'>
         <p className='text-lg font-semibold ms-1'>All Catagories</p>
         {newsCategories.map(item => <NavLink to={`/categories/${item.id} `} className="block m-2 font-medium p-2" key={item.id}>{item.name}</NavLink>)}
      </div>
   );
};

export default LS_Content;