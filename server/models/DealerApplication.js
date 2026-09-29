import mongoose from 'mongoose';

const dealerApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  businessType: { type: String, default: 'Wholesaler / Distributor' },
  yearsInBusiness: { type: String },
  message: { type: String },
  status: { type: String, enum: ['Pending', 'Under Review', 'Approved', 'Rejected'], default: 'Pending' }
}, { timestamps: true });

export default mongoose.model('DealerApplication', dealerApplicationSchema);
