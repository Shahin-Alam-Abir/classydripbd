export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: string;
  subcategory: string;
  description: string;
  features: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  sku: string;
  tags: string[];
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Ironless Micro-Spandex Shirt (Maroon)',
    price: 1200,
    salePrice: 899,
    images: [
      'https://placehold.co/600x800/800000/FFFFFF/png?text=Maroon+Shirt+Front',
      'https://placehold.co/600x800/800000/FFFFFF/png?text=Maroon+Shirt+Back',
      'https://placehold.co/600x800/800000/FFFFFF/png?text=Maroon+Shirt+Detail',
      'https://placehold.co/600x800/800000/FFFFFF/png?text=Maroon+Shirt+Model',
    ],
    category: 'shirt',
    subcategory: 'spandex-micro-shirt',
    description: 'Premium ironless micro-spandex shirt in maroon color. Features wrinkle-free fabric with 4-way stretch for maximum comfort. Perfect for both formal and casual occasions.',
    features: [
      'Ironless wrinkle-free fabric',
      '4-way micro-spandex stretch',
      'Breathable cotton blend',
      'Premium mother-of-pearl buttons',
      'Slim fit design'
    ],
    sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: [{ name: 'Maroon', hex: '#800000' }],
    sku: 'CMS-001',
    tags: ['shirt', 'formal', 'micro-spandex', 'ironless'],
    isNew: true,
    isSale: true
  },
  {
    id: '2',
    name: 'Winter Denim Shirt for Men | MS-41',
    price: 1500,
    salePrice: 1100,
    images: [
      'https://placehold.co/600x800/1a237e/FFFFFF/png?text=Denim+Shirt+Front',
      'https://placehold.co/600x800/1a237e/FFFFFF/png?text=Denim+Shirt+Back',
      'https://placehold.co/600x800/1a237e/FFFFFF/png?text=Denim+Shirt+Detail',
    ],
    category: 'shirt',
    subcategory: 'denim-shirt',
    description: 'High quality winter denim shirt with premium brushed cotton. Stay warm and stylish with this heavy-weight denim shirt featuring classic button-down collar.',
    features: [
      'Heavy-weight denim fabric',
      'Brushed cotton interior for warmth',
      'Button-down collar',
      'Two chest pockets',
      'Adjustable cuffs'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Navy Blue', hex: '#1a237e' }],
    sku: 'CMS-041',
    tags: ['shirt', 'denim', 'winter', 'casual'],
    isSale: true
  },
  {
    id: '3',
    name: 'Mughal Embroidery Panjabi | Crs Cream',
    price: 2500,
    salePrice: 1900,
    images: [
      'https://placehold.co/600x800/f5deb3/000000/png?text=Mughal+Panjabi+Front',
      'https://placehold.co/600x800/f5deb3/000000/png?text=Mughal+Panjabi+Back',
      'https://placehold.co/600x800/f5deb3/000000/png?text=Mughal+Panjabi+Detail',
      'https://placehold.co/600x800/f5deb3/000000/png?text=Mughal+Panjabi+Model',
    ],
    category: 'panjabi',
    subcategory: 'mughal-embroidary-panjabi',
    description: 'Elegant Mughal embroidery panjabi in cream color. Intricate thread work inspired by Mughal architecture. Perfect for Eid, weddings, and festive occasions.',
    features: [
      'Premium cotton fabric',
      'Intricate Mughal thread embroidery',
      'Mandarin collar',
      'Full front button placket',
      'Side pockets'
    ],
    sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: [{ name: 'Cream', hex: '#f5deb3' }],
    sku: 'CMP-003',
    tags: ['panjabi', 'mughal', 'embroidery', 'festival'],
    isSale: true
  },
  {
    id: '4',
    name: 'Ambush Cotton Panjabi | AMB Olive',
    price: 2200,
    salePrice: 1190,
    images: [
      'https://placehold.co/600x800/556b2f/FFFFFF/png?text=Ambush+Panjabi+Front',
      'https://placehold.co/600x800/556b2f/FFFFFF/png?text=Ambush+Panjabi+Back',
      'https://placehold.co/600x800/556b2f/FFFFFF/png?text=Ambush+Panjabi+Detail',
    ],
    category: 'panjabi',
    subcategory: 'ambush-cotton-panjabi',
    description: 'Comfortable Ambush cotton panjabi in olive green. Premium cotton fabric with modern fit. Features a unique ambush design pattern with zip closure.',
    features: [
      'Premium cotton fabric',
      'Ambush design pattern',
      'Zip fly closure',
      'Side pockets with piping',
      'Modern slim fit'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Olive Green', hex: '#556b2f' },
      { name: 'Black', hex: '#000000' }
    ],
    sku: 'CMP-004',
    tags: ['panjabi', 'ambush', 'cotton', 'modern'],
    isSale: true
  },
  {
    id: '5',
    name: 'Ironless Micro-Spandex Shirt (Sea Green)',
    price: 1200,
    salePrice: 899,
    images: [
      'https://placehold.co/600x800/2e8b57/FFFFFF/png?text=Sea+Green+Shirt+Front',
      'https://placehold.co/600x800/2e8b57/FFFFFF/png?text=Sea+Green+Shirt+Back',
    ],
    category: 'shirt',
    subcategory: 'spandex-micro-shirt',
    description: 'Premium ironless micro-spandex shirt in sea green color. Wrinkle-free fabric with stretch for all-day comfort.',
    features: [
      'Ironless wrinkle-free fabric',
      '4-way micro-spandex stretch',
      'Breathable cotton blend',
      'Premium buttons',
      'Slim fit design'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Sea Green', hex: '#2e8b57' }],
    sku: 'CMS-005',
    tags: ['shirt', 'micro-spandex', 'green'],
    isSale: true
  },
  {
    id: '6',
    name: 'Premium Solid Shirt for Men | MS-48',
    price: 1100,
    images: [
      'https://placehold.co/600x800/ffffff/000000/png?text=Solid+Shirt+Front',
      'https://placehold.co/600x800/ffffff/000000/png?text=Solid+Shirt+Back',
    ],
    category: 'shirt',
    subcategory: 'solid-shirt',
    description: 'Classic solid shirt for men. Perfect for formal and casual settings. Made from premium cotton with a comfortable regular fit.',
    features: [
      '100% premium cotton',
      'Regular fit',
      'Spread collar',
      'Adjustable cuffs',
      'Machine washable'
    ],
    sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: [{ name: 'White', hex: '#ffffff' }],
    sku: 'CMS-048',
    tags: ['shirt', 'solid', 'formal', 'white'],
    isNew: true
  },
  {
    id: '7',
    name: 'Acid Wash Drop Shoulder T-Shirt | MF-719',
    price: 1250,
    salePrice: 650,
    images: [
      'https://placehold.co/600x800/4a4a4a/FFFFFF/png?text=Acid+Wash+Front',
      'https://placehold.co/600x800/4a4a4a/FFFFFF/png?text=Acid+Wash+Back',
      'https://placehold.co/600x800/4a4a4a/FFFFFF/png?text=Acid+Wash+Detail',
    ],
    category: 't-shirt',
    subcategory: 'drop-shoulder-t-shirt',
    description: 'Trendy acid wash drop shoulder t-shirt with oversized fit. Unique acid wash pattern makes each piece one-of-a-kind.',
    features: [
      'Premium cotton fabric',
      'Acid wash finish',
      'Drop shoulder design',
      'Oversized fit',
      'Trendy streetwear style'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Grey', hex: '#4a4a4a' }],
    sku: 'CMT-719',
    tags: ['t-shirt', 'acid-wash', 'drop-shoulder', 'oversized'],
    isSale: true
  },
  {
    id: '8',
    name: 'Designer Edition T-Shirt | MF-100',
    price: 1250,
    salePrice: 650,
    images: [
      'https://placehold.co/600x800/000000/FFFFFF/png?text=Designer+TS+Front',
      'https://placehold.co/600x800/000000/FFFFFF/png?text=Designer+TS+Back',
      'https://placehold.co/600x800/000000/FFFFFF/png?text=Designer+TS+Detail',
    ],
    category: 't-shirt',
    subcategory: 'designer-edition-t-shirt',
    description: 'Designer edition t-shirt with premium fabric and unique print. Stand out with exclusive designs crafted for the modern fashion enthusiast.',
    features: [
      'Premium 180 GSM cotton',
      'Unique designer print',
      'Reinforced neckline',
      'Comfortable regular fit',
      'Fade-resistant print'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Black', hex: '#000000' }],
    sku: 'CMT-100',
    tags: ['t-shirt', 'designer', 'premium', 'print'],
    isSale: true
  },
  {
    id: '9',
    name: 'Designer Edition T-Shirt | MF-165',
    price: 1250,
    salePrice: 650,
    images: [
      'https://placehold.co/600x800/000000/FFFFFF/png?text=Designer+165+Front',
      'https://placehold.co/600x800/000000/FFFFFF/png?text=Designer+165+Back',
    ],
    category: 't-shirt',
    subcategory: 'designer-edition-t-shirt',
    description: 'Premium designer edition t-shirt with exclusive artwork. Made from high-quality cotton for maximum comfort.',
    features: [
      'Premium 180 GSM cotton',
      'Exclusive artwork print',
      'Reinforced seams',
      'Regular fit',
      'Machine washable'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Black', hex: '#000000' }],
    sku: 'CMT-165',
    tags: ['t-shirt', 'designer', 'premium'],
    isSale: true
  },
  {
    id: '10',
    name: 'Ambush Cotton Panjabi | AMB Black',
    price: 2000,
    salePrice: 1190,
    images: [
      'https://placehold.co/600x800/000000/FFFFFF/png?text=AMB+Black+Front',
      'https://placehold.co/600x800/000000/FFFFFF/png?text=AMB+Black+Back',
      'https://placehold.co/600x800/000000/FFFFFF/png?text=AMB+Black+Detail',
    ],
    category: 'panjabi',
    subcategory: 'ambush-cotton-panjabi',
    description: 'Premium Ambush Cotton Zipper Panjabi in Black. Modern design with premium cotton fabric and stylish details.',
    features: [
      'Premium cotton fabric',
      'Zip closure',
      'Side pockets',
      'Modern fit',
      'Comfortable wear'
    ],
    sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'],
    colors: [{ name: 'Black', hex: '#000000' }],
    sku: 'CMP-010',
    tags: ['panjabi', 'ambush', 'black'],
    isSale: true
  },
  {
    id: '11',
    name: 'Sher Shakkar Panjabi | SS Sea Blue',
    price: 2000,
    salePrice: 1190,
    images: [
      'https://placehold.co/600x800/006994/FFFFFF/png?text=Sher+Shakkar+Front',
      'https://placehold.co/600x800/006994/FFFFFF/png?text=Sher+Shakkar+Back',
    ],
    category: 'panjabi',
    subcategory: 'sher-shakkar-panjabi',
    description: 'Elegant Sher Shakkar panjabi in sea blue. Premium quality fabric with traditional design elements.',
    features: [
      'Premium fabric',
      'Traditional design',
      'Comfortable fit',
      'Festival ready'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Sea Blue', hex: '#006994' }],
    sku: 'CMP-011',
    tags: ['panjabi', 'sher-shakkar', 'blue'],
    isSale: true
  },
  {
    id: '12',
    name: 'Sher Shakkar Panjabi | SS Bottle Green',
    price: 2000,
    salePrice: 1190,
    images: [
      'https://placehold.co/600x800/006400/FFFFFF/png?text=Sher+Shakkar+Green',
      'https://placehold.co/600x800/006400/FFFFFF/png?text=Sher+Shakkar+Green+Back',
    ],
    category: 'panjabi',
    subcategory: 'sher-shakkar-panjabi',
    description: 'Premium Sher Shakkar panjabi in bottle green. Rich color perfect for special occasions.',
    features: [
      'Premium fabric',
      'Traditional design',
      'Rich bottle green color',
      'Comfortable fit'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Bottle Green', hex: '#006400' }],
    sku: 'CMP-012',
    tags: ['panjabi', 'sher-shakkar', 'green'],
    isSale: true
  },
  {
    id: '13',
    name: 'Ember Weave Panjabi | EM Rust',
    price: 2300,
    images: [
      'https://placehold.co/600x800/b7410e/FFFFFF/png?text=Ember+Weave+Front',
      'https://placehold.co/600x800/b7410e/FFFFFF/png?text=Ember+Weave+Back',
    ],
    category: 'panjabi',
    subcategory: 'ember-wev-panjabi',
    description: 'Ember weave panjabi in rust color. Unique woven pattern with premium fabric finish.',
    features: [
      'Unique ember weave pattern',
      'Premium fabric',
      'Modern design',
      'Comfort fit'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Rust', hex: '#b7410e' }],
    sku: 'CMP-013',
    tags: ['panjabi', 'ember', 'weave'],
    isNew: true
  },
  {
    id: '14',
    name: 'Polo T-Shirt | Classic Fit',
    price: 1100,
    salePrice: 850,
    images: [
      'https://placehold.co/600x800/000080/FFFFFF/png?text=Polo+Classic+Front',
      'https://placehold.co/600x800/000080/FFFFFF/png?text=Polo+Classic+Back',
    ],
    category: 't-shirt',
    subcategory: 'polo-t-shirt',
    description: 'Classic polo t-shirt with embroidered logo. Premium pique cotton with ribbed collar.',
    features: [
      'Premium pique cotton',
      'Embroidered logo',
      'Ribbed collar',
      'Two-button placket',
      'Regular fit'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Navy', hex: '#000080' }],
    sku: 'CMT-014',
    tags: ['t-shirt', 'polo', 'classic'],
    isSale: true
  },
  {
    id: '15',
    name: 'Premium Leather Belt | Classic Brown',
    price: 800,
    images: [
      'https://placehold.co/600x800/8B4513/FFFFFF/png?text=Leather+Belt+Front',
      'https://placehold.co/600x800/8B4513/FFFFFF/png?text=Leather+Belt+Detail',
    ],
    category: 'accessories',
    subcategory: 'belt',
    description: 'Premium genuine leather belt in classic brown. Features a brushed metal buckle with embossed logo.',
    features: [
      'Genuine leather',
      'Brushed metal buckle',
      'Embossed logo',
      'Available in 32-40 inches',
      'Gift box included'
    ],
    sizes: ['M', 'L', 'XL'],
    colors: [{ name: 'Brown', hex: '#8B4513' }],
    sku: 'CMA-001',
    tags: ['accessories', 'belt', 'leather'],
    isNew: true
  },
  {
    id: '16',
    name: 'Premium Leather Wallet | Brown',
    price: 650,
    images: [
      'https://placehold.co/600x800/8B4513/FFFFFF/png?text=Leather+Wallet+Front',
      'https://placehold.co/600x800/8B4513/FFFFFF/png?text=Leather+Wallet+Inside',
    ],
    category: 'accessories',
    subcategory: 'wallet',
    description: 'Premium genuine leather wallet with multiple card slots and coin pocket. RFID blocking technology.',
    features: [
      'Genuine leather',
      'RFID blocking',
      '8 card slots',
      'Coin pocket',
      'Note compartment'
    ],
    sizes: ['One Size'],
    colors: [{ name: 'Brown', hex: '#8B4513' }],
    sku: 'CMA-002',
    tags: ['accessories', 'wallet', 'leather'],
    isNew: true
  },
  {
    id: '17',
    name: 'Turkish Thread Panjabi | TT Navy',
    price: 2800,
    images: [
      'https://placehold.co/600x800/000080/FFFFFF/png?text=Turkish+Thread+Front',
      'https://placehold.co/600x800/000080/FFFFFF/png?text=Turkish+Thread+Back',
    ],
    category: 'panjabi',
    subcategory: 'turkish-thread-panjabi',
    description: 'Premium Turkish thread work panjabi in navy blue. Intricate thread detailing with premium fabric.',
    features: [
      'Turkish thread embroidery',
      'Premium fabric',
      'Mandarin collar',
      'Full button placket'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Navy', hex: '#000080' }],
    sku: 'CMP-017',
    tags: ['panjabi', 'turkish', 'thread'],
    isNew: true
  },
  {
    id: '18',
    name: 'Casual Print Shirt | Tropical Pattern',
    price: 1300,
    salePrice: 990,
    images: [
      'https://placehold.co/600x800/ff6347/FFFFFF/png?text=Casual+Print+Front',
      'https://placehold.co/600x800/ff6347/FFFFFF/png?text=Casual+Print+Back',
    ],
    category: 'shirt',
    subcategory: 'casual-print-shirt',
    description: 'Trendy casual print shirt with tropical pattern. Perfect for vacation and weekend wear.',
    features: [
      'Lightweight cotton',
      'Tropical print',
      'Camp collar',
      'Short sleeves',
      'Relaxed fit'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Tropical Red', hex: '#ff6347' }],
    sku: 'CMS-018',
    tags: ['shirt', 'casual', 'print', 'tropical'],
    isSale: true
  },
  {
    id: '19',
    name: 'Indian Cherry Panjabi | IC Red',
    price: 2600,
    images: [
      'https://placehold.co/600x800/dc143c/FFFFFF/png?text=Indian+Cherry+Front',
      'https://placehold.co/600x800/dc143c/FFFFFF/png?text=Indian+Cherry+Back',
    ],
    category: 'panjabi',
    subcategory: 'indian-cherry-panjabi',
    description: 'Indian Cherry panjabi in rich red. Premium fabric with traditional Indian-inspired design.',
    features: [
      'Premium cotton silk blend',
      'Indian cherry design',
      'Stand collar',
      'Festival ready'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Cherry Red', hex: '#dc143c' }],
    sku: 'CMP-019',
    tags: ['panjabi', 'indian', 'cherry'],
    isNew: true
  },
  {
    id: '20',
    name: 'Ottoman Heritage Embroidery Panjabi',
    price: 3200,
    images: [
      'https://placehold.co/600x800/800020/FFFFFF/png?text=Ottoman+Heritage+Front',
      'https://placehold.co/600x800/800020/FFFFFF/png?text=Ottoman+Heritage+Back',
    ],
    category: 'panjabi',
    subcategory: 'ottoman-heritage-embroydery-panjabi',
    description: 'Premium Ottoman heritage embroidery panjabi. Inspired by Ottoman empire patterns with intricate gold thread work.',
    features: [
      'Ottoman inspired embroidery',
      'Gold thread detailing',
      'Premium fabric',
      'Luxury finish'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [{ name: 'Burgundy', hex: '#800020' }],
    sku: 'CMP-020',
    tags: ['panjabi', 'ottoman', 'heritage', 'premium'],
    isNew: true
  }
];

export const categories = [
  { id: 'shirt', name: 'Shirt', nameBn: 'শার্ট', count: 5, image: 'https://placehold.co/600x800/E5E7EB/000000/png?text=Shirt' },
  { id: 't-shirt', name: 'T-Shirt', nameBn: 'টি-শার্ট', count: 4, image: 'https://placehold.co/600x800/E5E7EB/000000/png?text=T-Shirt' },
  { id: 'panjabi', name: 'Panjabi', nameBn: 'পাঞ্জাবি', count: 8, image: 'https://placehold.co/600x800/E5E7EB/000000/png?text=Panjabi' },
  { id: 'accessories', name: 'Accessories', nameBn: 'এক্সেসরিজ', count: 2, image: 'https://placehold.co/600x800/E5E7EB/000000/png?text=Accessories' },
];

export const subcategories: Record<string, { id: string; name: string }[]> = {
  'shirt': [
    { id: 'spandex-micro-shirt', name: 'Spandex Micro Shirt' },
    { id: 'casual-print-shirt', name: 'Casual Print Shirt' },
    { id: 'denim-shirt', name: 'Denim Shirt' },
    { id: 'solid-shirt', name: 'Solid Shirt' },
    { id: 'formal-solid-shirt', name: 'Formal Solid Shirt' },
  ],
  't-shirt': [
    { id: 'designer-edition-t-shirt', name: 'Designer Edition T-Shirt' },
    { id: 'polo-t-shirt', name: 'Polo T-Shirt' },
    { id: 'drop-shoulder-t-shirt', name: 'Drop Shoulder T-Shirt' },
  ],
  'panjabi': [
    { id: 'mughal-embroidary-panjabi', name: 'Mughal Embroidery Panjabi' },
    { id: 'ambush-cotton-panjabi', name: 'Ambush Cotton Panjabi' },
    { id: 'ember-wev-panjabi', name: 'Ember Weave Panjabi' },
    { id: 'turkish-thread-panjabi', name: 'Turkish Thread Panjabi' },
    { id: 'sher-shakkar-panjabi', name: 'Sher Shakkar Panjabi' },
    { id: 'indian-cherry-panjabi', name: 'Indian Cherry Panjabi' },
    { id: 'ottoman-heritage-embroydery-panjabi', name: 'Ottoman Heritage Embroidery Panjabi' },
  ],
  'accessories': [
    { id: 'belt', name: 'Belt' },
    { id: 'wallet', name: 'Wallet' },
  ],
};
