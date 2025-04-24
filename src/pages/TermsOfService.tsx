import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms of Service</h1>
        <div className="prose prose-pink">
          <p className="text-gray-600 mb-4">
            Last updated: March 15, 2024
          </p>
          <p className="text-gray-600 mb-4">
            By accessing and using the LustyAngels website and services, you agree to be bound by these Terms of Service.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. License to Use</h2>
          <p className="text-gray-600 mb-4">
            When you purchase our guide, you receive a personal, non-transferable license to use the materials for your own business purposes.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            All content and materials available through our service are protected by intellectual property laws and belong to LustyAngels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;