import Link from 'next/link';
import { products } from '@/data/products';

export default function Shop() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-widest uppercase mb-4">All Products</h1>
          <div className="h-1 w-20 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4 bg-gray-200 aspect-[3/4]">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition truncate">{product.name}</h3>
              <p className="text-gray-500 font-medium mt-1">{product.price}</p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
