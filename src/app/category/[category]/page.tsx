'use client';

import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useParams, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const categoryNames: Record<string, string> = {
  shirt: 'Shirt',
  't-shirt': 'T-Shirt',
  panjabi: 'Panjabi',
  accessories: 'Accessories',
};

export default function CategoryPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const category = params.category as string;
  const subFilter = searchParams.get('sub');

  const filtered = products.filter(p => {
    const matchCat = p.category === category;
    const matchSub = subFilter ? p.subcategory === subFilter : true;
    return matchCat && matchSub;
  });

  const categoryName = categoryNames[category] || category;

  const subcategories = [...new Set(products.filter(p => p.category === category).map(p => p.subcategory))];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-black transition">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{categoryName}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-bold uppercase tracking-wider text-sm mb-6">Subcategories</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href={`/category/${category}`}
                    className={`block px-4 py-3 text-sm transition ${!subFilter ? 'bg-black text-white font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    All {categoryName}
                  </Link>
                </li>
                {subcategories.map(sub => (
                  <li key={sub}>
                    <Link
                      href={`/category/${category}?sub=${sub}`}
                      className={`block px-4 py-3 text-sm transition ${subFilter === sub ? 'bg-black text-white font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      {sub.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-widest uppercase mb-2">{categoryName}</h1>
              <p className="text-gray-500 text-sm">{filtered.length} products found</p>
              <div className="h-0.5 w-16 bg-black mt-4"></div>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
                <Link href="/shop" className="mt-4 inline-block text-black font-semibold underline">
                  View All Products
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
