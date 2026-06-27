import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex flex-col items-start mb-6">
              <span className="font-serif text-3xl font-bold tracking-[0.2em]">CLASSY</span>
              <span className="text-sm tracking-[0.3em] font-medium text-gray-400">DRIP</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Defined by class, driven by style. The best men's clothing store in Bangladesh providing premium quality and exclusive designs.
            </p>
            <div className="text-sm text-gray-400">
              <p>Mirpur, Dhaka, Bangladesh</p>
              <p className="mt-2">info@classydrip.com</p>
              <p className="mt-2">+880 1234-567890</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-4">
              <li><Link href="/shop" className="text-gray-400 hover:text-white transition">All Products</Link></li>
              <li><Link href="/category/shirt" className="text-gray-400 hover:text-white transition">Shirts</Link></li>
              <li><Link href="/category/t-shirt" className="text-gray-400 hover:text-white transition">T-Shirts</Link></li>
              <li><Link href="/category/panjabi" className="text-gray-400 hover:text-white transition">Panjabis</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about-us" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact-us" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-white transition"
              />
              <button 
                type="submit" 
                className="bg-white text-black font-bold uppercase tracking-wider py-3 hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Classy Drip. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            {/* Payment icons could go here */}
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
