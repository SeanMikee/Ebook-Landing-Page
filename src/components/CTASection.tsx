import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const features = [
    "Complete step-by-step guide (200+ pages)",
    "Content calendar templates",
    "Proven DM scripts that convert",
    "Pricing strategy calculator",
    "30-day content planning guide",
    "Exclusive access to creator community"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-500 to-purple-700">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Start Your OnlyFans Journey Today</h2>
              <p className="text-gray-600 mb-8">
                Don't waste months trying to figure it out on your own. Our guide gives you the exact roadmap to 
                OnlyFans success that has worked for hundreds of creators.
              </p>
              
              <div className="mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <CheckCircle className="text-pink-500 h-5 w-5 mt-1 flex-shrink-0" />
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 font-medium">Normal Price</span>
                    <span className="text-gray-500 font-medium line-through">$97</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-800 font-bold">Today's Price</span>
                    <span className="text-pink-500 font-bold text-2xl">$47</span>
                  </div>
                  <div className="text-gray-500 text-sm text-right">One-time payment, no subscription</div>
                </div>
                
                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Get Instant Access <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                
                <p className="text-gray-500 text-sm text-center mt-4">
                  Secure checkout with PayPal, Credit Card, or Apple Pay
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 bg-pink-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7681121/pexels-photo-7681121.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
              <div className="relative p-8 md:p-12 z-10 h-full flex flex-col justify-center">
                <div className="bg-white/90 rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-pink-500 mb-4">Limited Time Bonus:</h3>
                  <p className="text-gray-700 mb-4">
                    Order now and get access to our exclusive "Engagement Booster" mini-course 
                    ($197 value) completely FREE!
                  </p>
                  <p className="text-gray-800 font-semibold">
                    This bonus shows you how to:
                  </p>
                  <ul className="text-gray-700 mt-2 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-pink-500 h-4 w-4 mr-2" />
                      Drive 300% more engagement on your posts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-pink-500 h-4 w-4 mr-2" />
                      Create content that generates consistent tips
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-pink-500 h-4 w-4 mr-2" />
                      Leverage psychological triggers that increase subscriber retention
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;