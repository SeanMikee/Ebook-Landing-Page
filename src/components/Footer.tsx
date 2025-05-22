import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-pink-400 mb-2">LustyAngels</h2>
            <p className="text-gray-400 text-sm max-w-xs">
              The ultimate guide to starting and growing your OnlyFans account successfully.
            </p>
            <a href="mailto:Support@lustyangels.shop" className="text-gray-400 hover:text-pink-300 transition-colors duration-300 text-sm mt-2 block">
              Support@lustyangels.shop
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-300">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-pink-300 transition-colors duration-300">Home</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-pink-300 transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-pink-300">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-gray-400 hover:text-pink-300 transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-gray-400 hover:text-pink-300 transition-colors duration-300">Terms of Service</Link></li>
                <li><Link to="/refund-policy" className="text-gray-400 hover:text-pink-300 transition-colors duration-300">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} LustyAngels. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://wa.me/12893355557" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;