'use client';

import { products } from '@/data/products';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { ShoppingCart, Truck, ShieldCheck, RotateCcw, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';

export default function ProductPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id);

  if (!product) notFound();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [imgIndex, setImgIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'info' | 'reviews'>('description');

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  const discount = product.salePrice ? Math.round((1 - product.salePrice / product.price) * 100) : 0;

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href={`/category/${product.category}`} className="hover:text-black transition uppercase">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </nav>

        {/* Product Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="relative bg-gray-100 aspect-[3/4] mb-4 overflow-hidden group">
              <img
                src={product.images[imgIndex]}
                alt={product.name}
                className="w-full h-full object-cover transition duration-500"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setImgIndex(i => (i - 1 + product.images.length) % product.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 hover:bg-white transition opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setImgIndex(i => (i + 1) % product.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 hover:bg-white transition opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
              {product.isSale && (
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider">
                  -{discount}%
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`w-20 h-24 bg-gray-100 border-2 overflow-hidden transition ${imgIndex === i ? 'border-black' : 'border-transparent hover:border-gray-300'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{product.subcategory?.replace(/-/g, ' ') || product.category}</p>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-baseline gap-3 mb-6">
              {product.salePrice ? (
                <>
                  <span className="text-3xl font-bold text-red-600">৳{product.salePrice.toLocaleString()}</span>
                  <span className="text-xl text-gray-400 line-through">৳{product.price.toLocaleString()}</span>
                  <span className="text-sm bg-red-100 text-red-600 px-2 py-1 font-semibold">Save {discount}%</span>
                </>
              ) : (
                <span className="text-3xl font-bold">৳{product.price.toLocaleString()}</span>
              )}
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider mb-2">Delivery Info</p>
              <div className="flex gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-1.5"><Truck className="h-4 w-4" /> Inside Dhaka – 24 Hours</span>
                <span className="flex items-center gap-1.5"><Truck className="h-4 w-4" /> Outside Dhaka – 48 Hours</span>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

            {/* Colors */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">
                  Color: <span className="font-normal normal-case text-gray-500">{selectedColor || product.colors[0].name}</span>
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.hex}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition ${selectedColor === color.name || (!selectedColor && product.colors[0].name === color.name) ? 'border-black scale-110' : 'border-gray-300 hover:border-gray-500'}`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            <div className="mb-8">
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">
                Size: <span className="font-normal normal-case text-gray-500">{selectedSize || 'Select'}</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center text-sm font-medium border transition ${selectedSize === size ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-4">
              <div className="flex border border-gray-300">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 hover:bg-gray-100 transition"><Minus className="h-4 w-4" /></button>
                <span className="px-6 py-3 text-center font-medium border-x border-gray-300 min-w-[60px] flex items-center justify-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3 hover:bg-gray-100 transition"><Plus className="h-4 w-4" /></button>
              </div>
              <button className="flex-1 bg-black text-white font-bold uppercase tracking-wider py-3 hover:bg-gray-800 transition flex items-center justify-center gap-2">
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </button>
            </div>
            <button className="w-full bg-white text-black border-2 border-black font-bold uppercase tracking-wider py-3 hover:bg-black hover:text-white transition">
              Buy It Now
            </button>

            {/* Trust Badges */}
            <div className="mt-10 p-6 bg-gray-50 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-sm">
                <ShieldCheck className="h-8 w-8 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Cash on Delivery</p>
                  <p className="text-gray-500 text-xs">দেশব্যাপী ক্যাশ অন হোম ডেলিভারী</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-8 w-8 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Fastest Delivery</p>
                  <p className="text-gray-500 text-xs">২৪ থেকে ৪৮ ঘন্টা</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="h-8 w-8 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">7-Day Exchange</p>
                  <p className="text-gray-500 text-xs">যেকোনো প্রয়োজনে ৭ দিনের ইজি এক্সচেঞ্জ</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-3">SKU: {product.sku}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <div className="flex gap-0">
              {(['description', 'info', 'reviews'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 text-sm font-semibold uppercase tracking-wider transition border-b-2 ${activeTab === tab ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
                >
                  {tab === 'description' ? 'Description' : tab === 'info' ? 'Additional Info' : 'Reviews'}
                </button>
              ))}
            </div>
          </div>
          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Features</h4>
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-black rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'info' && (
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Size Chart</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-6 py-3 text-left">Size</th>
                        <th className="border border-gray-300 px-6 py-3 text-left">Chest (inches)</th>
                        <th className="border border-gray-300 px-6 py-3 text-left">Length (inches)</th>
                        <th className="border border-gray-300 px-6 py-3 text-left">Shoulder (inches)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { size: 'S', chest: '38', length: '27', shoulder: '17' },
                        { size: 'M', chest: '40', length: '28', shoulder: '18' },
                        { size: 'L', chest: '42', length: '29', shoulder: '19' },
                        { size: 'XL', chest: '44', length: '30', shoulder: '20' },
                        { size: 'XXL', chest: '46', length: '31', shoulder: '21' },
                        { size: 'XXXL', chest: '48', length: '32', shoulder: '22' },
                      ].map(row => (
                        <tr key={row.size} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-6 py-3 font-semibold">{row.size}</td>
                          <td className="border border-gray-300 px-6 py-3">{row.chest}</td>
                          <td className="border border-gray-300 px-6 py-3">{row.length}</td>
                          <td className="border border-gray-300 px-6 py-3">{row.shoulder}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">There are no reviews yet.</p>
                <button className="border-2 border-black text-black font-bold uppercase tracking-wider px-8 py-3 hover:bg-black hover:text-white transition">
                  Write a Review
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold text-center mb-10 tracking-widest uppercase">You May Like These</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
