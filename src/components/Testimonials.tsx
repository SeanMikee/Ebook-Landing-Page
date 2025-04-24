import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Jessica M.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "Within just 6 weeks of following this guide, I went from 0 to over $5,000/month on OnlyFans. The content calendar templates alone were worth the investment!",
    location: "Los Angeles, CA",
    earnings: "$5,200/month"
  },
  {
    name: "Sophia R.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "As a complete beginner, I was overwhelmed until I found LustyAngels. The step-by-step approach made it so easy to set everything up and start earning in my first month.",
    location: "Miami, FL",
    earnings: "$3,800/month"
  },
  {
    name: "Olivia K.",
    image: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "The DM scripts in this guide completely transformed my income. I've increased my earnings by 4x just by implementing the communication strategies with subscribers.",
    location: "New York, NY",
    earnings: "$8,700/month"
  },
  {
    name: "Madison T.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "I wish I had found this guide when I first started! I struggled for months on my own, but after implementing these strategies, my subscriber count doubled in just 30 days.",
    location: "Chicago, IL",
    earnings: "$4,500/month"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of creators who have transformed their OnlyFans business with our guide
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white px-6 py-2 rounded-full font-semibold">
              Real Results
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-pink-200">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{testimonials[activeIndex].name}</h3>
                <p className="text-gray-500 mb-2">{testimonials[activeIndex].location}</p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full font-semibold">
                  {testimonials[activeIndex].earnings}
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="relative">
                  <div className="text-5xl text-pink-200 absolute -top-8 -left-3">"</div>
                  <p className="text-gray-700 text-lg mb-6 relative z-10">
                    {testimonials[activeIndex].text}
                  </p>
                  <div className="text-5xl text-pink-200 absolute -bottom-10 right-0">"</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="bg-pink-100 hover:bg-pink-200 text-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-pink-100 hover:bg-pink-200 text-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeIndex === index 
                    ? 'opacity-100 scale-105' 
                    : 'opacity-60 scale-95'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="w-full h-16 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;