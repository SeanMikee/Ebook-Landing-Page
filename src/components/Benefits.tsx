import React from 'react';
import { Award, TrendingUp, Star, Users, Rocket, Shield } from 'lucide-react';

const BenefitCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => (
  <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:translate-y-[-5px]">
    <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-pink-500 h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Benefits = () => {
  const benefits = [
    {
      icon: Award,
      title: "Complete OnlyFans Setup",
      description: "Step-by-step guide to setting up your OnlyFans account professionally with optimal settings and profile optimization."
    },
    {
      icon: TrendingUp,
      title: "Content Strategy",
      description: "Learn what content performs best, how to plan your content calendar, and create engaging posts that keep subscribers."
    },
    {
      icon: Users,
      title: "Audience Building",
      description: "Proven strategies to grow your audience across platforms and convert followers into paying subscribers."
    },
    {
      icon: Star,
      title: "Branding Mastery",
      description: "Create a unique personal brand that stands out in the crowded market and attracts your ideal subscribers."
    },
    {
      icon: Rocket,
      title: "Advanced Monetization",
      description: "Multiple revenue streams beyond subscription fees, including tips, custom content, and merchandise."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Essential practices to protect your identity, content, and personal information while running your business."
    }
  ];

  return (
    <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive guide covers everything you need to know to create a thriving OnlyFans business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;