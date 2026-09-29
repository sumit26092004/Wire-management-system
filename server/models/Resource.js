import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  size: { type: String, default: '2.5 MB' },
  fileFormat: { type: String, default: 'PDF' },
  downloadUrl: { type: String, default: '#' }
}, { timestamps: true });

export default mongoose.model('Resource', resourceSchema);
