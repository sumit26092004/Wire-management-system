export const categoriesData = [
  { id: 'house-wires', name: 'House Wires', count: '12 Products', slug: 'house-wires', description: 'Single Core Unsheathed Industrial Wires for domestic & building wiring.' },
  { id: 'fr-wires', name: 'FR Wires', count: '8 Products', slug: 'fr-wires', description: 'Flame Retardant Electrical Wires with extra fire safety insulation.' },
  { id: 'hrfr-wires', name: 'HRFR Wires', count: '10 Products', slug: 'hrfr-wires', description: 'Heat Resistant Flame Retardant Cables engineered for extreme thermal endurance.' },
  { id: 'submersible-cables', name: 'Submersible Cable', count: '6 Products', slug: 'submersible-cables', description: '3-Core Flat & Round PVC Submersible Pump Cables for agricultural & industrial water pumps.' },
  { id: 'industrial-cables', name: 'Industrial Cable', count: '15 Products', slug: 'industrial-cables', description: 'LT & HT Armored Power Cables built for heavy duty manufacturing and power distribution.' },
  { id: 'multicore-cables', name: 'Multicore Cable', count: '9 Products', slug: 'multicore-cables', description: 'Flexible Multicore Sheathed Cables for machinery control panel & industrial applications.' },
  { id: 'accessories', name: 'Accessories', count: '14 Products', slug: 'accessories', description: 'Cable Trays, Cable Glands, Lugs, PVC Conduits and Junction Boxes.' }
];

export const brandsData = [
  { id: 'railpower', name: 'RAILPOWER', tagline: 'WIRES & CABLES', description: 'Heavy duty industrial & commercial power cable solutions.' },
  { id: 'railwire', name: 'RAILWIRE', tagline: 'WIRES & CABLES', description: 'High-safety flame retardant home & building wire solutions.' }
];

export const productsData = [
  {
    id: 'prod-1',
    name: 'Railpower HRFR 1.0 sq mm Flexible Single Core Wire',
    slug: 'railpower-hrfr-1-sqmm-wire',
    category: 'hrfr-wires',
    categoryName: 'HRFR Wires',
    brand: 'railpower',
    brandName: 'RAILPOWER',
    shortDescription: '100% Pure Electrolytic Grade Annealed Copper Conductor with HRFR PVC Compound.',
    description: 'Railpower HRFR (Heat Resistant Flame Retardant) wires are manufactured using 99.97% pure oxygen-free electrolytic grade copper. Designed with advanced HRFR compound that provides high thermal stability up to 105°C and low smoke emissions during electrical overloading.',
    price: '₹1,450 / 90m Coil',
    rating: 4.9,
    inStock: true,
    availableSizes: ['1.0 sq mm', '1.5 sq mm', '2.5 sq mm', '4.0 sq mm', '6.0 sq mm'],
    availableColors: ['Red', 'Yellow', 'Blue', 'Black', 'Green'],
    specifications: {
      'Conductor Material': '99.97% Pure Electrolytic Copper',
      'Insulation Material': 'HRFR PVC (Heat Resistant Flame Retardant)',
      'Voltage Grade': '1100 Volts (1.1 kV)',
      'Operating Temperature': '-15°C to +105°C',
      'Conductor Resistance': '18.10 Ω/km at 20°C',
      'Standard Length': '90 Meters / 180 Meters Box',
      'Certification': 'IS 694 : 2010 & FIA / TAC Approved'
    },
    features: [
      'Heat resistant insulation up to 105°C',
      'High oxygen index (>30%) for superior flame retardancy',
      'Anti-rodent and anti-termite chemical coating',
      '100% conductivity with pure copper strands',
      'Smooth outer surface for easy conduit pulling'
    ],
    applications: [
      'Residential High-rise Apartments',
      'Commercial Malls & Complex Lighting',
      'Industrial Control Panels',
      'Schools, Hospitals & Public Infrastructure'
    ],
    imageType: 'hrfrWires'
  },
  {
    id: 'prod-2',
    name: 'Railwire FR 2.5 sq mm Home Electrical Wire',
    slug: 'railwire-fr-2-5-sqmm-wire',
    category: 'fr-wires',
    categoryName: 'FR Wires',
    brand: 'railwire',
    brandName: 'RAILWIRE',
    shortDescription: 'Flame Retardant PVC insulated building wire for power sockets & air conditioners.',
    description: 'Railwire FR series building wires are engineered for modern residential and light commercial power distribution. Offers exceptional flame retardancy that prevents fire propagation along wire runs inside walls.',
    price: '₹3,200 / 90m Coil',
    rating: 4.8,
    inStock: true,
    availableSizes: ['1.5 sq mm', '2.5 sq mm', '4.0 sq mm', '6.0 sq mm', '10.0 sq mm'],
    availableColors: ['Red', 'Yellow', 'Blue', 'Black', 'Green'],
    specifications: {
      'Conductor Material': 'Bright Annealed Copper Strands',
      'Insulation Material': 'FR Grade PVC Compound',
      'Voltage Rating': '1100V',
      'Standard Length': '90 Meters Box Pack',
      'Certification': 'IS 694 Certified'
    },
    features: [
      'Prevents spread of fire in wall conduits',
      'High insulation resistance preventing current leakage',
      'Flexible stranded conductor for fast electrician installation',
      'Low power loss saving energy bills'
    ],
    applications: ['Home Sockets & Switches', 'AC & Geyser Circuit Wiring', 'Office Cabling'],
    imageType: 'frWires'
  },
  {
    id: 'prod-3',
    name: 'Railpower 3-Core 4.0 sq mm Flat Submersible Cable',
    slug: 'railpower-3core-4sqmm-submersible-cable',
    category: 'submersible-cables',
    categoryName: 'Submersible Cable',
    brand: 'railpower',
    brandName: 'RAILPOWER',
    shortDescription: 'Heavy Duty Waterproof PVC Sheathed 3 Core Flat Cable for Borewell Pumps.',
    description: 'Specially designed to withstand continuous water submersion, grease, and mechanical abrasion in deep borewell irrigation pump motors.',
    price: '₹8,500 / 100m Roll',
    rating: 5.0,
    inStock: true,
    availableSizes: ['1.5 sq mm', '2.5 sq mm', '4.0 sq mm', '6.0 sq mm', '10.0 sq mm', '16.0 sq mm'],
    availableColors: ['Blue Sheath (Red, Yellow, Blue Cores)'],
    specifications: {
      'Core Count': '3 Core Flat',
      'Outer Sheath': 'Special Tough Waterproof PVC Compound',
      'Core Insulation': 'High Insulation Grade PVC',
      'Submersion Depth': 'Up to 500 Meters',
      'Voltage Grade': '1100V'
    },
    features: [
      'Complete water & moisture imperviousness',
      'Resistant to oil, grease and underground soil chemicals',
      'High mechanical tensile strength to prevent cable stretching',
      'Ideal for heavy agricultural submersible motors'
    ],
    applications: ['Agricultural Borewells', 'Industrial Water Lifting Pumps', 'Sewage Plants'],
    imageType: 'submersible'
  },
  {
    id: 'prod-4',
    name: 'Railpower 4 Core 16 sq mm Armored Industrial Cable',
    slug: 'railpower-4core-16sqmm-armored-cable',
    category: 'industrial-cables',
    categoryName: 'Industrial Cable',
    brand: 'railpower',
    brandName: 'RAILPOWER',
    shortDescription: 'Galvanized Steel Strip Armored XLPE Insulated 1.1kV Power Cable.',
    description: 'Heavy duty 4-Core XLPE Armored Power Cable designed for direct underground burial and high load industrial motor feeder lines.',
    price: '₹22,400 / 50m Drum',
    rating: 4.9,
    inStock: true,
    availableSizes: ['6 sq mm', '10 sq mm', '16 sq mm', '25 sq mm', '35 sq mm', '50 sq mm', '95 sq mm'],
    availableColors: ['Black Outer Sheath'],
    specifications: {
      'Armor Type': 'Galvanized Steel Strip / Wire Armored',
      'Insulation': 'XLPE (Cross-linked Polyethylene)',
      'Sheath': 'Heavy Duty ST2 PVC',
      'Standard': 'IS 7098 (Part 1)'
    },
    features: [
      'High current carrying capacity with XLPE insulation',
      'Protection against mechanical crush and rodent bites',
      'Suitable for indoor, outdoor, and direct earth installation',
      'Flame retardant ST2 outer sheath'
    ],
    applications: ['Factory Transformer Feeders', 'Industrial Plant Motors', 'Power Grids'],
    imageType: 'industrial'
  },
  {
    id: 'prod-5',
    name: 'Railwire Multicore Flexible Control Cable 7 Core x 1.5 sq mm',
    slug: 'railwire-7core-1-5sqmm-multicore-cable',
    category: 'multicore-cables',
    categoryName: 'Multicore Cable',
    brand: 'railwire',
    brandName: 'RAILWIRE',
    shortDescription: 'Flexible PVC Sheathed Multicore Control Cable for automation machinery.',
    description: 'Railwire Multicore Flexible cables are ideal for connecting machine tools, control panels, conveyers, and robotic assembly lines where high flexibility and numbered core identification are required.',
    price: '₹6,800 / 100m Coil',
    rating: 4.7,
    inStock: true,
    availableSizes: ['2 Core', '3 Core', '4 Core', '6 Core', '7 Core', '12 Core', '19 Core'],
    availableColors: ['Grey / Black Sheath'],
    specifications: {
      'Core Identification': 'Color Coded / Number Printed Cores',
      'Conductor': 'Class 5 Fine Copper Strands',
      'Sheath': 'Flexible Oil Resistant PVC'
    },
    features: [
      'Ultra-flexible Class 5 copper conductor',
      'Oil, moisture & chemical resistant sheath',
      'Numbered core coding for quick termination',
      'High resistance to vibration fatigue'
    ],
    applications: ['CNC Machinery', 'Elevators & Escalators', 'Automated Assembly Lines'],
    imageType: 'multicore'
  },
  {
    id: 'prod-6',
    name: 'Railpower Heavy Duty Perforated Galvanized Cable Tray',
    slug: 'railpower-perforated-cable-tray',
    category: 'accessories',
    categoryName: 'Accessories',
    brand: 'railpower',
    brandName: 'RAILPOWER',
    shortDescription: 'Hot-Dip Galvanized Perforated Steel Cable Tray for industrial routing.',
    description: 'Precision engineered perforated cable trays providing structural support and neat cable routing in factories, data centers, and power substations.',
    price: '₹850 / Meter',
    rating: 4.9,
    inStock: true,
    availableSizes: ['100mm x 50mm', '150mm x 50mm', '300mm x 50mm', '600mm x 75mm'],
    availableColors: ['Silver Galvanized'],
    specifications: {
      'Material': 'GI Sheet Steel (1.6mm - 2.5mm thickness)',
      'Coating': 'Hot Dip Galvanized / Powder Coated',
      'Standard Length': '2.5 Meters per section'
    },
    features: [
      'Corrosion resistant zinc coating for 25+ year lifespan',
      'Optimal ventilation preventing cable overheating',
      'Smooth edges protecting cable insulation from cuts'
    ],
    applications: ['Substation Cable Channels', 'Data Centers', 'Factory Roofing Layouts'],
    imageType: 'accessories'
  },
  {
    id: 'prod-7',
    name: 'Railpower House Wire 1.5 sq mm Single Core',
    slug: 'railpower-house-wire-1-5sqmm',
    category: 'house-wires',
    categoryName: 'House Wires',
    brand: 'railpower',
    brandName: 'RAILPOWER',
    shortDescription: 'Standard PVC Insulated Copper Wire for domestic lighting circuits.',
    description: 'High reliability household wiring solution manufactured with 99.97% pure copper to reduce power loss and heat generation.',
    price: '₹1,950 / 90m Coil',
    rating: 4.8,
    inStock: true,
    availableSizes: ['1.0 sq mm', '1.5 sq mm', '2.5 sq mm', '4.0 sq mm'],
    availableColors: ['Red', 'Yellow', 'Blue', 'Black', 'Green'],
    specifications: {
      'Voltage Grade': '1100V',
      'Conductor': 'Bare Electrolytic Copper',
      'Insulation': 'PVC Compound'
    },
    features: ['High conductivity', 'Friction-free surface', 'Standard IS 694 compliance'],
    applications: ['Home Light Circuits', 'Fan & Plug Wiring'],
    imageType: 'houseWires'
  }
];

export const applicationsData = [
  { id: 'residential', title: 'Residential & Housing', icon: 'Home', description: 'Safe, fire-resistant house wires for apartments, villas, and residential complexes.', imageBg: 'from-amber-500/20 to-orange-600/30' },
  { id: 'commercial', title: 'Commercial Malls & Towers', icon: 'Building2', description: 'Low smoke halogen-free cabling ensuring human safety in high density public spaces.', imageBg: 'from-blue-500/20 to-indigo-600/30' },
  { id: 'industrial', title: 'Manufacturing & Plants', icon: 'Factory', description: 'Heavy duty armored HT/LT cables engineered for harsh industrial power feeds.', imageBg: 'from-slate-700/30 to-navy/40' },
  { id: 'infrastructure', title: 'Metros & Railways', icon: 'TrainTrack', description: 'Certified specialized power and signal cabling for railway electrification.', imageBg: 'from-emerald-500/20 to-teal-700/30' },
  { id: 'agriculture', title: 'Agriculture & Pump Sets', icon: 'Sprout', description: 'Tough waterproof 3-Core submersible flat cables for deep tube-well pumps.', imageBg: 'from-green-600/20 to-emerald-800/30' },
  { id: 'renewable', title: 'Solar & Clean Energy', icon: 'Sun', description: 'UV and weather-resistant DC solar cables for rooftop & utility-scale solar farms.', imageBg: 'from-yellow-500/20 to-orange-500/30' }
];

export const resourcesData = [
  { id: 'res-1', title: 'Railpower & Railwire Master Product Catalogue 2026', category: 'Product Catalogue', size: '14.2 MB', fileFormat: 'PDF', downloadUrl: '#' },
  { id: 'res-2', title: 'HRFR Wires Technical Specification Datasheet', category: 'Datasheets', size: '2.8 MB', fileFormat: 'PDF', downloadUrl: '#' },
  { id: 'res-3', title: 'Armored Industrial Power Cable Installation Guide', category: 'Installation Guides', size: '4.5 MB', fileFormat: 'PDF', downloadUrl: '#' },
  { id: 'res-4', title: 'IS 694 & IS 7098 Bureau of Indian Standards (BIS) Certificate', category: 'Certifications', size: '1.9 MB', fileFormat: 'PDF', downloadUrl: '#' },
  { id: 'res-5', title: 'ISO 9001:2015 Quality Management System Certification', category: 'Certifications', size: '1.2 MB', fileFormat: 'PDF', downloadUrl: '#' },
  { id: 'res-6', title: '3-Core Flat Submersible Cable Pump Selection Guide', category: 'Brochures', size: '3.1 MB', fileFormat: 'PDF', downloadUrl: '#' }
];

export const timelineMilestones = [
  { year: '2015', title: 'Company Established', description: 'Founded Railpower & Railwire in Gujarat with a vision for high-safety electrical conductor manufacturing.' },
  { year: '2017', title: 'BIS & ISO Certification', description: 'Achieved full IS 694 and ISO 9001:2015 certifications for house wires and submersible cables.' },
  { year: '2019', title: 'New HRFR Technology Plant', description: 'Commissioned automated copper continuous casting and zero-halogen compounding lines.' },
  { year: '2021', title: 'Nationwide Dealer Expansion', description: 'Crossed 1,500+ authorized dealers and distributors across 22 Indian states.' },
  { year: '2023', title: 'Industrial Armored Line', description: 'Launched 1.1kV XLPE Armored Power Cables and flexible multicore control series.' },
  { year: '2026', title: 'Next-Gen Smart Manufacturing', description: 'Expanded capacity to 50,000 km/month with automated laser quality testing.' }
];

export const mockDealerApplications = [
  { id: 'DA-1001', name: 'Rajesh Sharma', companyName: 'Shree Ram Electricals', email: 'shreeram.elec@gmail.com', phone: '+91 98250 12345', city: 'Ahmedabad', state: 'Gujarat', businessType: 'Wholesaler / Distributor', yearsInBusiness: '12 Years', status: 'Pending', date: '2026-09-28' },
  { id: 'DA-1002', name: 'Vikram Singh', companyName: 'Apex Power Solutions', email: 'vikram@apexpower.in', phone: '+91 98110 54321', city: 'Jaipur', state: 'Rajasthan', businessType: 'EPC Contractor', yearsInBusiness: '8 Years', status: 'Approved', date: '2026-09-25' },
  { id: 'DA-1003', name: 'Amit Patel', companyName: 'Gujarat Hardware & Cables', email: 'amit@gujarathardware.com', phone: '+91 94260 88990', city: 'Surat', state: 'Gujarat', businessType: 'Retailer', yearsInBusiness: '5 Years', status: 'Under Review', date: '2026-09-20' }
];

export const mockContactEnquiries = [
  { id: 'CE-501', name: 'Suresh Kumar', email: 'suresh@buildertech.com', phone: '+91 98980 11223', subject: 'Bulk HRFR Wire Requirement for Residential Project', message: 'We require 500 coils of 1.5 sq mm and 2.5 sq mm HRFR wire for our township project in Vadodara. Kindly send quote.', status: 'New', date: '2026-09-29' },
  { id: 'CE-502', name: 'Ananya Roy', email: 'ananya@substationeng.in', phone: '+91 97330 44556', subject: 'Catalogue and Pricing for 4-Core Armored Cables', message: 'Looking for 16 sq mm armored cables with test certificates.', status: 'Replied', date: '2026-09-27' }
];
