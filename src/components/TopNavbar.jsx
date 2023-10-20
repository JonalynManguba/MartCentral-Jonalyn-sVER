import React from 'react';
import { AiOutlineBell, } from 'react-icons/ai'
import {RxDividerVertical} from 'react-icons/rx'
import {FiHelpCircle} from 'react-icons/fi'

const TopNavbar = () => {
  return (
    <div class="container bg-[#980808] sm:flex justify between items-center min-w-full"data-te-navbar-nav-ref>
    <div> 
    <ul class="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
      <button className="text-textw text-xs flex items-center px-2 ">
                  <span>NOTIFICATIONS</span>
                  <AiOutlineBell/>
              </button>
      <button className="text-textw text-xs flex items-center px-1 ">
                  <span>ENTER MALL</span>
                <RxDividerVertical/>
            </button>
      <button className="text-textw text-xs flex items-center px-1 ">
                <span>START SELLING</span>
                <RxDividerVertical/>
            </button> 
      <button className="text-textw text-xs flex items-center px-1">
              <FiHelpCircle/>
              <span>HELP</span>
           </button>
  </ul>
  </div>
  <div>
      <ul class="list-style-none  flex flex-col pl-[660px] lg:flex-row">
      <button className="text-textw text-xs flex items-center px-1 py-2 pl-40">
       <span>SIGN UP</span>
      </button> 
      <button className="text-textw text-xs flex items-center px-1 py-2 space-x-2">
      <RxDividerVertical/>
       <span>LOGIN</span>
      </button>
      </ul>
      </div>
  </div>
  );
};

export default TopNavbar;
