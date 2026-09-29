import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightCircle } from 'lucide-react';
import { RailpowerLogo, RailwireLogo, CitySkylineBackground } from '../../assets/assetData';

const BrandSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="mb-8 text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-[3.5px] bg-brandOrange rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              Our Brands
            </h2>
          </div>
          <p className="text-sm font-medium text-gray-600 pl-8">
            Two Strong Brands. One Commitment – Quality
          </p>
        </div>

        {/* Brand Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Dual Brand Card (Left 8 Columns) */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 p-8 sm:p-10 shadow-card flex flex-col md:flex-row items-center justify-around gap-8 relative overflow-hidden group hover:border-brandOrange/40 transition-all">
            
            {/* Railpower Logo Box */}
            <div className="flex flex-col items-center text-center p-4">
              <RailpowerLogo className="h-14" />
              <p className="text-xs font-semibold text-gray-500 mt-4 max-w-xs">
                Premium Heavy Power & Submersible Cabling Solutions
              </p>
            </div>

            {/* Divider */}
            <div className="w-full md:w-[1.5px] h-[1.5px] md:h-24 bg-gray-200"></div>

            {/* Railwire Logo Box */}
            <div className="flex flex-col items-center text-center p-4">
              <RailwireLogo className="h-14" />
              <p className="text-xs font-semibold text-gray-500 mt-4 max-w-xs">
                Flame Retardant Safe House & Commercial Wires
              </p>
            </div>

          </div>

          {/* Right Promo Banner Card (Right 4 Columns) */}
          <div className="lg:col-span-4 bg-navy-dark text-white rounded-xl p-8 relative overflow-hidden flex flex-col justify-between shadow-card hover:shadow-card-hover transition-all min-h-[180px]">
            {/* Background Skyline */}
            <div className="absolute inset-0 z-0">
              <CitySkylineBackground />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/90 to-transparent"></div>
            </div>

            <div className="relative z-10 space-y-2">
              <h3 className="text-2xl font-extrabold text-white leading-tight">
                Powering <br />
                Progress <br />
                <span className="text-white">Since 2015</span>
              </h3>
            </div>

            <div className="relative z-10 mt-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-white hover:text-brandOrange font-bold text-sm transition-colors group"
              >
                <span>Read Our Journey</span>
                <ArrowRightCircle className="w-6 h-6 text-brandOrange fill-brandOrange group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BrandSection;
