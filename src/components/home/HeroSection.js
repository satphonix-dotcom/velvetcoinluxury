import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Video or Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/70 to-transparent z-10" />
        <img
          src="/images/hero-luxury.jpg"
          alt="Luxury Collection"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-display-1 font-serif text-luxury-cream mb-6">
            Redefining <span className="text-gradient-luxury">Luxury</span> in the Digital Age
          </h1>
          <p className="text-lg text-luxury-gray-300 mb-8">
            Experience exclusive collections and rare finds, all available through secure cryptocurrency transactions.
          </p>
          <div className="flex space-x-4">
            <Link to="/category/featured">
              <Button variant="primary" size="lg">
                Explore Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="lg">
                Our Story
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;