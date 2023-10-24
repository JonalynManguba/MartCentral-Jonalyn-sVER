import {RxDividerVertical} from 'react-icons/rx'
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, } from 'react-icons/ai'
import {Link} from 'react-router-dom';


 const Navbar = () => {
  return (
    <>
    <nav   
  className=" bg-secondary py-8 h-10" >
 <div className="container sm:flex justify between items-center px-2">
  
 
 <button className='text-textw'>
          <Link to="/">Home</Link>
        </button>
     

     
      <div className="flex-col">
        <input type="search" placeholder="Sign up and get upto 100% discount on your first order" className='w-[105%] ml-[70%] p-2 rounded-full ring-black ring-1 bg=slate-800 text-sm' />
        <button className='absolute -right-[75%] top-1/2 -translate-y-1/2 p-4'>
          <AiOutlineSearch/>
        </button>

        <div>
        <button className='text-textw absolute -right-[89%] top-1/2 -translate-y-1/2 p-4 '>
          <AiOutlineHeart/>
        </button>
        <button className='text-textw absolute -right-[95%] top-1/2 -translate-y-1/2 p-4 '>
          <AiOutlineShoppingCart/>
        </button>
        <button className='text-textw absolute -right-[102%] top-1/2 -translate-y-1/2 p-4 '>
          <RxDividerVertical/>
        </button>
        <button className='text-textw absolute -right-[108%] top-1/2 -translate-y-1/2 p-4'>
          <AiOutlineUser/>
        </button>
      </div>
      </div>
 </div>
</nav>
</>
  );
};

export default Navbar;