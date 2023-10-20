import React from 'react'

const Footer = () => {
  return (
    
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
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-2xl hover:text-pink-500"></i>
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-2xl hover:text-gray-600"></i>
              
            </a>
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
  )
}

export default Footer