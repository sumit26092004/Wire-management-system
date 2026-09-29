import Resource from '../models/Resource.js';

export const getResources = async (req, res) => {
  try {
    const list = await Resource.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createResource = async (req, res) => {
  try {
    const resource = new Resource(req.body);
    const saved = await resource.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
