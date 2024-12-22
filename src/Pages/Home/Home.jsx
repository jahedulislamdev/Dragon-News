import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navigation/Navbar";
import Braking from "./Braking";
import LS_Content from "./LS_Content";
import RS_Content from './RS_Content';

const Home = () => {
   return (
      <div>
         <Header />
         <Braking />
         <Navbar></Navbar>
         <div className="grid md:grid-cols-4 border-2 p-4 space-x-2">
            <div className="border-2"><LS_Content /></div>
            <div className="col-span-2 border-2 ">
               <p className="text-lg font-semibold text-slate-500 ms-2">Dragon News Home</p>
            </div>
            <div className="border-2"><RS_Content /></div>
         </div>
      </div>
   );
};

export default Home;