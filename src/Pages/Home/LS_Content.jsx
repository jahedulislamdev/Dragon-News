import React, { useEffect, useState } from 'react';

const LS_Content = () => {
   const [newsCategories, setNewsCatagories] = useState([]);
   useEffect(() => {
      fetch("categories.json")
         .then(res => res.json())
         .then(data => setNewsCatagories(data))
   }, [])
   return (
      <div>
         {newsCategories.length}
      </div>
   );
};

export default LS_Content;