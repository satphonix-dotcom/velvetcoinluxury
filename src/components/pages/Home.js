import React from 'react';
import LuxuryLayout from '../layout/LuxuryLayout';
import HeroSection from '../home/HeroSection';
import FeaturedProducts from '../home/FeaturedProducts';
import CategoryShowcase from '../home/CategoryShowcase';

const Home = () => {
  return (
    <LuxuryLayout>
      <HeroSection />
      <FeaturedProducts />
      <CategoryShowcase />
    </LuxuryLayout>
  );
};

export default Home;