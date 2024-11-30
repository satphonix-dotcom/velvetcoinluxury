import React from 'react';
import LuxuryLayout from '../layout/LuxuryLayout';

const Terms = () => {
  return (
    <LuxuryLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-serif text-luxury-cream mb-8">Terms of Service</h1>
          
          <div className="bg-luxury-charcoal p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-serif text-luxury-gold mb-4">1. Agreement to Terms</h2>
            <p className="text-luxury-gray-300">
              By accessing and using VelvetCoin's services, you agree to be bound by these Terms of Service. 
              These terms govern your access to and use of our website, services, and content.
            </p>
          </div>

          <div className="bg-luxury-charcoal p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-serif text-luxury-gold mb-4">2. Cryptocurrency Transactions</h2>
            <p className="text-luxury-gray-300">
              All purchases made through VelvetCoin are processed using cryptocurrency. By making a purchase, 
              you acknowledge that cryptocurrency transactions are irreversible and VelvetCoin is not 
              responsible for any errors in wallet addresses or transaction amounts provided by users.
            </p>
          </div>

          <div className="bg-luxury-charcoal p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-serif text-luxury-gold mb-4">3. Product Authenticity</h2>
            <p className="text-luxury-gray-300">
              VelvetCoin guarantees the authenticity of all products sold on our platform. Each item comes 
              with a certificate of authenticity and has been verified by our expert team.
            </p>
          </div>

          <div className="bg-luxury-charcoal p-8 rounded-lg">
            <h2 className="text-2xl font-serif text-luxury-gold mb-4">4. Privacy & Security</h2>
            <p className="text-luxury-gray-300">
              We are committed to protecting your privacy and securing your personal information. For more 
              details, please review our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </LuxuryLayout>
  );
};

export default Terms;