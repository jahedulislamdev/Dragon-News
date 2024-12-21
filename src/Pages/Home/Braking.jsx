import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Braking = () => {
   const newsHeadlines = [
      "Indian Stock Markets Anticipate Moderate Growth in 2025",
      "Arrowhead Stadium to Host Cincinnati vs. Nebraska Football Game",
      "New York Giants Name Drew Lock as Starting Quarterback",
      "Chiefs' Coach Andy Reid Open to Reunion with Clyde Edwards-Helaire",
      "New York Giants Remain Contenders for Top NFL Draft Pick"
   ]; //futute data will be loaded from backend or database

   return (
      <div className="flex items-center bg-gray-200 mt-5">
         <button className="p-4 bg-red-700 text-white rounded-l-lg ">Latest</button>
         <Marquee pauseOnHover={true}>
            {newsHeadlines.map((news, idx) => <Link className="mr-7" key={idx} to={`/brakings/${idx}`}>{news}</Link>)}
         </Marquee>
      </div>
   );
};

export default Braking;