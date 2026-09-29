import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Download, Mail, ArrowLeft, CheckCircle2, FileText, Zap } from 'lucide-react';
import { getProductById } from '../services/api';
import { ProductSVGs } from '../assets/assetData';
import { submitContactEnquiry } from '../services/api';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  // Form State
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '10 Coils',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    setLoading(true);
    const data = await getProductById(id);
    setProduct(data);
    if (data && data.availableSizes) setSelectedSize(data.availableSizes[0]);
    if (data && data.availableColors) setSelectedColor(data.availableColors[0]);
    setLoading(false);
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    await submitContactEnquiry({
      ...enquiryForm,
      subject: `Enquiry for ${product.name} (${selectedSize}, ${selectedColor})`
    });
    setSubmitStatus('success');
    setTimeout(() => {
      setShowEnquiryModal(false);
      setSubmitStatus(null);
    }, 2500);
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-brandOrange border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-sm font-semibold text-navy">Loading product specifications...</p>
      </div>
    );
  }

  if (!product) return null;

  const SvgGraphic = ProductSVGs[product.imageType] || ProductSVGs.houseWires;

  return (
    <div className="min-h-screen bg-brandGray-light py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Back Link */}
        <Link to="/products" className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-brandOrange mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products Catalogue</span>
        </Link>

        {/* Top Detail Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10 shadow-card mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-brandGray-light rounded-xl p-8 border border-gray-100 relative">
              <span className="absolute top-4 left-4 bg-brandOrange text-white text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-full uppercase">
                {product.brandName}
              </span>
              <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" /> IS 694 Certified
              </span>

              <div className="w-full max-w-xs py-6 transform hover:scale-105 transition-transform">
                {SvgGraphic}
              </div>

              <div className="w-full mt-4 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 font-medium">
                <span>100% Copper Conductor</span>
                <span>•</span>
                <span>Anti-Rodent Coating</span>
                <span>•</span>
                <span>FIA Approved</span>
              </div>
            </div>

            {/* Right Specifications & Actions Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-xs font-bold text-brandOrange tracking-widest uppercase mb-1">
                  {product.categoryName}
                </p>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-navy leading-tight">
                  {product.name}
                </h1>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price Tag */}
              <div className="bg-orange-50/60 p-4 rounded-xl border border-brandOrange/20 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 font-semibold block">Indicative Dealer Price</span>
                  <span className="text-2xl font-extrabold text-navy">{product.price}</span>
                </div>
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-md">
                  In Stock & Ready to Dispatch
                </span>
              </div>

              {/* Available Sizes Selection */}
              {product.availableSizes && (
                <div>
                  <label className="text-xs font-bold text-navy uppercase tracking-wider block mb-2">
                    Select Conductor Size:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.availableSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                          selectedSize === size
                            ? 'bg-navy text-white border-navy shadow'
                            : 'bg-white text-navy border-gray-200 hover:border-navy'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Insulation Colors */}
              {product.availableColors && (
                <div>
                  <label className="text-xs font-bold text-navy uppercase tracking-wider block mb-2">
                    Available Sheath / Core Color:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.availableColors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                          selectedColor === color
                            ? 'bg-brandOrange text-white border-brandOrange shadow'
                            : 'bg-white text-navy border-gray-200 hover:border-brandOrange'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setShowEnquiryModal(true)}
                  className="flex-1 bg-brandOrange hover:bg-brandOrange-dark text-white py-3.5 px-6 rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Request Wholesale Enquiry</span>
                </button>

                <a
                  href="/resources"
                  className="bg-navy hover:bg-navy-dark text-white py-3.5 px-6 rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Catalogue</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Detailed Specs Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Specifications Table (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-card">
            <h3 className="text-lg font-extrabold text-navy border-b border-gray-200 pb-3 mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brandOrange" />
              <span>Technical Specifications Matrix</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <tbody>
                  {Object.entries(product.specifications || {}).map(([key, value], idx) => (
                    <tr key={key} className={idx % 2 === 0 ? 'bg-brandGray-light' : 'bg-white'}>
                      <td className="py-3 px-4 font-bold text-navy border-b border-gray-100 w-1/3">{key}</td>
                      <td className="py-3 px-4 font-semibold text-gray-700 border-b border-gray-100">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Features & Applications (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-card">
              <h4 className="text-sm font-extrabold text-navy mb-4 uppercase tracking-wider border-b border-gray-100 pb-2">
                Key Performance Features
              </h4>
              <ul className="space-y-3">
                {product.features?.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-dark text-white rounded-2xl p-6 shadow-card">
              <h4 className="text-sm font-extrabold text-brandOrange mb-3 uppercase tracking-wider">
                Recommended Applications
              </h4>
              <ul className="space-y-2">
                {product.applications?.map((app, idx) => (
                  <li key={idx} className="text-xs font-medium text-gray-200 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-brandOrange" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>

      {/* Enquiry Modal */}
      {showEnquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative border border-gray-100 animate-fade-in">
            <h3 className="text-xl font-extrabold text-navy mb-1">
              Request Enquiry / Quote
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Product: <span className="font-bold text-brandOrange">{product.name} ({selectedSize})</span>
            </p>

            {submitStatus === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
                <h4 className="font-bold text-base">Enquiry Sent Successfully!</h4>
                <p className="text-xs mt-1 text-emerald-600">Our commercial sales representative will contact you within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-navy block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={enquiryForm.name}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      placeholder="+91 98000 00000"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-navy block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-navy block mb-1">Quantity / Message</label>
                  <textarea
                    rows="3"
                    value={enquiryForm.message}
                    onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-navy focus:outline-none focus:border-brandOrange"
                    placeholder="Specify total coil quantity or delivery location requirements..."
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowEnquiryModal(false)}
                    className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="flex-1 py-2.5 bg-brandOrange hover:bg-brandOrange-dark text-white rounded-lg text-xs font-bold shadow"
                  >
                    {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Commercial Quote'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDetailPage;
