'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <Link
      href={`/product/${product.id}`}
      className="group cursor-pointer"
      onMouseEnter={() => product.images.length > 1 && setImgIndex(1)}
      onMouseLeave={() => setImgIndex(0)}
    >
      <div className="relative overflow-hidden mb-4 bg-gray-100 aspect-[3/4]">
        <img
          src={product.images[imgIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out"
        />
        {product.isSale && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
            Sale
          </div>
        )}
        {product.isNew && !product.isSale && (
          <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
            New
          </div>
        )}
        {product.salePrice && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-full">
            -{Math.round((1 - product.salePrice / product.price) * 100)}%
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          <span className="font-semibold uppercase tracking-wider">Quick Add</span>
        </div>
      </div>
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.subcategory?.replace(/-/g, ' ') || product.category}</p>
      <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition truncate">{product.name}</h3>
      <div className="flex items-center gap-2 mt-1">
        {product.salePrice ? (
          <>
            <span className="text-red-600 font-bold">৳{product.salePrice.toLocaleString()}</span>
            <span className="text-gray-400 text-sm line-through">৳{product.price.toLocaleString()}</span>
          </>
        ) : (
          <span className="text-gray-900 font-bold">৳{product.price.toLocaleString()}</span>
        )}
      </div>
      {product.sizes && (
        <div className="flex gap-1 mt-3">
          {product.sizes.slice(0, 5).map(s => (
            <span key={s} className="text-[10px] border border-gray-300 px-2 py-0.5 text-gray-500">{s}</span>
          ))}
        </div>
      )}
    </Link>
  );
}
