import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ChevronRight } from 'lucide-react';
import { productsData } from '../../data/mockData';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim().length > 1) {
      const q = query.toLowerCase();
      const filtered = productsData.filter(
        p => p.name.toLowerCase().includes(q) ||
             p.categoryName.toLowerCase().includes(q) ||
             p.brandName.toLowerCase().includes(q) ||
             p.shortDescription.toLowerCase().includes(q)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  const handleSelectProduct = (slug) => {
    onClose();
    setQuery('');
    navigate(`/products/${slug}`);
  };

  const handleViewAll = () => {
    onClose();
    navigate(`/products?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-navy-deep/70 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden border border-gray-100">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-gray-200">
          <Search className="w-5 h-5 text-brandOrange mr-3" />
          <input
            type="text"
            placeholder="Search wires, cables, HRFR, submersible pump cables..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-navy text-base focus:outline-none placeholder-gray-400 font-medium"
          />
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-navy rounded-md">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4">
          {query.trim().length <= 1 ? (
            <div className="text-center py-6 text-gray-400 text-sm">
              <p>Type at least 2 characters to search product catalog.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['HRFR Wires', 'Submersible Cable', 'FR Wires', 'Armored Cable'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 bg-gray-100 hover:bg-brandOrange/10 hover:text-brandOrange text-gray-600 rounded-full text-xs font-medium transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-3">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Found {results.length} Matching Products
              </p>
              {results.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => handleSelectProduct(prod.slug)}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-brandOrange/40 hover:bg-brandGray-light cursor-pointer transition-all group"
                >
                  <div>
                    <h4 className="text-sm font-bold text-navy group-hover:text-brandOrange transition-colors">
                      {prod.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                      <span className="font-semibold text-brandOrange">{prod.brandName}</span>
                      <span>•</span>
                      <span>{prod.categoryName}</span>
                      <span>•</span>
                      <span className="text-navy-light font-medium">{prod.price}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-brandOrange group-hover:translate-x-1 transition-all" />
                </div>
              ))}

              <button
                onClick={handleViewAll}
                className="w-full text-center py-2.5 mt-2 bg-navy text-white hover:bg-brandOrange text-xs font-bold rounded-lg transition-colors"
              >
                View All Results in Catalog →
              </button>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="font-semibold">No products found matching "{query}"</p>
              <p className="text-xs text-gray-400 mt-1">Try searching for House Wires, HRFR, 3-Core Submersible, or Cable Tray.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
