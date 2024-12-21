import moment from 'moment';
import Logo from '../../assets/logo.png'
const Header = () => {
   let Bio = "Journalism Without Fear or Favour" //comes from backend (database)
   return (
      <div className='text-center space-y-2'>
         <img className='mx-auto' src={Logo} alt="" />
         <p className='text-lg'>{Bio}</p>
         <div className='text-sm'>
            {
               moment().format('dddd MMMM DD , YYYY')
            }
         </div>
      </div>
   );
};

export default Header;