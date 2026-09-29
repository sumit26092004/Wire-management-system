import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Download, ShoppingCart, Package, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { DualBrandLogo } from '../assets/assetData';

const DealerDashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('orders');
  const [orderForm, setOrderForm] = useState({
    wireType: 'Railpower HRFR 1.5 sq mm',
    quantity: '50 Coils',
    color: 'Red',
    deliveryAddress: 'Main Godown, GIDC Area, Surat'
  });
  const [orderStatus, setOrderStatus] = useState(null);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleQuickOrder = (e) => {
    e.preventDefault();
    setOrderStatus('submitted');
    setTimeout(() => {
      setOrderStatus(null);
      setOrderForm({ wireType: 'Railpower HRFR 1.5 sq mm', quantity: '50 Coils', color: 'Red', deliveryAddress: 'Main Godown, GIDC Area, Surat' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-brandGray-light py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Top Header Card */}
        <div className="bg-navy-dark text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brandOrange text-white flex items-center justify-center font-extrabold text-xl shadow">
              DL
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold">
                  Welcome, {user?.name || 'Authorized Dealer'}
                </h1>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  Tier 1 Distributor
                </span>
              </div>
              <p className="text-xs text-gray-300 mt-1">
                Dealer Account ID: <span className="font-mono text-brandOrange font-bold">{user?.dealerId || 'DL-88402'}</span> • Zone: Gujarat West
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2.5 bg-navy hover:bg-red-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors border border-navy-light"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-card">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Wholesale Margin Tier</p>
            <h3 className="text-2xl font-extrabold text-navy mt-1">24.5% OFF</h3>
            <span className="text-[11px] text-emerald-600 font-semibold">Base Price List 2026</span>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-card">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Bulk Orders</p>
            <h3 className="text-2xl font-extrabold text-brandOrange mt-1">3 Orders</h3>
            <span className="text-[11px] text-gray-500 font-semibold">1 In Transit to Warehouse</span>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-card">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Credit Limit Available</p>
            <h3 className="text-2xl font-extrabold text-navy mt-1">₹ 4,50,000</h3>
            <span className="text-[11px] text-gray-500 font-semibold">30 Days Credit Cycle</span>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-card">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Target Status (Q3)</p>
            <h3 className="text-2xl font-extrabold text-emerald-600 mt-1">82% Achieved</h3>
            <span className="text-[11px] text-emerald-600 font-semibold">Eligible for Goa Trip Bonus</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-gray-200 pb-1">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'orders' ? 'bg-navy text-white shadow' : 'text-gray-600 hover:text-navy'
            }`}
          >
            Quick Wire Order Dispatch
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'history' ? 'bg-navy text-white shadow' : 'text-gray-600 hover:text-navy'
            }`}
          >
            Recent Order History
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'downloads' ? 'bg-navy text-white shadow' : 'text-gray-600 hover:text-navy'
            }`}
          >
            Dealer Price Lists & Certificates
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'orders' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-card">
              <h2 className="text-lg font-extrabold text-navy mb-4 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-brandOrange" />
                <span>Submit Direct Factory Order</span>
              </h2>

              {orderStatus === 'submitted' ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800 space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="font-extrabold text-base">Order Request Transmitted!</h4>
                  <p className="text-xs text-emerald-600">Dispatch Order #ORD-9921 has been generated and sent to Vadodara Central Logistics.</p>
                </div>
              ) : (
                <form onSubmit={handleQuickOrder} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Select Wire / Cable Product *</label>
                    <select
                      value={orderForm.wireType}
                      onChange={(e) => setOrderForm({ ...orderForm, wireType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                    >
                      <option value="Railpower HRFR 1.0 sq mm">Railpower HRFR 1.0 sq mm Flexible Single Core Wire</option>
                      <option value="Railpower HRFR 1.5 sq mm">Railpower HRFR 1.5 sq mm Flexible Single Core Wire</option>
                      <option value="Railpower HRFR 2.5 sq mm">Railpower HRFR 2.5 sq mm Flexible Single Core Wire</option>
                      <option value="Railwire FR 2.5 sq mm">Railwire FR 2.5 sq mm Home Electrical Wire</option>
                      <option value="Railpower 3-Core Submersible 4.0 sq mm">Railpower 3-Core 4.0 sq mm Flat Submersible Cable</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-navy block mb-1">Order Quantity (Coils/Drums) *</label>
                      <input
                        type="text"
                        required
                        value={orderForm.quantity}
                        onChange={(e) => setOrderForm({ ...orderForm, quantity: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                        placeholder="e.g. 100 Coils"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-navy block mb-1">Color / Insulation</label>
                      <select
                        value={orderForm.color}
                        onChange={(e) => setOrderForm({ ...orderForm, color: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      >
                        <option value="Red">Red</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Blue">Blue</option>
                        <option value="Black">Black</option>
                        <option value="Green (Earth)">Green (Earth)</option>
                        <option value="Assorted Box Mix">Assorted Box Mix</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Destination Godown / Site Address *</label>
                    <input
                      type="text"
                      required
                      value={orderForm.deliveryAddress}
                      onChange={(e) => setOrderForm({ ...orderForm, deliveryAddress: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brandOrange hover:bg-brandOrange-dark text-white py-3 rounded-xl text-xs font-extrabold shadow"
                  >
                    Confirm Wholesale Order Dispatch
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-gray-200 shadow-card space-y-4">
              <h3 className="text-sm font-extrabold text-navy border-b border-gray-100 pb-2">
                Logistics & Dispatch Notice
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Orders placed before 2:00 PM are dispatched same day from Gujarat regional warehouse. Track your truck transport LR receipt in Order History.
              </p>
              <div className="bg-orange-50 border border-brandOrange/20 p-4 rounded-xl text-xs text-brandOrange-dark font-semibold">
                ⚡ Festival Stock Scheme: Order 200+ coils of HRFR wire to receive 2 extra coil boxes free!
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card overflow-x-auto">
            <h3 className="text-sm font-extrabold text-navy mb-4">Recent Wholesale Dispatches</h3>
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-brandGray-light text-navy font-bold">
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Product Item</th>
                  <th className="p-3">Qty</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Total Invoice</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-3 font-mono font-bold text-brandOrange">#ORD-9918</td>
                  <td className="p-3 font-semibold text-navy">Railpower HRFR 1.5 sq mm (Red)</td>
                  <td className="p-3">100 Coils</td>
                  <td className="p-3 text-gray-500">2026-09-24</td>
                  <td className="p-3 font-bold text-navy">₹ 1,45,000</td>
                  <td className="p-3"><span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Dispatched</span></td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-brandOrange">#ORD-9844</td>
                  <td className="p-3 font-semibold text-navy">Railpower 3-Core Submersible 4 sq mm</td>
                  <td className="p-3">20 Rolls</td>
                  <td className="p-3 text-gray-500">2026-09-18</td>
                  <td className="p-3 font-bold text-navy">₹ 1,70,000</td>
                  <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">Delivered</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'downloads' && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card space-y-4">
            <h3 className="text-sm font-extrabold text-navy">Dealer Commercial Downloads</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-navy">Confidential Dealer Price List Q3 2026</h4>
                  <p className="text-[11px] text-gray-400">PDF • 1.8 MB</p>
                </div>
                <button onClick={() => alert('Downloading Price List...')} className="p-2 bg-navy text-white rounded-lg hover:bg-brandOrange">
                  <Download className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-navy">BIS IS 694 Type Test Certificate</h4>
                  <p className="text-[11px] text-gray-400">PDF • 2.4 MB</p>
                </div>
                <button onClick={() => alert('Downloading BIS Certificate...')} className="p-2 bg-navy text-white rounded-lg hover:bg-brandOrange">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default DealerDashboardPage;
