import React from 'react';
import LuxuryLayout from '../layout/LuxuryLayout';

const About = () => {
  return (
    <LuxuryLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-serif text-luxury-cream mb-8">About VelvetCoin</h1>
          
          <div className="bg-luxury-charcoal p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-serif text-luxury-gold mb-4">Our Story</h2>
            <p className="text-luxury-gray-300">
              Founded in 2024, VelvetCoin emerged from a vision to revolutionize luxury commerce through cryptocurrency. 
              We believe in creating a seamless bridge between traditional luxury and digital currency, offering 
              discerning collectors and enthusiasts a secure, elegant platform for acquiring exceptional pieces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-luxury-charcoal p-6 rounded-lg">
              <h3 className="text-xl font-serif text-luxury-gold mb-3">Our Mission</h3>
              <p className="text-luxury-gray-300">
                To provide an unparalleled luxury shopping experience, combining traditional craftsmanship with 
                modern cryptocurrency transactions.
              </p>
            </div>
            <div className="bg-luxury-charcoal p-6 rounded-lg">
              <h3 className="text-xl font-serif text-luxury-gold mb-3">Our Vision</h3>
              <p className="text-luxury-gray-300">
                To become the world's premier destination for luxury goods purchased with cryptocurrency.
              </p>
            </div>
            <div className="bg-luxury-charcoal p-6 rounded-lg">
              <h3 className="text-xl font-serif text-luxury-gold mb-3">Our Values</h3>
              <p className="text-luxury-gray-300">
                Authenticity, transparency, and excellence in every transaction and interaction.
              </p>
            </div>
          </div>

          <div className="bg-luxury-charcoal p-8 rounded-lg">
            <h2 className="text-2xl font-serif text-luxury-gold mb-4">The VelvetCoin Difference</h2>
            <ul className="space-y-4 text-luxury-gray-300">
              <li>• Curated selection of the world's finest luxury items</li>
              <li>• Secure cryptocurrency transactions</li>
              <li>• Authentication guarantee on all products</li>
              <li>• Exclusive access to limited editions</li>
              <li>• Personalized concierge service</li>
            </ul>
          </div>
        </div>
      </div>
    </LuxuryLayout>
  );
};

export default About;