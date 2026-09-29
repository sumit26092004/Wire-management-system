import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../services/api';
import { DualBrandLogo } from '../assets/assetData';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('admin@railpower.in');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await loginUser({ email, password });
      if (data.success) {
        // Force admin role for login
        const adminUser = { ...data.user, role: 'admin', name: 'System Administrator' };
        login(adminUser, data.token);
        navigate('/admin');
      } else {
        setError('Invalid admin credentials');
      }
    } catch (err) {
      setError('Admin authentication failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 border border-gray-100 space-y-6">
        
        <div className="text-center space-y-2">
          <DualBrandLogo className="justify-center mb-2" />
          <h2 className="text-2xl font-extrabold text-navy">Corporate Admin Portal</h2>
          <p className="text-xs text-gray-500">
            Secure management of products, dealer applications & website inquiries.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-xs font-semibold text-center border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleAdminLogin} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-navy block mb-1">Admin Email *</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-navy block mb-1">Password *</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-navy hover:bg-navy-dark text-white py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <span>{loading ? 'Verifying...' : 'Login to Admin Panel'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};

export default AdminLoginPage;
