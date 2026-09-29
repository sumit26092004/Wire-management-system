import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { submitContactEnquiry } from '../services/api';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const res = await submitContactEnquiry(form);
    if (res.success) {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-brandGray-light py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* Banner */}
        <div className="bg-navy-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brandOrange tracking-widest uppercase">
              <span className="w-8 h-0.5 bg-brandOrange"></span>
              <span>GET IN TOUCH</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contact Railpower & Railwire
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              Have questions regarding wire specifications, bulk wholesale orders, or dealership opportunities? Connect directly with our sales and technical support office.
            </p>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-brandOrange flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Support</h4>
              <a href="tel:+918282820210" className="text-sm font-extrabold text-navy hover:text-brandOrange transition-colors block mt-1">
                +91 8282820210
              </a>
              <span className="text-[11px] text-gray-500 font-medium">Toll Free Sales Helpline</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-navy flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Support</h4>
              <a href="mailto:info@railwire.in" className="text-sm font-extrabold text-navy hover:text-brandOrange transition-colors block mt-1">
                info@railwire.in
              </a>
              <span className="text-[11px] text-gray-500 font-medium">Commercial & B2B Desk</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Factory & HQ</h4>
              <p className="text-xs font-bold text-navy mt-1">
                GIDC Waghodia, Vadodara, Gujarat 391760
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Working Hours</h4>
              <p className="text-xs font-bold text-navy mt-1">
                Mon - Sat: 9:00 AM - 7:00 PM
              </p>
              <span className="text-[11px] text-gray-500 font-medium">Sunday Closed</span>
            </div>
          </div>
        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-gray-200 shadow-card">
            <h2 className="text-2xl font-extrabold text-navy mb-2">Send Us a Direct Message</h2>
            <p className="text-xs text-gray-500 mb-6">
              Our sales engineering desk responds to all technical and pricing inquiries within 2 hours.
            </p>

            {status === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center text-emerald-800 space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h3 className="text-xl font-extrabold">Enquiry Submitted Successfully!</h3>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you for reaching out. We have logged your request and our technical representative will call you shortly.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg font-bold text-xs shadow"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      placeholder="e.g. Suresh Kumar"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      placeholder="suresh@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      placeholder="+91 98980 00000"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Subject *</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      placeholder="e.g. Bulk HRFR Wire Quote"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-navy block mb-1">Detailed Message *</label>
                  <textarea
                    rows="4"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                    placeholder="Provide details about wire sizes, estimated volume, and destination state..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brandOrange hover:bg-brandOrange-dark text-white py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Map & Factory Preview (5 cols) */}
          <div className="lg:col-span-5 bg-navy-dark text-white rounded-2xl p-6 shadow-card flex flex-col justify-between overflow-hidden relative min-h-[350px]">
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl font-extrabold text-brandOrange">Vadodara Manufacturing Plant</h3>
              <p className="text-xs text-gray-300">
                Spanning over 85,000 sq. ft. of automated copper drawing & extrusion facilities in GIDC Waghodia.
              </p>
            </div>

            {/* Styled Map Box */}
            <div className="my-6 bg-navy rounded-xl border border-navy-light p-6 text-center space-y-3 relative z-10">
              <MapPin className="w-10 h-10 text-brandOrange mx-auto" />
              <div className="text-xs font-bold text-white">
                GIDC Waghodia Industrial Estate <br />
                Vadodara, Gujarat 391760, India
              </div>
              <p className="text-[11px] text-gray-400">GPS Coordinates: 22.2842° N, 73.3768° E</p>
            </div>

            <div className="text-center relative z-10 pt-2 border-t border-navy-light">
              <span className="text-xs text-gray-400 font-semibold">Visitors & Dealer Audits Welcome by Appointment</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;
