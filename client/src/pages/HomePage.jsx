import React from 'react';
import HeroCarousel from '../components/Home/HeroCarousel';
import FeatureStrip from '../components/Home/FeatureStrip';
import BrandSection from '../components/Home/BrandSection';
import ProductRange from '../components/Home/ProductRange';
import TrustedPartnerCTA from '../components/Home/TrustedPartnerCTA';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Large Hero Carousel */}
      <HeroCarousel />

      {/* 2. 5 Feature / USP Strip */}
      <FeatureStrip />

      {/* 3. Our Brands Section */}
      <BrandSection />

      {/* 4. Product Range Section */}
      <ProductRange />

      {/* 5. Trusted Partner CTA Section */}
      <TrustedPartnerCTA />
    </div>
  );
};

export default HomePage;
