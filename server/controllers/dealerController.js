import DealerApplication from '../models/DealerApplication.js';

export const submitDealerApplication = async (req, res) => {
  try {
    const application = new DealerApplication(req.body);
    const saved = await application.save();
    res.status(201).json({ success: true, message: 'Application submitted successfully', data: saved });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getDealerApplications = async (req, res) => {
  try {
    const apps = await DealerApplication.find().sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateDealerStatus = async (req, res) => {
  try {
    const updated = await DealerApplication.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
