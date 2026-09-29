import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TransmissionTowerGraphic } from '../../assets/assetData';

const TrustedPartnerCTA = () => {
  return (
    <section className="bg-navy-dark text-white relative overflow-hidden my-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[300px]">
        
        {/* Left Dark Navy Text Content (7 Columns) */}
        <div className="md:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center space-y-6 z-10">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[3.5px] bg-brandOrange rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
              Your Trusted Partner in <br className="hidden sm:inline" />
              Electrical Solutions
            </h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Railpower & Railwire offers a comprehensive range of high-quality wires and cables designed for safety, performance and long life.
          </p>

          <div>
            <Link
              to="/dealer"
              className="inline-flex items-center gap-2 border-2 border-white hover:border-brandOrange hover:bg-brandOrange text-white px-7 py-3 rounded-md text-sm font-extrabold shadow-md hover:shadow-lg transition-all group"
            >
              <span>Become a Dealer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Transmission Tower & Sunset Graphic with Diagonal Cut (5 Columns) */}
        <div className="md:col-span-5 relative min-h-[260px] md:min-h-full overflow-hidden">
          {/* Diagonal Orange Divider background */}
          <div className="absolute inset-0 bg-brandOrange hidden md:block diagonal-clip transform scale-105 z-0"></div>
          
          {/* Main Image Graphic */}
          <div className="absolute inset-0 z-10 md:diagonal-clip">
            <TransmissionTowerGraphic />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent md:hidden"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustedPartnerCTA;
