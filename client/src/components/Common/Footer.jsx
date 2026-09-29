import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Zap, Facebook, Linkedin, Youtube, Instagram, ShieldCheck } from 'lucide-react';
import { DualBrandLogo } from '../../assets/assetData';

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-gray-300 border-t border-navy-light/40 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-light/30">
          
          {/* Brand Info Column (2 columns span on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-3 rounded-lg inline-block shadow-sm">
              <DualBrandLogo />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed mt-2">
              Leading Indian manufacturer of high-safety electrical wires, heavy power cables, heat-resistant HRFR conductors, and submersible pump cables for residential, commercial, and industrial applications.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-brandOrange pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>IS 694 : 2010 & ISO 9001:2015 Certified Manufacturing</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-brandOrange/40 pb-1.5 inline-block">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link to="/" className="hover:text-brandOrange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brandOrange transition-colors">About Us</Link></li>
              <li><Link to="/applications" className="hover:text-brandOrange transition-colors">Applications</Link></li>
              <li><Link to="/dealer" className="hover:text-brandOrange transition-colors">Become a Dealer</Link></li>
              <li><Link to="/contact" className="hover:text-brandOrange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Product Categories Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-brandOrange/40 pb-1.5 inline-block">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link to="/products?category=house-wires" className="hover:text-brandOrange transition-colors">House Wires</Link></li>
              <li><Link to="/products?category=fr-wires" className="hover:text-brandOrange transition-colors">FR Wires</Link></li>
              <li><Link to="/products?category=hrfr-wires" className="hover:text-brandOrange transition-colors">HRFR Wires</Link></li>
              <li><Link to="/products?category=submersible-cables" className="hover:text-brandOrange transition-colors">Submersible Cables</Link></li>
              <li><Link to="/products?category=industrial-cables" className="hover:text-brandOrange transition-colors">Industrial Cables</Link></li>
              <li><Link to="/products?category=multicore-cables" className="hover:text-brandOrange transition-colors">Multicore Cables</Link></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-brandOrange/40 pb-1.5 inline-block">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brandOrange flex-shrink-0 mt-0.5" />
                <span>GIDC Industrial Estate, Waghodia, Vadodara, Gujarat 391760, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brandOrange flex-shrink-0" />
                <a href="tel:+918282820210" className="hover:text-brandOrange transition-colors">+91 8282820210</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brandOrange flex-shrink-0" />
                <a href="mailto:info@railwire.in" className="hover:text-brandOrange transition-colors">info@railwire.in</a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-8 h-8 rounded-full bg-navy-dark border border-navy-light flex items-center justify-center hover:bg-brandOrange hover:text-white transition-colors" title="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-navy-dark border border-navy-light flex items-center justify-center hover:bg-brandOrange hover:text-white transition-colors" title="LinkedIn"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-navy-dark border border-navy-light flex items-center justify-center hover:bg-brandOrange hover:text-white transition-colors" title="YouTube"><Youtube className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-navy-dark border border-navy-light flex items-center justify-center hover:bg-brandOrange hover:text-white transition-colors" title="Instagram"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Railpower & Railwire Wires & Cables. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/resources" className="hover:text-brandOrange transition-colors">Catalogue & Datasheets</Link>
            <Link to="/dealer/login" className="hover:text-brandOrange transition-colors">Dealer Portal</Link>
            <Link to="/admin/login" className="hover:text-brandOrange transition-colors">Admin Login</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
