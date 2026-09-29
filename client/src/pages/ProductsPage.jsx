import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, ShieldCheck, ArrowRight, Star } from 'lucide-react';
import { getProducts } from '../services/api';
import { categoriesData, brandsData } from '../data/mockData';
import { ProductSVGs } from '../assets/assetData';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const brandParam = searchParams.get('brand') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedBrand, setSelectedBrand] = useState(brandParam);
  const [searchTerm, setSearchTerm] = useState(searchParam);

  useEffect(() => {
    fetchFilteredProducts();
  }, [selectedCategory, selectedBrand, searchTerm]);

  const fetchFilteredProducts = async () => {
    setLoading(true);
    const data = await getProducts({
      category: selectedCategory,
      brand: selectedBrand,
      search: searchTerm
    });
    setProducts(data);
    setLoading(false);
  };

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);
    setSearchParams(prev => {
      if (slug === 'all') prev.delete('category');
      else prev.set('category', slug);
      return prev;
    });
  };

  const handleBrandChange = (brandId) => {
    setSelectedBrand(brandId);
    setSearchParams(prev => {
      if (brandId === 'all') prev.delete('brand');
      else prev.set('brand', brandId);
      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-brandGray-light py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="bg-navy-dark text-white rounded-2xl p-8 sm:p-10 mb-8 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brandOrange tracking-widest uppercase">
              <span className="w-6 h-0.5 bg-brandOrange"></span>
              <span>COMPLETE ELECTRICAL CATALOGUE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Wires, Cables & Accessories
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Explore our IS 694 certified range of high-safety house wires, heat resistant HRFR cables, 3-core submersible pump cables, and industrial power distribution lines.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-xl p-4 sm:p-5 shadow-card mb-8 border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, size or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-brandGray-light border border-gray-200 rounded-lg text-sm text-navy focus:outline-none focus:border-brandOrange"
            />
          </div>

          {/* Brand Selector */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-xs font-bold text-navy uppercase tracking-wider whitespace-nowrap">Brand:</span>
            <div className="flex items-center gap-1.5 bg-brandGray-light p-1 rounded-lg border border-gray-200 text-xs font-semibold">
              <button
                onClick={() => handleBrandChange('all')}
                className={`px-3 py-1.5 rounded-md transition-all ${selectedBrand === 'all' ? 'bg-navy text-white shadow' : 'text-gray-600 hover:text-navy'}`}
              >
                All Brands
              </button>
              <button
                onClick={() => handleBrandChange('railpower')}
                className={`px-3 py-1.5 rounded-md transition-all ${selectedBrand === 'railpower' ? 'bg-brandOrange text-white shadow' : 'text-gray-600 hover:text-navy'}`}
              >
                RAILPOWER
              </button>
              <button
                onClick={() => handleBrandChange('railwire')}
                className={`px-3 py-1.5 rounded-md transition-all ${selectedBrand === 'railwire' ? 'bg-navy-dark text-white shadow' : 'text-gray-600 hover:text-navy'}`}
              >
                RAILWIRE
              </button>
            </div>
          </div>

        </div>

        {/* Category Horizontal Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
              selectedCategory === 'all'
                ? 'bg-navy text-white border-navy shadow'
                : 'bg-white text-navy-dark border-gray-200 hover:border-navy'
            }`}
          >
            All Categories ({products.length})
          </button>
          {categoriesData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.slug)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat.slug
                  ? 'bg-brandOrange text-white border-brandOrange shadow'
                  : 'bg-white text-navy-dark border-gray-200 hover:border-brandOrange'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="py-20 text-center">
            <div className="inline-block animate-spin w-8 h-8 border-4 border-brandOrange border-t-transparent rounded-full mb-3"></div>
            <p className="text-sm font-semibold text-gray-500">Loading catalog items...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((prod) => {
              const SvgGraphic = ProductSVGs[prod.imageType] || ProductSVGs.houseWires;
              return (
                <div
                  key={prod.id}
                  className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col justify-between shadow-card hover:shadow-card-hover hover:border-brandOrange/40 transition-all duration-300 group"
                >
                  <div>
                    {/* Badge & Brand */}
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="font-extrabold text-brandOrange tracking-wide uppercase">{prod.brandName}</span>
                      <span className="bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-semibold text-[10px] flex items-center gap-1 border border-emerald-200">
                        <ShieldCheck className="w-3 h-3" /> IS 694
                      </span>
                    </div>

                    {/* Image Preview */}
                    <div className="bg-brandGray-light rounded-lg p-4 mb-4 flex items-center justify-center min-h-[150px] group-hover:bg-orange-50/40 transition-colors">
                      <div className="transform group-hover:scale-105 transition-transform duration-300">
                        {SvgGraphic}
                      </div>
                    </div>

                    {/* Category */}
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      {prod.categoryName}
                    </p>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-navy leading-snug mb-2 group-hover:text-brandOrange transition-colors line-clamp-2">
                      {prod.name}
                    </h3>

                    <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                      {prod.shortDescription}
                    </p>
                  </div>

                  {/* Footer & CTA */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 font-semibold">List Price</p>
                      <p className="text-sm font-extrabold text-navy">{prod.price}</p>
                    </div>

                    <Link
                      to={`/products/${prod.slug}`}
                      className="bg-navy hover:bg-brandOrange text-white px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
            <h3 className="text-lg font-bold text-navy mb-2">No matching products found</h3>
            <p className="text-sm text-gray-500 mb-4">Try adjusting your category filter or search terms.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSelectedBrand('all'); setSearchTerm(''); }}
              className="px-5 py-2 bg-brandOrange text-white font-bold text-xs rounded-lg shadow"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductsPage;
