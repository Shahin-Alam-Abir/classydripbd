import Link from 'next/link';
import { Search, User, ShoppingCart, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button className="text-black hover:text-gray-600 focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none">
            <Link href="/" className="flex flex-col items-center">
              <span className="font-serif text-3xl font-bold tracking-[0.2em] text-black">CLASSY</span>
              <span className="text-sm tracking-[0.3em] font-medium text-black">DRIP</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-semibold text-black hover:text-gray-500 uppercase tracking-wider">Home</Link>
            <Link href="/shop" className="text-sm font-semibold text-black hover:text-gray-500 uppercase tracking-wider">Shop</Link>
            <Link href="/category/shirt" className="text-sm font-semibold text-black hover:text-gray-500 uppercase tracking-wider">Shirt</Link>
            <Link href="/category/t-shirt" className="text-sm font-semibold text-black hover:text-gray-500 uppercase tracking-wider">T-Shirt</Link>
            <Link href="/category/panjabi" className="text-sm font-semibold text-black hover:text-gray-500 uppercase tracking-wider">Panjabi</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-black hover:text-gray-600">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/account" className="hidden md:block text-black hover:text-gray-600">
              <User className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="text-black hover:text-gray-600 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
