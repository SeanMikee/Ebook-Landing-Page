import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Refund Policy</h1>
        <div className="prose prose-pink">
          <p className="text-gray-600 mb-4">
            Last updated: March 15, 2024
          </p>
          <p className="text-gray-600 mb-4">
            We want you to be completely satisfied with your purchase. If you're not happy with our guide, we offer a hassle-free refund policy.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">30-Day Money Back Guarantee</h2>
          <p className="text-gray-600 mb-4">
            If you're not satisfied with our guide, you can request a full refund within 30 days of your purchase. Simply contact our support team with proof that you've implemented the strategies, and we'll process your refund.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How to Request a Refund</h2>
          <p className="text-gray-600 mb-4">
            To request a refund, please email support@lustyangels.com with your order number and a brief explanation of why the guide didn't meet your expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;