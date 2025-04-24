import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <div className="prose prose-pink">
          <p className="text-gray-600 mb-4">
            Last updated: March 15, 2024
          </p>
          <p className="text-gray-600 mb-4">
            At LustyAngels, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect your personal information when you use our website and services.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information that you provide directly to us, including your name, email address, and payment information when you purchase our guide.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to provide and improve our services, process your payments, and communicate with you about your purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;