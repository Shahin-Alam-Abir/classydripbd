'use client';

import Link from 'next/link';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import { List, Grid3X3, ChevronDown } from 'lucide-react';

export default function ShopPage() {
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  let filtered = selectedCategory === 'all'
    ? [...products]
    : products.filter(p => p.category === selectedCategory);

  switch (sortBy) {
    case 'price-asc': filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price)); break;
    case 'price-desc': filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price)); break;
    case 'name': filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: break;
  }

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Shop</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-bold uppercase tracking-wider text-sm mb-6">Categories</h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-4 py-3 text-sm transition ${selectedCategory === 'all' ? 'bg-black text-white font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-3 text-sm transition flex justify-between items-center ${selectedCategory === cat.id ? 'bg-black text-white font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs opacity-60">({cat.count})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap justify-between items-center mb-8 pb-6 border-b border-gray-200">
              <p className="text-sm text-gray-500">
                Showing <span className="font-semibold text-black">{filtered.length}</span> results
              </p>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex border border-gray-300">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'text-gray-500 hover:text-black'}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-black text-white' : 'text-gray-500 hover:text-black'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none border border-gray-300 px-4 py-2 pr-8 text-sm focus:outline-none focus:border-black bg-white"
                  >
                    <option value="default">Default Sorting</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Sort by Name</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filtered.length > 0 ? (
              <div className={viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
              }>
                {filtered.map((product) => (
                  viewMode === 'grid'
                    ? <ProductCard key={product.id} product={product} />
                    : (
                      <Link key={product.id} href={`/product/${product.id}`} className="flex gap-6 p-4 border border-gray-200 hover:border-black transition group">
                        <div className="w-32 h-40 bg-gray-100 flex-shrink-0 overflow-hidden">
                          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.category}</p>
                          <h3 className="font-semibold text-lg group-hover:text-gray-600 transition">{product.name}</h3>
                          <div className="flex items-center gap-2 mt-2">
                            {product.salePrice ? (
                              <>
                                <span className="text-red-600 font-bold text-lg">৳{product.salePrice.toLocaleString()}</span>
                                <span className="text-gray-400 line-through">৳{product.price.toLocaleString()}</span>
                              </>
                            ) : (
                              <span className="text-gray-900 font-bold text-lg">৳{product.price.toLocaleString()}</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                        </div>
                      </Link>
                    )
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
                <button onClick={() => setSelectedCategory('all')} className="mt-4 text-black font-semibold underline">
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
