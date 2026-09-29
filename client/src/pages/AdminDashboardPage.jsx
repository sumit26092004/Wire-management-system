import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Users, FileText, Plus, Trash2, CheckCircle2, Clock, LogOut, ShieldCheck, Mail } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { productsData, mockDealerApplications, mockContactEnquiries } from '../data/mockData';

const AdminDashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('products');
  const [productsList, setProductsList] = useState(productsData);
  const [dealerApps, setDealerApps] = useState(mockDealerApplications);
  const [enquiries, setEnquiries] = useState(mockContactEnquiries);

  // New Product Modal State
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProd, setNewProd] = useState({
    name: '',
    category: 'hrfr-wires',
    categoryName: 'HRFR Wires',
    brand: 'railpower',
    brandName: 'RAILPOWER',
    price: '₹2,100 / 90m Coil',
    shortDescription: 'Flame retardant wire for commercial installation.',
    description: 'High conductivity copper conductor with low halogen emission.',
    imageType: 'hrfrWires'
  });

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProductsList(productsList.filter(p => p.id !== id));
    }
  };

  const handleAddProductSubmit = (e) => {
    e.preventDefault();
    const created = {
      id: `prod-${Date.now()}`,
      slug: newProd.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      ...newProd,
      inStock: true,
      rating: 5.0,
      availableSizes: ['1.0 sq mm', '1.5 sq mm', '2.5 sq mm'],
      availableColors: ['Red', 'Yellow', 'Blue', 'Black'],
      specifications: {
        'Conductor': '99.97% Pure Electrolytic Copper',
        'Voltage': '1100V'
      },
      features: ['High Flame Retardancy', 'BIS Approved']
    };
    setProductsList([created, ...productsList]);
    setShowAddProductModal(false);
    setNewProd({
      name: '',
      category: 'hrfr-wires',
      categoryName: 'HRFR Wires',
      brand: 'railpower',
      brandName: 'RAILPOWER',
      price: '₹2,100 / 90m Coil',
      shortDescription: '',
      description: '',
      imageType: 'hrfrWires'
    });
  };

  const handleUpdateDealerStatus = (id, newStatus) => {
    setDealerApps(dealerApps.map(app => app.id === id ? { ...app, status: newStatus } : app));
  };

  return (
    <div className="min-h-screen bg-brandGray-light py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Header */}
        <div className="bg-navy-dark text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-navy text-brandOrange flex items-center justify-center border border-navy-light shadow">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold">
                  Railpower & Railwire Admin Dashboard
                </h1>
                <span className="bg-brandOrange text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  Super Admin
                </span>
              </div>
              <p className="text-xs text-gray-300 mt-1">
                Logged in as <span className="font-semibold text-white">{user?.email || 'admin@railpower.in'}</span>
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2.5 bg-navy hover:bg-red-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors border border-navy-light"
          >
            <LogOut className="w-4 h-4" />
            <span>Admin Sign Out</span>
          </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-card flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Products</p>
              <h3 className="text-2xl font-extrabold text-navy mt-1">{productsList.length} Items</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-orange-50 text-brandOrange flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-card flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Dealer Applications</p>
              <h3 className="text-2xl font-extrabold text-brandOrange mt-1">{dealerApps.length} Pending</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-navy flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-card flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Contact Enquiries</p>
              <h3 className="text-2xl font-extrabold text-navy mt-1">{enquiries.length} New</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-card flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Categories</p>
              <h3 className="text-2xl font-extrabold text-emerald-600 mt-1">7 Categories</h3>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'products' ? 'bg-navy text-white shadow' : 'text-gray-600 hover:text-navy'
              }`}
            >
              Manage Products ({productsList.length})
            </button>
            <button
              onClick={() => setActiveTab('dealers')}
              className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'dealers' ? 'bg-navy text-white shadow' : 'text-gray-600 hover:text-navy'
              }`}
            >
              Dealer Applications ({dealerApps.length})
            </button>
            <button
              onClick={() => setActiveTab('enquiries')}
              className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'enquiries' ? 'bg-navy text-white shadow' : 'text-gray-600 hover:text-navy'
              }`}
            >
              Customer Enquiries ({enquiries.length})
            </button>
          </div>

          {activeTab === 'products' && (
            <button
              onClick={() => setShowAddProductModal(true)}
              className="bg-brandOrange hover:bg-brandOrange-dark text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Product</span>
            </button>
          )}
        </div>

        {/* Products Management Table */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-brandGray-light text-navy font-bold border-b border-gray-200">
                  <th className="p-3">Product Name</th>
                  <th className="p-3">Brand</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {productsList.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="p-3 font-bold text-navy">{p.name}</td>
                    <td className="p-3 font-extrabold text-brandOrange">{p.brandName}</td>
                    <td className="p-3 font-semibold text-gray-600">{p.categoryName}</td>
                    <td className="p-3 font-bold text-navy">{p.price}</td>
                    <td className="p-3">
                      <button
                        onClick={() => handleDeleteProduct(p.id)}
                        className="p-1.5 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-md transition-colors"
                        title="Delete Product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Dealer Applications Table */}
        {activeTab === 'dealers' && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-brandGray-light text-navy font-bold border-b border-gray-200">
                  <th className="p-3">App ID</th>
                  <th className="p-3">Applicant Name</th>
                  <th className="p-3">Company Name</th>
                  <th className="p-3">City / State</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dealerApps.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="p-3 font-mono font-bold text-navy">{app.id}</td>
                    <td className="p-3 font-bold text-navy">{app.name}</td>
                    <td className="p-3 font-semibold text-gray-700">{app.companyName}</td>
                    <td className="p-3 text-gray-600">{app.city}, {app.state}</td>
                    <td className="p-3 font-mono">{app.phone}</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-0.5 rounded-full font-extrabold text-[10px] ${
                        app.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="p-3">
                      {app.status !== 'Approved' && (
                        <button
                          onClick={() => handleUpdateDealerStatus(app.id, 'Approved')}
                          className="px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold rounded hover:bg-emerald-700 shadow"
                        >
                          Approve
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Contact Enquiries Table */}
        {activeTab === 'enquiries' && (
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-brandGray-light text-navy font-bold border-b border-gray-200">
                  <th className="p-3">ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email / Phone</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Message</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {enquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-gray-50">
                    <td className="p-3 font-mono font-bold text-navy">{enq.id}</td>
                    <td className="p-3 font-bold text-navy">{enq.name}</td>
                    <td className="p-3 text-gray-600">
                      <div>{enq.email}</div>
                      <div className="font-mono text-[11px] text-gray-400">{enq.phone}</div>
                    </td>
                    <td className="p-3 font-bold text-brandOrange">{enq.subject}</td>
                    <td className="p-3 text-gray-600 max-w-xs truncate">{enq.message}</td>
                    <td className="p-3">
                      <span className="bg-blue-100 text-navy px-2.5 py-0.5 rounded-full font-bold text-[10px]">
                        {enq.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>

      {/* Add New Product Modal */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative border border-gray-100">
            <h3 className="text-xl font-extrabold text-navy mb-4">Add New Electrical Product</h3>
            <form onSubmit={handleAddProductSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-navy block mb-1">Product Title *</label>
                <input
                  type="text"
                  required
                  value={newProd.name}
                  onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy"
                  placeholder="e.g. Railpower HRFR 4.0 sq mm Wire"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-navy block mb-1">Brand</label>
                  <select
                    value={newProd.brand}
                    onChange={(e) => setNewProd({ 
                      ...newProd, 
                      brand: e.target.value,
                      brandName: e.target.value === 'railpower' ? 'RAILPOWER' : 'RAILWIRE'
                    })}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy"
                  >
                    <option value="railpower">RAILPOWER</option>
                    <option value="railwire">RAILWIRE</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-navy block mb-1">Category</label>
                  <select
                    value={newProd.category}
                    onChange={(e) => setNewProd({ 
                      ...newProd, 
                      category: e.target.value,
                      categoryName: e.target.value.replace('-', ' ').toUpperCase()
                    })}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy"
                  >
                    <option value="hrfr-wires">HRFR Wires</option>
                    <option value="fr-wires">FR Wires</option>
                    <option value="house-wires">House Wires</option>
                    <option value="submersible-cables">Submersible Cable</option>
                    <option value="industrial-cables">Industrial Cable</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-navy block mb-1">Indicative Price</label>
                <input
                  type="text"
                  value={newProd.price}
                  onChange={(e) => setNewProd({ ...newProd, price: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-navy block mb-1">Short Description</label>
                <textarea
                  rows="2"
                  value={newProd.shortDescription}
                  onChange={(e) => setNewProd({ ...newProd, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddProductModal(false)}
                  className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-brandOrange text-white rounded-lg text-xs font-bold shadow"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboardPage;
