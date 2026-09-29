import ContactEnquiry from '../models/ContactEnquiry.js';

export const submitContactEnquiry = async (req, res) => {
  try {
    const enquiry = new ContactEnquiry(req.body);
    const saved = await enquiry.save();
    res.status(201).json({ success: true, message: 'Enquiry submitted successfully', data: saved });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getContactEnquiries = async (req, res) => {
  try {
    const list = await ContactEnquiry.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
