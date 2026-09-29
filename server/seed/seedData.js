import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import Brand from '../models/Brand.js';
import Resource from '../models/Resource.js';

dotenv.config();

const initialProducts = [
  {
    name: 'Railpower HRFR 1.0 sq mm Flexible Single Core Wire',
    slug: 'railpower-hrfr-1-sqmm-wire',
    category: 'hrfr-wires',
    categoryName: 'HRFR Wires',
    brand: 'railpower',
    brandName: 'RAILPOWER',
    shortDescription: '100% Pure Electrolytic Grade Annealed Copper Conductor with HRFR PVC Compound.',
    description: 'Railpower HRFR (Heat Resistant Flame Retardant) wires are manufactured using 99.97% pure oxygen-free electrolytic grade copper.',
    price: '₹1,450 / 90m Coil',
    availableSizes: ['1.0 sq mm', '1.5 sq mm', '2.5 sq mm', '4.0 sq mm'],
    availableColors: ['Red', 'Yellow', 'Blue', 'Black', 'Green'],
    specifications: {
      'Conductor Material': '99.97% Pure Electrolytic Copper',
      'Insulation Material': 'HRFR PVC (Heat Resistant Flame Retardant)',
      'Voltage Grade': '1100 Volts (1.1 kV)'
    },
    features: ['Heat resistant insulation up to 105°C', 'High oxygen index (>30%)'],
    applications: ['Residential High-rise Apartments', 'Commercial Malls & Complex Lighting'],
    imageType: 'hrfrWires'
  },
  {
    name: 'Railwire FR 2.5 sq mm Home Electrical Wire',
    slug: 'railwire-fr-2-5-sqmm-wire',
    category: 'fr-wires',
    categoryName: 'FR Wires',
    brand: 'railwire',
    brandName: 'RAILWIRE',
    shortDescription: 'Flame Retardant PVC insulated building wire for power sockets & air conditioners.',
    description: 'Railwire FR series building wires are engineered for modern residential and light commercial power distribution.',
    price: '₹3,200 / 90m Coil',
    availableSizes: ['1.5 sq mm', '2.5 sq mm', '4.0 sq mm'],
    availableColors: ['Red', 'Yellow', 'Blue', 'Black'],
    specifications: {
      'Conductor Material': 'Bright Annealed Copper Strands',
      'Voltage Rating': '1100V'
    },
    features: ['Prevents spread of fire in wall conduits', 'High insulation resistance'],
    applications: ['Home Sockets & Switches', 'AC & Geyser Circuit Wiring'],
    imageType: 'frWires'
  },
  {
    name: 'Railpower 3-Core 4.0 sq mm Flat Submersible Cable',
    slug: 'railpower-3core-4sqmm-submersible-cable',
    category: 'submersible-cables',
    categoryName: 'Submersible Cable',
    brand: 'railpower',
    brandName: 'RAILPOWER',
    shortDescription: 'Heavy Duty Waterproof PVC Sheathed 3 Core Flat Cable for Borewell Pumps.',
    description: 'Specially designed to withstand continuous water submersion and mechanical abrasion in deep borewell irrigation pump motors.',
    price: '₹8,500 / 100m Roll',
    availableSizes: ['2.5 sq mm', '4.0 sq mm', '6.0 sq mm'],
    availableColors: ['Blue Sheath'],
    specifications: {
      'Core Count': '3 Core Flat',
      'Outer Sheath': 'Special Tough Waterproof PVC Compound'
    },
    features: ['Complete water & moisture imperviousness', 'Oil & grease resistant'],
    applications: ['Agricultural Borewells', 'Industrial Water Pumps'],
    imageType: 'submersible'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/railwire_management_db');
    console.log('Connected to MongoDB for seeding...');

    await User.deleteMany();
    await Product.deleteMany();

    // Default Admin User
    await User.create({
      name: 'System Administrator',
      email: 'admin@railpower.in',
      password: 'admin123',
      role: 'admin'
    });

    // Default Dealer User
    await User.create({
      name: 'Shree Ram Electricals',
      email: 'dealer@railwire.in',
      password: 'dealer123',
      role: 'dealer',
      dealerId: 'DL-88402',
      companyName: 'Shree Ram Electricals & Hardware',
      phone: '+91 98250 12345'
    });

    await Product.insertMany(initialProducts);

    console.log('Database Seeded Successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();
