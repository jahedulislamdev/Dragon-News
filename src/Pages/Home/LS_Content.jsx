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
         {newsCategories.map(item => <NavLink to={`/categories/${item.id} `} className="block m-2 font-medium p-2" key={item.id}>{item.name}</NavLink>)}
      </div>
   );
};

export default LS_Content;