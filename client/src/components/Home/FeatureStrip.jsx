import React from 'react';
import { ShieldCheck, Flame, Shield, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    titleLine1: 'Premium Quality',
    titleLine2: 'Copper Conductor'
  },
  {
    icon: Flame,
    titleLine1: 'Fire Resistant',
    titleLine2: '& Safe'
  },
  {
    icon: Shield,
    titleLine1: 'Long Life',
    titleLine2: '& Durability'
  },
  {
    icon: Zap,
    titleLine1: 'Wide Range',
    titleLine2: 'of Applications'
  },
  {
    icon: Award,
    titleLine1: 'Made In India',
    titleLine2: 'Trusted Worldwide'
  }
];

const FeatureStrip = () => {
  return (
    <section className="bg-white py-6 border-b border-gray-200 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 px-3 py-2 justify-start md:justify-center group hover:-translate-y-0.5 transition-transform"
              >
                {/* Circular Navy Icon Container */}
                <div className="w-12 h-12 rounded-full border-2 border-navy text-navy flex items-center justify-center flex-shrink-0 group-hover:bg-navy group-hover:text-white transition-colors shadow-xs">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Feature Title */}
                <div className="text-left">
                  <h4 className="text-sm font-extrabold text-navy leading-snug">
                    {item.titleLine1}
                  </h4>
                  <p className="text-xs font-semibold text-gray-600 leading-snug">
                    {item.titleLine2}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;
