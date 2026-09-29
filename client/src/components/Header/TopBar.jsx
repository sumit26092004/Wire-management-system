import React from 'react';
import { Zap, Phone, Mail, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-navy-dark text-white text-xs py-2 px-4 border-b border-navy-light/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left Side */}
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <Zap className="w-3.5 h-3.5 text-brandOrange fill-brandOrange" />
          <span>Trusted Electrical Connections</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <a href="tel:+918282820210" className="flex items-center gap-1.5 hover:text-brandOrange transition-colors">
            <Phone className="w-3.5 h-3.5 text-brandOrange" />
            <span>+91 8282820210</span>
          </a>
          <span className="hidden md:inline text-navy-light">|</span>
          <a href="mailto:info@railwire.in" className="hidden md:flex items-center gap-1.5 hover:text-brandOrange transition-colors">
            <Mail className="w-3.5 h-3.5 text-brandOrange" />
            <span>info@railwire.in</span>
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a href="#" className="hover:text-brandOrange transition-colors" title="Facebook"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-brandOrange transition-colors" title="LinkedIn"><Linkedin className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-brandOrange transition-colors" title="YouTube"><Youtube className="w-3.5 h-3.5" /></a>
            <a href="#" className="hover:text-brandOrange transition-colors" title="Instagram"><Instagram className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
