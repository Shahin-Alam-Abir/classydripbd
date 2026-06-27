import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 aspect-[3/4] relative">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-black">Home</Link> / 
              <Link href={`/category/${product.category}`} className="hover:text-black uppercase ml-1">{product.category.replace('-', ' ')}</Link> / 
              <span className="text-black ml-1">{product.name}</span>
            </nav>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-medium text-gray-900 mb-6">{product.price}</p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <h3 className="font-semibold mb-3 uppercase tracking-wider text-sm">Size</h3>
              <div className="flex space-x-3">
                {['M', 'L', 'XL', 'XXL'].map(size => (
                  <button key={size} className="border border-gray-300 w-12 h-12 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              <input type="number" defaultValue="1" min="1" className="border border-gray-300 w-20 text-center focus:outline-none focus:border-black" />
              <button className="flex-1 bg-black text-white font-bold uppercase tracking-wider py-4 hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>

            <button className="w-full bg-white text-black border-2 border-black font-bold uppercase tracking-wider py-4 hover:bg-black hover:text-white transition">
              Buy It Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
