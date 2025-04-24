import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-pink-500 to-purple-800 min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-15"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Unlock Your <span className="text-pink-200">Financial Freedom</span> Through OnlyFans Success
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8">
              The all-in-one guide for beginners and aspiring creators to build a profitable OnlyFans business from scratch.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="bg-white text-pink-600 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                Buy Now - $47 <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-pink-600">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Customer" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Customer" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Customer" />
              </div>
              <p className="text-white text-sm">
                <span className="font-bold">500+</span> success stories and counting
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-[280px] md:w-[320px] transform transition duration-700 hover:scale-105">
              <div className="absolute inset-0 bg-pink-300 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/6953867/pexels-photo-6953867.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="LustyAngels eBook Cover" 
                className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-pink-500 text-white text-sm font-bold py-1 px-3 rounded-full transform rotate-12 shadow-lg">
                $47 Only
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;