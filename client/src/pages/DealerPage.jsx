import React, { useState } from 'react';
import { ShieldCheck, Award, TrendingUp, Truck, CheckCircle2, Send } from 'lucide-react';
import { submitDealerApplication } from '../services/api';

const DealerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    businessType: 'Wholesaler / Distributor',
    yearsInBusiness: '5-10 Years',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const res = await submitDealerApplication(formData);
    if (res.success) {
      setStatus('success');
      setFormData({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        businessType: 'Wholesaler / Distributor',
        yearsInBusiness: '5-10 Years',
        message: ''
      });
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-brandGray-light py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Banner */}
        <div className="bg-navy-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brandOrange tracking-widest uppercase">
              <span className="w-8 h-0.5 bg-brandOrange"></span>
              <span>GROW WITH US</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Become an Authorized Railpower & Railwire Dealer
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              Partner with one of India's fastest growing electrical cable manufacturers. Enjoy competitive wholesale margins, exclusive territorial rights, and comprehensive marketing support.
            </p>
          </div>
        </div>

        {/* Dealer Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-card space-y-2">
            <div className="w-12 h-12 rounded-lg bg-orange-100 text-brandOrange flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-base font-extrabold text-navy">High Profit Margins</h3>
            <p className="text-xs text-gray-500">Attractive pricing slabs, bulk volume rebates, and lucrative annual target bonuses.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-card space-y-2">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-navy flex items-center justify-center mb-3">
              <Award className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-base font-extrabold text-navy">Brand & Marketing Support</h3>
            <p className="text-xs text-gray-500">Free shop glow-sign boards, counter displays, merchandise, and electrician meet sponsorships.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-card space-y-2">
            <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <Truck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-base font-extrabold text-navy">Priority Dispatch</h3>
            <p className="text-xs text-gray-500">Dedicated warehouse stock reserves ensuring 24 to 48-hour order dispatch across India.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-card space-y-2">
            <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h3 className="text-base font-extrabold text-navy">Territorial Protection</h3>
            <p className="text-xs text-gray-500">Protected geographic dealership zones to maximize your business growth and customer retention.</p>
          </div>
        </div>

        {/* Application Form & Guidelines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-gray-200 shadow-card">
            <h2 className="text-2xl font-extrabold text-navy mb-2">Dealership Application Form</h2>
            <p className="text-xs text-gray-500 mb-6">
              Fill out the form below. Our commercial distribution manager will review your business profile and connect with you.
            </p>

            {status === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center text-emerald-800 space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h3 className="text-xl font-extrabold">Application Submitted Successfully!</h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you for applying for a dealership. Reference Application ID has been created. Our regional manager will call you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg font-bold text-xs shadow"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      placeholder="e.g. Rajesh Patel"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Firm / Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      placeholder="e.g. Shree Ram Electricals"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      placeholder="+91 98250 00000"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      placeholder="firm@gmail.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      placeholder="e.g. Vadodara"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">State *</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      placeholder="e.g. Gujarat"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Business Type</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                    >
                      <option value="Wholesaler / Distributor">Wholesaler / Distributor</option>
                      <option value="Retailer / Electrical Store">Retailer / Electrical Store</option>
                      <option value="EPC Contractor">EPC Contractor</option>
                      <option value="OEM Manufacturer">OEM Manufacturer</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Years in Business</label>
                    <select
                      value={formData.yearsInBusiness}
                      onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                    >
                      <option value="1-3 Years">1-3 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5-10 Years">5-10 Years</option>
                      <option value="10+ Years">10+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-navy block mb-1">Additional Message / Current Brands Handled</label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                    placeholder="Tell us about your current monthly electrical turnover and territory..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brandOrange hover:bg-brandOrange-dark text-white py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Submitting Application...' : 'Apply for Dealership'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Info Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-dark text-white rounded-2xl p-8 shadow-card space-y-4">
              <h3 className="text-xl font-extrabold text-brandOrange">Dealer Partner Network</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Over 1,500+ electrical stockists and authorized dealers trust Railpower & Railwire across India.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-brandOrange" />
                  <span>Direct Factory Wholesale Pricing</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-brandOrange" />
                  <span>Dedicated B2B Order Portal Access</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-brandOrange" />
                  <span>100% Replacement Warranty Support</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card text-center space-y-3">
              <h4 className="text-sm font-extrabold text-navy">Already an Authorized Dealer?</h4>
              <p className="text-xs text-gray-500">Access your dealer portal to check order status and download price lists.</p>
              <a
                href="/dealer/login"
                className="inline-block px-6 py-2.5 bg-navy text-white rounded-lg text-xs font-bold shadow hover:bg-brandOrange transition-colors"
              >
                Login to Dealer Portal
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DealerPage;
