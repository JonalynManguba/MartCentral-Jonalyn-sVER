import React from 'react'
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, } from 'react-icons/ai'


 const Navbar = () => {
  return (
    <nav   
  class=" bg-secondary py-8 h-10" >
 <div class="container sm:flex justify between items-center -mt-4">
  
   <div class="font-bold text-2xl text-center pb-4 sm:pb-0 text-black">
     MART CENTRAL
     </div>

     <form className="w-[620px] absolute">
      <div className="relative">
        <input type="search" placeholder="Sign up and get upto 100% discount on your first order" className='w-[105%] ml-[70%] p-2 rounded-full ring-black ring-1 bg=slate-800 text-sm' />
        <button className='absolute -right-[75%] top-1/2 -translate-y-1/2 p-4'>
          <AiOutlineSearch/>
        </button>
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
     </form>
 </div>
</nav>
  );
};

export default Navbar;