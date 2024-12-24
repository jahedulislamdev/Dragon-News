import React, { createContext, useEffect, useState } from 'react';
export const dataProvider = createContext(null);
const NewsDataProvider = ({ children }) => {
   const [news, setNews] = useState([]);
   useEffect(() => {
      fetch("news.json")
         .then(res => res.json())
         .then(data => setNews(data));
   }, []);
   return (
      <dataProvider.Provider value={{ news }}>
         {children}
      </dataProvider.Provider>
   );
};

export default NewsDataProvider;