export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  features: string[];
  image: string;
  badge?: string;
  category: string;
  description: string;
  specs: { label: string; value: string }[];
  inTheBox: string[];
}

export const products: Product[] = [
  {
    id: 'lumivex-apex',
    name: 'Lumivex Apex',
    tagline: 'The flagship. No compromises.',
    price: 499,
    category: 'health',
    badge: 'Best Seller',
    image: '/generated/lumivex-apex.webp',
    description: 'The Lumivex Apex is the most advanced health smartwatch ever built. A Grade 5 titanium case houses eight clinical-grade sensors, a dual-band GPS, and the HealthCore AI engine — all powered by a 21-day battery. FDA-cleared ECG, cuffless blood pressure, and continuous SpO2 monitoring make it the only watch trusted by cardiologists and athletes alike.',
    features: [
      '21-day battery life (mixed use)',
      'Grade 5 titanium case + sapphire crystal',
      'FDA-cleared ECG & AFib detection',
      'Cuffless blood pressure monitoring',
      'SpO2, skin temperature, bioimpedance',
      'Dual-band GPS L1+L5 with satellite SOS',
      'HealthCore AI v3.0 coaching (1 year free)',
      '5ATM water resistance (50m)',
    ],
    specs: [
      { label: 'Case Material', value: 'Grade 5 Titanium' },
      { label: 'Display', value: '1.9" AMOLED, always-on' },
      { label: 'Battery', value: '21 days mixed use' },
      { label: 'Sensors', value: '8 (ECG, PPG, SpO2, BP, Temp, BIA, Baro, IMU)' },
      { label: 'GPS', value: 'Dual-band L1+L5' },
      { label: 'Water Resistance', value: '5ATM (50m)' },
      { label: 'Weight', value: '52g (case only)' },
      { label: 'Warranty', value: '2 years' },
    ],
    inTheBox: ['Lumivex Apex Watch', 'Magnetic Charging Cable', 'Sizing Tool (Band)', 'Quick Start Guide', 'Warranty Card'],
  },
  {
    id: 'lumivex-apex-sport',
    name: 'Lumivex Apex Sport',
    tagline: 'Built for athletes who refuse limits.',
    price: 549,
    category: 'fitness',
    badge: 'Adventure',
    image: '/generated/lumivex-apex-sport.webp',
    description: 'Every sensor of the Apex, enhanced for extremes. The Apex Sport adds a ceramic bezel, MIL-STD-810H certification, 40+ multisport GPS profiles, satellite SOS, and advanced performance metrics including running power, VO2 max, and lactate threshold. Built for ultra-marathoners, mountaineers, and anyone who treats limits as suggestions.',
    features: [
      '18-day battery (22 days power save)',
      'Titanium case + ceramic bezel + sapphire',
      'All Apex health sensors included',
      'Multi-sport GPS with 40+ sport profiles',
      'Topographic maps + offline navigation',
      'Running power meter + VO2 max + lactate threshold',
      '5ATM + MIL-STD-810H rated',
      'Satellite SOS (Iridium network)',
    ],
    specs: [
      { label: 'Case Material', value: 'Titanium + Ceramic Bezel' },
      { label: 'Display', value: '1.9" AMOLED, always-on' },
      { label: 'Battery', value: '18 days (22 days power save)' },
      { label: 'Sensors', value: '8 + barometric altimeter (enhanced)' },
      { label: 'GPS', value: 'Dual-band L1+L5 + Satellite SOS' },
      { label: 'Water Resistance', value: '5ATM + MIL-STD-810H' },
      { label: 'Weight', value: '54g (case only)' },
      { label: 'Warranty', value: '2 years' },
    ],
    inTheBox: ['Lumivex Apex Sport Watch', 'Magnetic Charging Cable', 'Sport Band (Fluoro-elastomer)', 'Quick Start Guide', 'Warranty Card'],
  },
  {
    id: 'lumivex-pulse',
    name: 'Lumivex Pulse',
    tagline: 'All the health. Half the price.',
    price: 299,
    category: 'health',
    badge: 'Most Popular',
    image: '/generated/lumivex-pulse.webp',
    description: 'Everything that matters, nothing you do not need. The Pulse delivers FDA-cleared ECG, SpO2, continuous heart rate, and sleep apnea risk scoring in a lightweight aluminum case with 14-day battery life. It is the smart choice for people who want clinical health tracking without the flagship price tag.',
    features: [
      '14-day battery life',
      'Aluminum alloy case + tempered glass',
      'ECG & AFib detection (FDA-cleared)',
      'SpO2 & continuous heart rate',
      'Sleep apnea risk scoring',
      'Single-band GPS',
      'HealthCore AI coaching (6 months free)',
      '5ATM water resistance',
    ],
    specs: [
      { label: 'Case Material', value: 'Aluminum Alloy' },
      { label: 'Display', value: '1.6" AMOLED' },
      { label: 'Battery', value: '14 days mixed use' },
      { label: 'Sensors', value: '6 (ECG, PPG, SpO2, Temp, Baro, IMU)' },
      { label: 'GPS', value: 'Single-band' },
      { label: 'Water Resistance', value: '5ATM (50m)' },
      { label: 'Weight', value: '38g (case only)' },
      { label: 'Warranty', value: '2 years' },
    ],
    inTheBox: ['Lumivex Pulse Watch', 'Magnetic Charging Cable', 'Quick Start Guide', 'Warranty Card'],
  },
  {
    id: 'lumivex-core',
    name: 'Lumivex Core',
    tagline: 'Smart health starts here.',
    price: 179,
    category: 'budget',
    badge: 'Best Value',
    image: '/generated/lumivex-core.webp',
    description: 'The most accessible entry point to clinical health tracking. Core delivers continuous heart rate, SpO2, sleep tracking with smart alarm, and stress monitoring in a colorful polymer case with 10-day battery. IP68 waterproof and compatible with iOS and Android. Proof that health intelligence does not need to cost a fortune.',
    features: [
      '10-day battery life',
      'Reinforced polymer case + mineral glass',
      'Continuous heart rate + SpO2',
      'Sleep tracking with smart alarm',
      'Step, calorie & stress tracking',
      'Smartphone GPS',
      'IP68 water resistance',
      'Works with iOS & Android',
    ],
    specs: [
      { label: 'Case Material', value: 'Reinforced Polymer' },
      { label: 'Display', value: '1.5" LCD' },
      { label: 'Battery', value: '10 days' },
      { label: 'Sensors', value: '4 (PPG, SpO2, IMU, Temp)' },
      { label: 'GPS', value: 'Smartphone GPS' },
      { label: 'Water Resistance', value: 'IP68' },
      { label: 'Weight', value: '32g (case only)' },
      { label: 'Warranty', value: '1 year' },
    ],
    inTheBox: ['Lumivex Core Watch', 'USB Charging Cable', 'Quick Start Guide', 'Warranty Card'],
  },
  {
    id: 'lumivex-pulse-kids',
    name: 'Lumivex Pulse Kids',
    tagline: 'Health habits that start young.',
    price: 149,
    category: 'family',
    image: '/generated/lumivex-pulse-kids.webp',
    description: 'Designed for young explorers aged 6–14. Pulse Kids tracks activity, sleep quality, and heart rate in a fun, durable package with 20 color options. Parents get a companion dashboard app with screen time controls, SOS emergency GPS location sharing, and activity goals — helping kids build healthy habits safely.',
    features: [
      '7-day battery life',
      'Durable polymer case, 20 color options',
      'Heart rate & activity tracking',
      'Sleep duration & quality monitoring',
      'SOS emergency button with GPS location',
      'Screen time & app usage controls',
      'IP68 waterproof — pool safe',
      'Parental dashboard app included',
    ],
    specs: [
      { label: 'Case Material', value: 'Reinforced Polymer' },
      { label: 'Display', value: '1.3" LCD' },
      { label: 'Battery', value: '7 days' },
      { label: 'Sensors', value: '2 (PPG, IMU)' },
      { label: 'GPS', value: 'Phone GPS + SOS Location' },
      { label: 'Water Resistance', value: 'IP68' },
      { label: 'Weight', value: '26g (case only)' },
      { label: 'Warranty', value: '1 year' },
    ],
    inTheBox: ['Lumivex Pulse Kids Watch', 'USB Charging Cable', 'Sticker Pack', 'Quick Start Guide (Kid-Friendly)', 'Warranty Card'],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductSlugs(): string[] {
  return products.map((p) => p.id);
}
