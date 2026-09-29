import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Flame, Leaf } from 'lucide-react';
import { HeroWiresGraphic, CitySkylineBackground } from '../../assets/assetData';

const slides = [
  {
    tagline: 'TRUSTED ELECTRICAL CONNECTIONS',
    headingPrefix: 'BUILT FOR A SAFER',
    headingHighlight: 'TOMORROW',
    description: 'High Quality Wires & Cables for Homes, Industries and a Better Future.',
    ctaText: 'Explore Our Products',
    ctaLink: '/products'
  },
  {
    tagline: 'INDIAN MANUFACTURING EXCELLENCE',
    headingPrefix: 'POWERING HOMES.',
    headingHighlight: 'POWERING INDUSTRIES.',
    description: 'Pure Electrolytic Copper Conductors Engineered for Zero Power Loss and Maximum Safety.',
    ctaText: 'View Product Range',
    ctaLink: '/products'
  },
  {
    tagline: 'HRFR HEAT RESISTANT TECHNOLOGY',
    headingPrefix: 'ENGINEERED FOR',
    headingHighlight: 'SAFETY & LONG LIFE.',
    description: 'Advanced Fire-Retardant PVC Compound with High Oxygen Index & Anti-Rodent Protection.',
    ctaText: 'Become a Partner',
    ctaLink: '/dealer'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <div className="relative bg-navy-dark text-white overflow-hidden min-h-[520px] md:min-h-[560px] flex items-center select-none">
      {/* Background City Skyline Overlay */}
      <div className="absolute inset-0 z-0">
        <CitySkylineBackground />
        {/* Soft Radial Gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/90 to-transparent"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 font-bold text-xs tracking-widest text-white/90 uppercase">
              <span className="w-8 h-[3px] bg-brandOrange rounded-full"></span>
              <span>{active.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              {active.headingPrefix} <br />
              <span className="text-brandOrange block mt-1 drop-shadow-sm">
                {active.headingHighlight}
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg text-gray-200 font-normal max-w-xl leading-relaxed">
              {active.description}
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to={active.ctaLink}
                className="inline-flex items-center gap-3 bg-brandOrange hover:bg-brandOrange-dark text-white px-8 py-3.5 rounded-md text-base font-bold shadow-lg hover:shadow-brandOrange/30 hover:-translate-y-0.5 transition-all group"
              >
                <span>{active.ctaText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Product Showcase & HRFR Badge Column */}
          <div className="lg:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0">
            {/* Wires & Cables Graphic Illustration */}
            <div className="w-full max-w-lg transition-transform duration-500 scale-105">
              <HeroWiresGraphic />
            </div>

            {/* Floating HRFR Safety Badge matching the screenshot */}
            <div className="absolute top-2 right-4 sm:top-4 sm:right-10 bg-gradient-to-b from-brandOrange to-brandOrange-dark text-white p-4 sm:p-5 rounded-xl shadow-2xl border border-white/20 max-w-[150px] sm:max-w-[170px] text-center backdrop-blur-md animate-bounce-slow">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-wider border-b border-white/30 pb-1 mb-2">
                HRFR
              </div>
              <div className="text-[10px] sm:text-xs font-semibold space-y-1 text-white/95 leading-tight">
                <p>High Safety</p>
                <p>Low Emission</p>
                <p>Low Halogen</p>
              </div>
              <div className="mt-2 flex justify-center">
                <Leaf className="w-4 h-4 text-emerald-200 fill-emerald-200" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Controls: Previous / Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-navy-dark/70 hover:bg-brandOrange text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all"
        title="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-navy-dark/70 hover:bg-brandOrange text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all"
        title="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Carousel Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all ${
              currentSlide === idx
                ? 'w-8 bg-brandOrange'
                : 'w-2.5 bg-white/40 hover:bg-white'
            }`}
            title={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
