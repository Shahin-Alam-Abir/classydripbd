'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { useEffect, useRef } from 'react';

const FEATURED_PRODUCTS = products.filter(p => p.isNew || p.isSale).slice(0, 4);
const BEST_SELLING = products.filter(p => p.isSale).slice(0, 6);
const NEW_PRODUCTS = products.filter(p => p.isNew).slice(0, 6);

function ScrollReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`scroll-reveal ${className}`}>{children}</div>;
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-60" />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url(https://placehold.co/1920x1080/000000/FFFFFF/png?text=Abstract)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <span className="text-sm tracking-[0.3em] text-gray-400 mb-6 uppercase">Premium Men's Clothing</span>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 tracking-wider animate-fade-in-up">
            DEFINED BY CLASS. <br /> DRIVEN BY STYLE.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Upgrade your wardrobe with our premium collection of Shirts, T-Shirts, and Panjabis.
            Exclusive designs for the modern man in Bangladesh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/shop" className="bg-white text-black font-bold uppercase tracking-widest px-10 py-4 hover:bg-gray-200 transition inline-flex items-center gap-2 group">
              Shop Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/category/panjabi" className="border-2 border-white text-white font-bold uppercase tracking-widest px-10 py-4 hover:bg-white hover:text-black transition">
              Panjabi Collection
            </Link>
          </div>
          <div className="flex gap-8 mt-16 text-sm text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <span>✓ Free Shipping</span>
            <span>✓ Cash on Delivery</span>
            <span>✓ 14-Day Returns</span>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Categories Section */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-2 block">Collections</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase mb-2">Shop by Category</h2>
              <div className="h-0.5 w-16 bg-black mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {categories.map((cat, i) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className="group relative block overflow-hidden bg-gray-100 aspect-[3/4]"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 z-20">
                    <span className="text-white text-xl font-bold uppercase tracking-widest mb-1">{cat.nameBn}</span>
                    <span className="text-white/80 text-sm">{cat.name}</span>
                    <span className="text-white/60 text-xs mt-2">{cat.count} Products</span>
                    <span className="bg-white text-black font-bold uppercase tracking-widest px-6 py-3 mt-4 shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Shop Now
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Best Selling Products */}
      <ScrollReveal>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-2 block">Best Selling</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase">বেস্ট সেলিং প্রোডাক্ট</h2>
                <div className="h-0.5 w-16 bg-black mt-4"></div>
              </div>
              <Link href="/shop" className="hidden md:flex items-center gap-1 text-sm font-semibold hover:underline">
                View All <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {BEST_SELLING.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-10 md:hidden">
              <Link href="/shop" className="inline-block border-2 border-black text-black font-bold uppercase tracking-wider px-10 py-3 hover:bg-black hover:text-white transition">
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* New Products Section */}
      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-2 block">New Arrivals</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase">আমাদের নতুন প্রোডাক্ট</h2>
              <p className="text-gray-500 mt-4">The latest additions to our collection</p>
              <div className="h-0.5 w-16 bg-black mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {NEW_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Winter Collection Banner */}
      <ScrollReveal>
        <section className="relative bg-black text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4 block">Seasonal</span>
            <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4">Winter Collection 2025/26</h2>
            <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6 opacity-50">Winter Collection 2025/26</h2>
            <p className="text-gray-400 text-lg mb-10">পোশাকের জন্য সর্বাধিক শুভেচ্ছা</p>
            <Link href="/category/shirt" className="inline-block border-2 border-white text-white font-bold uppercase tracking-widest px-10 py-4 hover:bg-white hover:text-black transition">
              Explore Winter Wear
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* Best Products Section */}
      <ScrollReveal>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase">আমাদের সেরা পণ্য</h2>
              <p className="text-gray-500 mt-2 italic">&ldquo;The classics make a comeback&rdquo;</p>
              <div className="h-0.5 w-16 bg-black mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.filter(p => p.isSale).slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/shop" className="inline-block bg-black text-white font-bold uppercase tracking-widest px-10 py-4 hover:bg-gray-800 transition">
                Buy Now
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sale Banner */}
      <ScrollReveal>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://placehold.co/1920x1080/000000/FFFFFF/png?text=Pattern)', backgroundSize: 'cover' }} />
              <div className="relative z-10">
                <span className="text-sm tracking-[0.3em] uppercase mb-4 block">Limited Time</span>
                <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4">Sale of the Year</h2>
                <p className="text-red-100 text-lg max-w-xl mx-auto mb-8">
                  Up to 50% off on selected items. Don&apos;t miss out on the biggest sale of the season.
                </p>
                <Link href="/shop" className="inline-block bg-white text-red-600 font-bold uppercase tracking-widest px-10 py-4 hover:bg-gray-100 transition">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Instagram Gallery Strip */}
      <ScrollReveal>
        <section className="py-16 bg-gray-50 overflow-hidden">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold tracking-widest uppercase">Follow Us @classydripbd</h3>
          </div>
          <div className="flex animate-marquee gap-4 w-max">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-48 h-48 bg-gray-200 flex-shrink-0 overflow-hidden group relative">
                <img
                  src={`https://placehold.co/400x400/E5E7EB/000000/png?text=Gallery+${i + 1}`}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition">@classydripbd</span>
                </div>
              </div>
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={`dup-${i}`} className="w-48 h-48 bg-gray-200 flex-shrink-0 overflow-hidden group relative">
                <img
                  src={`https://placehold.co/400x400/E5E7EB/000000/png?text=Gallery+${i + 1}`}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition">@classydripbd</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
