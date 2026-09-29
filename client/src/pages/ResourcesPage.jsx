import React, { useState, useEffect } from 'react';
import { Download, FileText, ShieldCheck, Search, FileDown } from 'lucide-react';
import { getResources } from '../services/api';

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    const data = await getResources();
    setResources(data);
  };

  const categories = ['All', 'Product Catalogue', 'Datasheets', 'Brochures', 'Certifications', 'Installation Guides'];

  const filtered = selectedCategory === 'All'
    ? resources
    : resources.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-brandGray-light py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Banner */}
        <div className="bg-navy-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brandOrange tracking-widest uppercase">
              <span className="w-8 h-0.5 bg-brandOrange"></span>
              <span>TECHNICAL DOCUMENTATION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Catalogues, Datasheets & Certifications
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              Download official BIS IS 694 / IS 7098 test certificates, product catalogues, dimensional datasheets, and wiring installation guides.
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-brandOrange text-white border-brandOrange shadow'
                  : 'bg-white text-navy border-gray-200 hover:border-brandOrange'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-card hover:shadow-card-hover hover:border-brandOrange/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="bg-orange-50 text-brandOrange font-bold px-2.5 py-1 rounded-md border border-orange-100">
                    {item.category}
                  </span>
                  <span className="text-gray-400 font-semibold">{item.size} • {item.fileFormat}</span>
                </div>

                <div className="flex items-start gap-3 my-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center flex-shrink-0 group-hover:bg-navy group-hover:text-white transition-colors">
                    <FileText className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h3 className="text-sm font-bold text-navy leading-snug group-hover:text-brandOrange transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert(`Downloading ${item.title}...`); }}
                  className="w-full bg-navy hover:bg-brandOrange text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Document</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ResourcesPage;
