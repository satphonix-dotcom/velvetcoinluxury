import React from 'react';
import LuxuryLayout from '../layout/LuxuryLayout';

const Shipping = () => {
  return (
    <LuxuryLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-serif text-luxury-cream mb-8">Shipping Information</h1>
          
          <div className="bg-luxury-charcoal p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-serif text-luxury-gold mb-4">Shipping Methods</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-luxury-gray-700">
                <div>
                  <h3 className="text-luxury-cream">Standard Shipping</h3>
                  <p className="text-luxury-gray-300">5-7 business days</p>
                </div>
                <p className="text-luxury-gold">$29.99</p>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-luxury-gray-700">
                <div>
                  <h3 className="text-luxury-cream">Express Shipping</h3>
                  <p className="text-luxury-gray-300">2-3 business days</p>
                </div>
                <p className="text-luxury-gold">$49.99</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-luxury-cream">Priority Shipping</h3>
                  <p className="text-luxury-gray-300">Next business day</p>
                </div>
                <p className="text-luxury-gold">$99.99</p>
              </div>
            </div>
          </div>

          <div className="bg-luxury-charcoal p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-serif text-luxury-gold mb-4">Free Shipping</h2>
            <p className="text-luxury-gray-300">
              Complimentary shipping is available on all orders over $1,000. This applies to standard 
              shipping only and excludes certain oversized items.
            </p>
          </div>

          <div className="bg-luxury-charcoal p-8 rounded-lg">
            <h2 className="text-2xl font-serif text-luxury-gold mb-4">International Shipping</h2>
            <p className="text-luxury-gray-300">
              We offer worldwide shipping to most countries. International shipping rates and delivery 
              times vary by location. All applicable customs duties and taxes are the responsibility 
              of the recipient.
            </p>
          </div>
        </div>
      </div>
    </LuxuryLayout>
  );
};

export default Shipping;