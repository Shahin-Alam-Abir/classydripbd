import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="py-20 bg-white min-h-[60vh] flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-widest uppercase mb-6">Your Cart</h1>
        <div className="h-0.5 w-16 bg-black mx-auto mb-12"></div>
        <div className="max-w-md mx-auto">
          <div className="bg-gray-50 p-12 rounded-lg">
            <p className="text-gray-500 text-lg mb-8">Your cart is currently empty.</p>
            <Link href="/shop" className="inline-block bg-black text-white font-bold uppercase tracking-wider px-8 py-4 hover:bg-gray-800 transition">
              Return to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
