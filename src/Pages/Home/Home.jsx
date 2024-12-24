import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navigation/Navbar";
import Braking from "./Braking";
import LS_Content from "./LS_Content";
import M_Content from "./M_Content";
import RS_Content from './RS_Content';
const Home = () => {
   return (
      <div>
         <Header />
         <Braking />
         <Navbar />
         <div className="grid md:grid-cols-4 p-4 space-x-2 w-full">
            <div><LS_Content /></div>
            <div className="col-span-2"><M_Content /></div>
            <div><RS_Content /></div>
         </div>
      </div>
   );
};

export default Home;