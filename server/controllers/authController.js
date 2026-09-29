import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'railpower_super_secret_jwt_key_2026', {
    expiresIn: '30d'
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        success: true,
        token: generateToken(user._id),
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          dealerId: user.dealerId
        }
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const registerUser = async (req, res) => {
  const { name, email, password, role, companyName, phone } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }
    const dealerId = role === 'dealer' ? `DL-${Math.floor(10000 + Math.random() * 90000)}` : undefined;
    const user = await User.create({
      name,
      email,
      password,
      role: role || 'dealer',
      dealerId,
      companyName,
      phone
    });
    res.status(201).json({
      success: true,
      token: generateToken(user._id),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        dealerId: user.dealerId
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
