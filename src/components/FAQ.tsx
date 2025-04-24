import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-pink-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this guide suitable for complete beginners?",
      answer: "Absolutely! The guide is specifically designed to take you from zero to a profitable OnlyFans account, even if you've never created content before. We cover everything from account setup to advanced monetization strategies."
    },
    {
      question: "How quickly will I see results after implementing the strategies?",
      answer: "While results vary depending on your niche, content quality, and promotion efforts, many of our clients see their first subscribers within the first week. Following our complete system, most creators begin generating significant income within 30-60 days."
    },
    {
      question: "Will I need to show my face to be successful on OnlyFans?",
      answer: "Not at all! Our guide includes specific strategies for faceless creators. We show you how to create engaging, profitable content while maintaining your privacy, and many of our most successful students never show their face."
    },
    {
      question: "What format does the guide come in?",
      answer: "The guide is delivered as a digital download in PDF format, allowing you to access it immediately after purchase. You'll also get access to our bonus templates and resources which come in various formats (PDF, Excel, etc.)."
    },
    {
      question: "Can I get a refund if the guide doesn't work for me?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you implement our strategies and don't see results, just email us with evidence that you've followed the steps, and we'll process your refund."
    },
    {
      question: "What bonuses are included with the guide?",
      answer: "You'll receive our content calendar templates, proven DM scripts, pricing calculator, 30-day content planning guide, and access to our exclusive creator community where you can network with other successful OnlyFans creators."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the LustyAngels guide
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;