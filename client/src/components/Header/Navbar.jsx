import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { DualBrandLogo } from '../../assets/assetData';
import SearchModal from '../Common/SearchModal';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isDealer } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Applications', path: '/applications' },
    { name: 'Dealer', path: '/dealer' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-40 shadow-nav border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand Logos */}
          <Link to="/" className="flex items-center">
            <DualBrandLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 font-medium text-sm text-brandGray-text">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-2 transition-colors hover:text-brandOrange ${
                    active ? 'text-navy font-bold' : 'text-navy-light/90'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-brandOrange rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-navy-dark hover:text-brandOrange transition-colors rounded-full hover:bg-gray-100"
              title="Search products..."
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Dealer Login Button */}
            {isDealer ? (
              <Link
                to="/dealer/dashboard"
                className="bg-navy hover:bg-navy-dark text-white px-5 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 shadow-sm transition-all"
              >
                <User className="w-4 h-4 text-brandOrange" />
                <span>Dealer Portal</span>
              </Link>
            ) : (
              <Link
                to="/dealer/login"
                className="bg-brandOrange hover:bg-brandOrange-dark text-white px-5 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow transition-all"
              >
                <User className="w-4 h-4 fill-white" />
                <span>Dealer Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu & Search Icon */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-navy-dark hover:text-brandOrange"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-dark"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-medium border-b border-gray-50 ${
                  isActive(link.path) ? 'text-brandOrange font-bold' : 'text-navy-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/dealer/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-brandOrange text-white py-2.5 rounded-md text-center font-semibold flex items-center justify-center gap-2 shadow"
              >
                <User className="w-4 h-4" />
                <span>Dealer Login</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
