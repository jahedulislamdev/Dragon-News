import React, { useContext } from 'react';
import { dataProvider } from '../../Components/ContextProvider/NewsDataProvider';

const NewsDetails = () => {
   const { news } = useContext(dataProvider)
   console.log(news);
   return (
      <div>
         length :{news.length}
      </div>
   );
};

export default NewsDetails;