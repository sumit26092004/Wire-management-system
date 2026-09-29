import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Factory, TrainTrack, Sprout, Sun, ArrowRight, ShieldCheck } from 'lucide-react';
import { applicationsData } from '../data/mockData';

const iconMap = {
  Home: Home,
  Building2: Building2,
  Factory: Factory,
  TrainTrack: TrainTrack,
  Sprout: Sprout,
  Sun: Sun
};

const ApplicationsPage = () => {
  return (
    <div className="min-h-screen bg-brandGray-light py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* Banner */}
        <div className="bg-navy-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brandOrange tracking-widest uppercase">
              <span className="w-8 h-0.5 bg-brandOrange"></span>
              <span>INDUSTRIAL & SECTORAL SOLUTIONS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Powering Every Sector with Uncompromised Safety
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              From residential high-rises and commercial shopping complexes to deep submersible borewells and high-voltage factory switchyards, discover how Railpower & Railwire products power critical electrical infrastructure.
            </p>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applicationsData.map((app) => {
            const Icon = iconMap[app.icon] || Building2;
            return (
              <div
                key={app.id}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-card hover:shadow-card-hover hover:border-brandOrange/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-brandOrange border border-orange-100 flex items-center justify-center mb-6 group-hover:bg-brandOrange group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  <h3 className="text-xl font-extrabold text-navy mb-3 group-hover:text-brandOrange transition-colors">
                    {app.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {app.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> BIS Certified
                  </span>

                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-xs font-extrabold text-navy group-hover:text-brandOrange transition-colors"
                  >
                    <span>View Cables</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Card */}
        <div className="bg-navy-dark text-white rounded-2xl p-8 sm:p-10 text-center shadow-xl space-y-4">
          <h2 className="text-2xl font-extrabold">Need Custom Cable Specifications for Your Project?</h2>
          <p className="text-xs text-gray-300 max-w-xl mx-auto">
            Our engineering team designs custom armored multicore cables, fire-survival wires, and special solar DC conductors tailored to your tender specifications.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brandOrange hover:bg-brandOrange-dark text-white px-7 py-3 rounded-xl text-sm font-extrabold shadow-lg transition-all"
            >
              <span>Consult Project Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApplicationsPage;
