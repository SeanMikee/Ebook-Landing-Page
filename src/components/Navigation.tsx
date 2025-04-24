import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className={`font-bold text-xl md:text-2xl ${isScrolled ? 'text-pink-500' : 'text-white'}`}>
              LustyAngels
            </h1>
          </div>
          <button className="flex items-center bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
            <ShoppingBag className="mr-2 h-4 w-4" />
            <span className="font-medium">Buy Now</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;