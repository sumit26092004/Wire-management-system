import React from 'react';
import { ShieldCheck, Award, Factory, Cpu, Users, CheckCircle2, Zap } from 'lucide-react';
import { timelineMilestones } from '../data/mockData';
import { DualBrandLogo } from '../assets/assetData';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-brandGray-light py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Banner */}
        <div className="bg-navy-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brandOrange tracking-widest uppercase">
              <span className="w-8 h-0.5 bg-brandOrange"></span>
              <span>ABOUT RAILPOWER & RAILWIRE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Pioneering Electrical Safety & Manufacturing Excellence
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              Established in 2015, Railpower and Railwire have emerged as premier Indian manufacturers of high-quality copper wires, HRFR building cables, and heavy duty industrial conductors engineered for extreme reliability.
            </p>
          </div>
        </div>

        {/* Dual Brand Overview */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-card">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <DualBrandLogo className="justify-center mb-4" />
            <h2 className="text-2xl font-extrabold text-navy">Two Strong Brands. One Quality Commitment.</h2>
            <p className="text-xs text-gray-500 mt-2">
              Our dual-brand structure caters seamlessly to both residential architectural safety requirements and high-load industrial power distribution projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brandGray-light p-6 rounded-xl border border-gray-100 space-y-3">
              <h3 className="text-lg font-extrabold text-navy flex items-center gap-2">
                <span className="w-3 h-3 bg-brandOrange rounded-full"></span>
                RAILPOWER WIRES & CABLES
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Focused on heavy industrial armored cables, XLPE power distribution, 3-Core flat submersible pump cables, and high-capacity cable tray infrastructure built for severe operational environments.
              </p>
            </div>

            <div className="bg-brandGray-light p-6 rounded-xl border border-gray-100 space-y-3">
              <h3 className="text-lg font-extrabold text-navy flex items-center gap-2">
                <span className="w-3 h-3 bg-navy rounded-full"></span>
                RAILWIRE WIRES & CABLES
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Specialized in flame retardant (FR) and heat resistant flame retardant (HRFR) single-core home building wires, commercial high-rise cables, and flexible multicore control lines ensuring human safety.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-brandOrange flex items-center justify-center">
              <Zap className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-extrabold text-navy">Our Vision</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              To be India's most trusted electrical wire and cable manufacturer recognized globally for zero-defect production, fire safety innovation, and sustainable green manufacturing standards.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-card space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-navy flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-extrabold text-navy">Our Mission</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              To empower homes, industries, and public infrastructure with 99.97% pure electrolytic copper conductors, providing flame retardancy that protects lives and prevents power losses.
            </p>
          </div>
        </div>

        {/* Manufacturing Capabilities */}
        <div className="bg-navy-dark text-white rounded-2xl p-8 sm:p-10 shadow-xl">
          <h2 className="text-2xl font-extrabold mb-8 text-center">State-of-the-Art Manufacturing Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy p-6 rounded-xl border border-navy-light space-y-2">
              <Factory className="w-8 h-8 text-brandOrange mb-2" />
              <h4 className="text-base font-extrabold">Continuous Copper Casting</h4>
              <p className="text-xs text-gray-300">Automated electrolytic rod drawing ensuring 100% conductivity and uniform wire gauge flexibility.</p>
            </div>
            <div className="bg-navy p-6 rounded-xl border border-navy-light space-y-2">
              <Cpu className="w-8 h-8 text-brandOrange mb-2" />
              <h4 className="text-base font-extrabold">Triple Extrusion Lines</h4>
              <p className="text-xs text-gray-300">High precision German compounding extruders producing dual-layer HRFR PVC insulation.</p>
            </div>
            <div className="bg-navy p-6 rounded-xl border border-navy-light space-y-2">
              <Award className="w-8 h-8 text-brandOrange mb-2" />
              <h4 className="text-base font-extrabold">Laser Spark Testing</h4>
              <p className="text-xs text-gray-300">In-line high voltage spark test equipment checking 100% of manufactured cable length for microscopic pinholes.</p>
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-card">
          <h2 className="text-2xl font-extrabold text-navy mb-8 text-center">Our Milestone Journey (2015 – 2026)</h2>
          <div className="relative border-l-2 border-brandOrange/30 ml-4 md:ml-32 space-y-8">
            {timelineMilestones.map((m, idx) => (
              <div key={idx} className="relative pl-8 group">
                {/* Year Marker */}
                <div className="absolute -left-3 top-0.5 w-6 h-6 rounded-full bg-brandOrange border-4 border-white shadow flex items-center justify-center"></div>
                <div className="md:absolute md:-left-36 md:top-0 text-sm font-extrabold text-brandOrange tracking-wider">
                  {m.year}
                </div>
                <h4 className="text-base font-extrabold text-navy">{m.title}</h4>
                <p className="text-xs text-gray-600 mt-1 max-w-xl leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
