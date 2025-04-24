import React from 'react';
import { Shield, CreditCard, RefreshCw, Award } from 'lucide-react';

interface TrustItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const TrustItem: React.FC<TrustItemProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-pink-500 h-8 w-8" />
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const TrustElements = () => {
  const trustItems = [
    {
      icon: Shield,
      title: "Secure Checkout",
      description: "Your payment information is always protected with bank-level encryption."
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Pay with credit card, PayPal, or Apple Pay for your convenience."
    },
    {
      icon: RefreshCw,
      title: "30-Day Money Back",
      description: "Not satisfied? Get a full refund within 30 days of purchase."
    },
    {
      icon: Award,
      title: "5-Star Rated",
      description: "Trusted by over 500+ OnlyFans creators worldwide."
    }
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <TrustItem 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustElements;