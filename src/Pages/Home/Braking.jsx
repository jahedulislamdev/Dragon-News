import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { dataProvider } from "../../Components/ContextProvider/NewsDataProvider";

const Braking = () => {
   const { news } = useContext(dataProvider);
   const LatestFiveNews = news.filter(item => item.others_info.is_trending);
   console.log(LatestFiveNews);
   return (
      <div className="flex items-center bg-gray-200 mt-5">
         <button className="p-4 bg-red-700 text-white rounded-l-lg ">Latest</button>
         <Marquee pauseOnHover={true}>
            {
               LatestFiveNews.map(item => <Link key={item._id} to={`/news/${item._id}`} className="me-7 ">{item.title}</Link>)
            }
         </Marquee>
      </div>
   );
};

export default Braking;