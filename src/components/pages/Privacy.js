import React from 'react';
import LuxuryLayout from '../layout/LuxuryLayout';

const Privacy = () => {
  return (
    <LuxuryLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-serif text-luxury-cream mb-8">Privacy Policy</h1>
          
          <div className="bg-luxury-charcoal p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-serif text-luxury-gold mb-4">Information We Collect</h2>
            <p className="text-luxury-gray-300">
              We collect information that you provide directly to us, including your name, email address, 
              shipping address, and cryptocurrency wallet addresses used for transactions.
            </p>
          </div>

          <div className="bg-luxury-charcoal p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-serif text-luxury-gold mb-4">How We Use Your Information</h2>
            <p className="text-luxury-gray-300">
              Your information is used to process orders, provide customer support, and enhance your 
              shopping experience. We never sell your personal data to third parties.
            </p>
          </div>

          <div className="bg-luxury-charcoal p-8 rounded-lg">
            <h2 className="text-2xl font-serif text-luxury-gold mb-4">Security Measures</h2>
            <p className="text-luxury-gray-300">
              We implement robust security measures to protect your personal information and ensure 
              secure cryptocurrency transactions on our platform.
            </p>
          </div>
        </div>
      </div>
    </LuxuryLayout>
  );
};

export default Privacy;