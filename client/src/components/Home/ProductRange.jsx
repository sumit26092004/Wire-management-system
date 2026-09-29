import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categoriesData } from '../../data/mockData';
import { ProductSVGs } from '../../assets/assetData';

const categoryImagesMap = {
  'house-wires': ProductSVGs.houseWires,
  'fr-wires': ProductSVGs.frWires,
  'hrfr-wires': ProductSVGs.hrfrWires,
  'submersible-cables': ProductSVGs.submersible,
  'industrial-cables': ProductSVGs.industrial,
  'multicore-cables': ProductSVGs.multicore,
  'accessories': ProductSVGs.accessories
};

const ProductRange = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-[3.5px] bg-brandOrange rounded-full"></span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                Our Product Range
              </h2>
            </div>
            <p className="text-sm font-medium text-gray-600 pl-8">
              Wide Range of Electrical Wires, Cables and Accessories
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-navy hover:text-brandOrange font-bold text-sm transition-colors group self-start sm:self-auto"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 text-brandOrange group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 7 Responsive Product Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categoriesData.map((cat) => {
            const SvgGraphic = categoryImagesMap[cat.slug] || ProductSVGs.houseWires;
            return (
              <div
                key={cat.id}
                onClick={() => navigate(`/products?category=${cat.slug}`)}
                className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col items-center justify-between text-center cursor-pointer hover:border-brandOrange/60 hover:shadow-card-hover transition-all duration-300 group"
              >
                {/* Product Image Light Gray Box */}
                <div className="w-full bg-brandGray-light rounded-lg p-3 mb-3 flex items-center justify-center min-h-[140px] group-hover:bg-orange-50/50 transition-colors">
                  <div className="transform group-hover:scale-105 transition-transform duration-300">
                    {SvgGraphic}
                  </div>
                </div>

                {/* Category Title */}
                <h3 className="text-xs sm:text-sm font-bold text-navy group-hover:text-brandOrange transition-colors line-clamp-1">
                  {cat.name}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProductRange;
