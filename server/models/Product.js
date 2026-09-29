import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  categoryName: { type: String, required: true },
  brand: { type: String, required: true },
  brandName: { type: String, required: true },
  shortDescription: { type: String },
  description: { type: String },
  price: { type: String },
  availableSizes: [{ type: String }],
  availableColors: [{ type: String }],
  specifications: { type: Map, of: String },
  features: [{ type: String }],
  applications: [{ type: String }],
  inStock: { type: Boolean, default: true },
  imageType: { type: String, default: 'houseWires' }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
