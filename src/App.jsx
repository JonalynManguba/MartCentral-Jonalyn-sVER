import React from 'react'
import { AiOutlineBell, AiOutlineFacebook, AiOutlineGithub, AiOutlineHeart, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineTwitter, AiOutlineUser, } from 'react-icons/ai'
import {RxDividerVertical} from 'react-icons/rx'
import {FiHelpCircle} from 'react-icons/fi'
import {IoLocationOutline} from 'react-icons/io5'




export default function App ()  {
  return (
    <>
    {/************************** TOP NAVBAR ********************************/}

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

    {/************************************ NAVBAR *****************************************/}
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

    {/********************************BOTTOM NAVBAR ****************************************/}


<nav
    class="relative flex w-full items-center justify-between h-[32px] bg-primary py-2 text-neutral-600 shadow-lg dark:text-neutral-300 dark:shadow-black/5 lg:flex-wrap lg:justify-start"
    data-te-botnav-ref>
    <div class="px-6">
      <button
        class="border-0 bg-transparent py-3 text-sm leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContentY"
        aria-controls="navbarSupportedContentY"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="[&>svg]:w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-8 w-8">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </span>
      </button>
      <div
        class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContentY"
        data-te-collapse-item>
        
          <li class="flex" data-te-nav-item-ref data-te-dropdown-ref>
            <a
              class="text-textw -mt-3 flex items-center whitespace-nowrap py-2 pr-2 transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
              href="#" data-te-ripple-init data-te-ripple-color="light"
              type="button" id="dropdownMenuButtonX" data-te-dropdown-toggle-ref aria-expanded="false"
              data-te-nav-link-ref
              >Categories
              <span class="ml-4 w-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </span>
              </a>
              <button className="text-textw text-sm pl-10 -mt-3 flex items-center px-2 ">
              <IoLocationOutline/>
                <span>Location</span>
            </button>
          </li>
          <div>  
            </div>
            <div>

          <ul class="list-style-none ml-60 -mt-3 flex flex-col lg:flex-row pl-[105px]" data-te-navbar-nav-ref>
    <button class="text-textw text-xs flex items-center px-2 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href="#">
     <span>Groceries & Essentials</span>
    </button>
    <button class="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href="#">
     <span>Furnitures </span>
    </button>
    <button class="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hovre:text-blue-500 "href="#">
     <span>Gadgets</span>
    </button> 
    <button class="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href="#">
     <span>Collectibles</span>
    </button>
    <button class="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href="#">
     <span>Jewelries</span>
    </button>
    <button class="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500" href="#">
    <span>Sports</span>
    </button>
    <button class="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500 "href="#">
     <span>Men</span>
    </button>
    <button class="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href="#">
     <span>Women</span>
    </button>
    <button class="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500" href="#">
     <span>Babies</span>
    </button>
    <button class="text-textw text-xs flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"href="#">
     <span>Toys</span>
    </button>
    <button class="text-textw text-sm flex items-center px-1 py-2 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500" href="#" >
     <span>ShopLive</span>
    </button>

    </ul>
    </div>
</div>
      </div>
    </nav>
<div>

<div class="flex items-end w-full min-h-screen bg-white">

      {/********************************FOOTER ****************************************/}

<div className=" bg-secondary container mb-0 flex flex-col md:flex-row justify-between items-center min-w-full">
        <div className="container mx-auto flex flex-col items-center mt-4">
        <div className="text-center">
          <h3 className="text-lg sm:text-md font-bold text-textw">We'd love to hear what you think!</h3>
          <button className="bg-textw text-secondary font-semibold py-1 px-8 rounded-full mb-3 hover:bg-gray-200">
            Give Feedback
          </button>
        </div>
      </div>
      </div>
</div>

<footer className="bg-primary text-textw py-2 w-full mb-0">   
<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg sm:text-xl font-bold">Customer Service</h3>
          <ul className="mt-2">
            <li>
              <a href="/help-center" className="text-sm hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="/order-tracking" className="text-sm hover:underline">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="/return" className="text-sm hover:underline">
                Return & Refund
              </a>
            </li>
            <li>
              <a href="/return" className="text-sm hover:underline">
                Privacy and Policy
              </a>
            </li>
            <li>
              <a href="/return" className="text-sm hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg sm:text-xl font-bold">Get to Know Us</h3>
          <ul className="mt-2">
            <li>
              <a href="/careers" className="text-sm hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="/our-company" className="text-sm hover:underline">
                Our Company
              </a>
            </li>
          </ul>
      
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg sm:text-xl font-bold">START SELLING</h3>
          <ul className="mt-2">
            <li>
              <a href="/careers" className="text-sm hover:underline">
                Open your shop
              </a>
            </li>
            <li>
              <a href="/our-company" className="text-sm hover:underline">
                Affiliate Program
              </a>
            </li>
          </ul>
        </div>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg sm:text-xl font-bold">FOLLOW US ON</h3>
          <div className="flex justify-center md:justify-start items-center space-x-4 mt-2">
          <a href="/facebook.com" className="text-sm hover:underline">
              <AiOutlineFacebook/>
              </a>
              <a href="/facebook.com" className="text-sm hover:underline">
              <AiOutlineInstagram/>
              </a>
              <a href="/facebook.com" className="text-sm hover:underline">
              <AiOutlineGithub/>
              </a>
              <a href="/facebook.com" className="text-sm hover:underline">
              <AiOutlineLinkedin/>
              </a>
              <a href="/facebook.com" className="text-sm hover:underline">
              <AiOutlineTwitter/>
              </a>
          </div>
    
          <div className="container bg-yellow mx-auto border-r- mt-5 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h3 className="text-lg text-brown sm:text-sm font-bold text-center">Sign up for Emails, Discount Alerts & more</h3>
          <div className="mt-6 mb-5">
            <div className="rounded-lg overflow-hidden flex ring-black ring-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-green-400 text-gray-800 py-2 px-8 w-full"
              />
              <div>
              <button className="bg-green sm:text-sm text-white py-1 px-5 hover:bg-green-600">
                SIGN UP
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-bold">Accepted Payment Methods</h3>
          <div className="flex justify-center md:justify-start items-center space-x-4 mt-2">
            <img
              src="./src/assets/visa.png"
              alt="Visa"
              className="h-4 sm:h-5"
            />
            <img
              src="./src/assets/masterc.png"
              alt="MasterCard"
              className="h-4 sm:h-5"
            />
            <img
              src="./src/assets/jcb.png"
              alt="JCB"
              className="h-4 sm:h-5"
            />
          </div>
        </div>
      </div>
    </footer>
</div>

    </>
  );
}
