import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="py-20 bg-white min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold tracking-widest uppercase mb-6">Your Cart</h1>
      <p className="text-gray-500 mb-8">Your cart is currently empty.</p>
      <Link href="/shop" className="bg-black text-white font-bold uppercase tracking-wider px-8 py-4 hover:bg-gray-800 transition">
        Return to Shop
      </Link>
    </div>
  );
}
