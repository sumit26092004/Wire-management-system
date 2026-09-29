import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../services/api';
import { DualBrandLogo } from '../assets/assetData';

const DealerLoginPage = () => {
  const [email, setEmail] = useState('dealer@railwire.in');
  const [password, setPassword] = useState('dealer123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await loginUser({ email, password });
      if (data.success) {
        login(data.user, data.token);
        navigate('/dealer/dashboard');
      } else {
        setError(data.message || 'Invalid Dealer ID or password');
      }
    } catch (err) {
      setError('Authentication failed. Please check credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-dark flex items-center justify-center p-4 relative overflow-hidden">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 border border-gray-100 relative z-10 space-y-6">
        
        {/* Header Logo */}
        <div className="text-center space-y-2">
          <DualBrandLogo className="justify-center mb-2" />
          <h2 className="text-2xl font-extrabold text-navy">Dealer Portal Login</h2>
          <p className="text-xs text-gray-500">
            Access authorized distributor catalogue pricing, stock levels, and commercial invoices.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-xs font-semibold text-center border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-navy block mb-1">Dealer ID / Email *</label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                placeholder="dealer@railwire.in"
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
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-brandOrange accent-brandOrange" />
              <span>Remember Device</span>
            </label>
            <a href="#" className="font-semibold text-brandOrange hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brandOrange hover:bg-brandOrange-dark text-white py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <span>{loading ? 'Authenticating...' : 'Login to Dashboard'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-gray-100 text-center space-y-2">
          <p className="text-xs text-gray-500">Not yet an authorized dealer?</p>
          <a href="/dealer" className="text-xs font-extrabold text-navy hover:text-brandOrange transition-colors">
            Apply for Dealership Network →
          </a>
        </div>

      </div>
    </div>
  );
};

export default DealerLoginPage;
