'use client';

import Link from 'next/link';
import { Search, ShoppingCart, Menu, X, ChevronDown, User } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { subcategories } from '@/data/products';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setSearchOpen(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [searchOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      label: 'Shirt', dropdown: subcategories['shirt'],
      href: '/category/shirt'
    },
    {
      label: 'T-Shirt', dropdown: subcategories['t-shirt'],
      href: '/category/t-shirt'
    },
    {
      label: 'Panjabi', dropdown: subcategories['panjabi'],
      href: '/category/panjabi'
    },
    {
      label: 'Accessories', dropdown: subcategories['accessories'],
      href: '/category/accessories'
    },
    {
      label: 'Shoes', dropdown: subcategories['shoes'],
      href: '/category/shoes'
    },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-black text-white text-xs text-center py-2 px-4 tracking-wider hidden md:block">
        ৳১,৫০০+ অর্ডারে ফ্রি শিপিং | ক্যাশ অন ডেলিভারি
      </div>

      <nav className={`bg-white border-b border-gray-200 sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button onClick={() => setMobileOpen(true)} className="text-black hover:text-gray-600 focus:outline-none">
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1 md:flex-none">
              <Link href="/" className="flex items-center gap-3">
                <img src="/images/logo.jpg" alt="Classy Drip" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover" />
                <div className="flex flex-col items-start">
                  <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.15em] text-black leading-tight">CLASSY</span>
                  <span className="text-[10px] md:text-xs tracking-[0.25em] font-semibold text-black leading-tight">DRIP</span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu with Mega Dropdowns */}
            <div className="hidden md:flex items-center space-x-1" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-8 text-sm font-semibold uppercase tracking-wider hover:text-gray-500 transition flex items-center gap-1 ${openDropdown === link.label ? 'text-gray-500' : 'text-black'}`}
                  >
                    {link.label}
                    {link.dropdown && <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />}
                  </Link>
                  {link.dropdown && openDropdown === link.label && (
                    <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-xl min-w-[240px] animate-slide-down z-50">
                      <div className="py-2">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.id}
                            href={`/category/${link.label.toLowerCase() === 'accessories' ? 'accessories' : link.label.toLowerCase()}?sub=${sub.id}`}
                            className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 md:space-x-5">
              <button onClick={() => setSearchOpen(true)} className="text-black hover:text-gray-600 transition">
                <Search className="h-5 w-5" />
              </button>
              <Link href="/account" className="hidden md:block text-black hover:text-gray-600 transition">
                <User className="h-5 w-5" />
              </Link>
              <Link href="/cart" className="text-black hover:text-gray-600 relative transition">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-80 bg-white shadow-2xl animate-slide-down overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <img src="/images/logo.jpg" alt="Classy Drip" className="h-9 w-9 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold tracking-[0.15em] leading-tight">CLASSY</span>
                  <span className="text-[9px] tracking-[0.25em] font-semibold leading-tight">DRIP</span>
                </div>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-black">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="py-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenMobileSub(openMobileSub === link.label ? null : link.label)}
                        className="w-full flex justify-between items-center px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-50 transition"
                      >
                        {link.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${openMobileSub === link.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openMobileSub === link.label && (
                        <div className="bg-gray-50 py-2">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.id}
                              href={`/category/${link.label.toLowerCase() === 'accessories' ? 'accessories' : link.label.toLowerCase()}?sub=${sub.id}`}
                              onClick={() => setMobileOpen(false)}
                              className="block px-10 py-3 text-sm text-gray-600 hover:text-black transition"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gray-50 transition"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-100 mt-4 pt-4 px-6">
                <Link href="/account" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-3 text-sm text-gray-600 hover:text-black transition">
                  <User className="h-5 w-5" /> আমার অ্যাকাউন্ট
                </Link>
                <Link href="/contact-us" onClick={() => setMobileOpen(false)} className="block py-3 text-sm text-gray-600 hover:text-black transition">
                  যোগাযোগ
                </Link>
                <Link href="/about-us" onClick={() => setMobileOpen(false)} className="block py-3 text-sm text-gray-600 hover:text-black transition">
                  আমাদের সম্পর্কে
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[70] bg-white animate-fade-in">
          <div className="max-w-3xl mx-auto px-4 pt-24">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-bold tracking-wider">আপনি কী খুঁজছেন?</h2>
              <button onClick={() => setSearchOpen(false)} className="text-black hover:text-gray-600 transition">
                <X className="h-8 w-8" />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="প্রোডাক্ট সার্চ করুন..."
                className="w-full border-b-2 border-black pb-4 pl-14 pr-4 text-2xl focus:outline-none placeholder:text-gray-300"
                autoFocus
              />
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4 tracking-wider uppercase">ট্রেন্ডিং সার্চ</p>
              <div className="flex flex-wrap gap-3">
                {['শার্ট', 'পাঞ্জাবি', 'টি-শার্ট', 'প্রিমিয়াম', 'নতুন কালেকশন', 'ঈদ কালেকশন'].map((term) => (
                  <span key={term} className="px-4 py-2 bg-gray-100 text-sm text-gray-700 hover:bg-black hover:text-white transition cursor-pointer">
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
