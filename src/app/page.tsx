'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { useEffect, useRef, useState } from 'react';

const BEST_SELLING = products.filter(p => p.isSale).slice(0, 6);
const NEW_PRODUCTS = products.filter(p => p.isNew).slice(0, 6);

const heroSlides = [
  {
    image: 'https://menslifestylebd.com/wp-content/uploads/2025/12/175915194068035332106_mf_719_2-1-1-1.webp',
    title: 'প্রিমিয়াম টি-শার্ট',
    subtitle: 'স্টাইলিশ ও আরামদায়ক ডিজাইন',
    link: '/category/t-shirt',
    label: 'টি-শার্ট দেখুন',
  },
  {
    image: 'https://menslifestylebd.com/wp-content/uploads/2026/05/Black-Maniq.jpg',
    title: 'এক্সক্লুসিভ পাঞ্জাবি',
    subtitle: 'ঈদ ও বিশেষ উপলক্ষ্যে জন্য',
    link: '/category/panjabi',
    label: 'পাঞ্জাবি দেখুন',
  },
  {
    image: 'https://menslifestylebd.com/wp-content/uploads/2022/12/Image-10.1-min-2.jpg',
    title: 'প্রিমিয়াম শার্ট',
    subtitle: 'ফর্মাল ও ক্যাজুয়াল পরিধান',
    link: '/category/shirt',
    label: 'শার্ট দেখুন',
  },
  {
    image: 'https://placehold.co/600x800/000000/FFFFFF/png?text=Oxford+Shoes+Front',
    title: 'স্টাইলিশ জুতা',
    subtitle: 'ফর্মাল ও ক্যাজুয়াল কালেকশন',
    link: '/category/shoes',
    label: 'জুতা দেখুন',
  },
];

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
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex(i => (i + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[slideIndex];

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="relative h-[80vh] md:h-[90vh]">
          {heroSlides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${i === slideIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
            </div>
          ))}

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <span className="text-sm tracking-[0.3em] text-gray-300 mb-4 block uppercase">ক্লাসি ড্রিপ</span>
                <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <Link href={slide.link} className="bg-white text-black font-bold uppercase tracking-widest px-10 py-4 hover:bg-gray-200 transition inline-flex items-center gap-2 group">
                    {slide.label} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </Link>
                  <Link href="/shop" className="border-2 border-white text-white font-bold uppercase tracking-widest px-10 py-4 hover:bg-white hover:text-black transition">
                    সব প্রোডাক্ট
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button onClick={() => setSlideIndex(i => (i - 1 + heroSlides.length) % heroSlides.length)} className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === slideIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'}`}
                />
              ))}
            </div>
            <button onClick={() => setSlideIndex(i => (i + 1) % heroSlides.length)} className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition">
              <ChevronRight className="h-5 w-5" />
            </button>
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase mb-2">আমাদের ক্যাটাগরি</h2>
              <div className="h-0.5 w-16 bg-black mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {categories.slice(0, 5).map((cat, i) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className="group relative block overflow-hidden bg-gray-100 aspect-[3/4]"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 z-20">
                    <span className="text-white text-lg font-bold uppercase tracking-widest mb-1">{cat.nameBn}</span>
                    <span className="text-white/80 text-xs mb-1">{cat.name}</span>
                    <span className="text-white/60 text-xs">{cat.count} টি প্রোডাক্ট</span>
                    <span className="bg-white text-black font-bold uppercase tracking-widest px-6 py-3 mt-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs">
                      দেখুন
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
                সব দেখুন <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {BEST_SELLING.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-10 md:hidden">
              <Link href="/shop" className="inline-block border-2 border-black text-black font-bold uppercase tracking-wider px-10 py-3 hover:bg-black hover:text-white transition">
                সব প্রোডাক্ট দেখুন
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
              <p className="text-gray-500 mt-4">সর্বশেষ কালেকশন এখন আপনার জন্য</p>
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
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://menslifestylebd.com/wp-content/uploads/2026/01/COVER-1.png)' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-sm tracking-[0.3em] text-gray-400 uppercase mb-4 block">সিজনাল</span>
            <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4">শীতকালীন কালেকশন ২০২৫/২৬</h2>
            <p className="text-gray-400 text-lg mb-10">পোশাকের জন্য সর্বাধিক শুভেচ্ছা</p>
            <Link href="/category/shirt" className="inline-block border-2 border-white text-white font-bold uppercase tracking-widest px-10 py-4 hover:bg-white hover:text-black transition">
              শীতের পোশাক দেখুন
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
              <p className="text-gray-500 mt-2 italic">&ldquo;দ্য ক্লাসিকস মেক অ্যা কামব্যাক&rdquo;</p>
              <div className="h-0.5 w-16 bg-black mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.filter(p => p.isSale).slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/shop" className="inline-block bg-black text-white font-bold uppercase tracking-widest px-10 py-4 hover:bg-gray-800 transition">
                এখনই কিনুন
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
              <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://menslifestylebd.com/wp-content/uploads/elementor/thumbs/176210849233575978427_web_cover_for_turtle_neck_sweater-4-rfx37katusxtn5ojrak56d135s2nuq0oywf013e3s2.webp)' }} />
              <div className="relative z-10">
                <span className="text-sm tracking-[0.3em] uppercase mb-4 block">লিমিটেড টাইম</span>
                <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4">সেরা ডিল</h2>
                <p className="text-red-100 text-lg max-w-xl mx-auto mb-8">
                  সিলেক্টেড আইটেমে ৫০% পর্যন্ত ছাড়। মৌসুমের সেরা ডিল মিস করবেন না।
                </p>
                <Link href="/shop" className="inline-block bg-white text-red-600 font-bold uppercase tracking-widest px-10 py-4 hover:bg-gray-100 transition">
                  এখনই কিনুন
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
            <h3 className="text-lg font-bold tracking-widest uppercase">@classydripbd কে ফলো করুন</h3>
          </div>
          <div className="flex animate-marquee gap-4 w-max">
            {[
              'https://menslifestylebd.com/wp-content/uploads/2025/12/175915194068035332106_mf_719_2-1-1-1.webp',
              'https://menslifestylebd.com/wp-content/uploads/2025/12/1716909849821-manfarebd-id-13-1-1.webp',
              'https://menslifestylebd.com/wp-content/uploads/2026/05/Black-Maniq.jpg',
              'https://menslifestylebd.com/wp-content/uploads/2026/05/Mst-Ash-Maniq.jpg',
              'https://menslifestylebd.com/wp-content/uploads/2026/05/Navy-Q.jpg',
              'https://menslifestylebd.com/wp-content/uploads/2025/12/175915197042389039174_mf_719_3-1-1.webp',
            ].map((src, i) => (
              <div key={i} className="w-48 h-48 bg-gray-200 flex-shrink-0 overflow-hidden group relative">
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition">@classydripbd</span>
                </div>
              </div>
            ))}
            {[
              'https://menslifestylebd.com/wp-content/uploads/2025/12/175915194068035332106_mf_719_2-1-1-1.webp',
              'https://menslifestylebd.com/wp-content/uploads/2025/12/1716909849821-manfarebd-id-13-1-1.webp',
              'https://menslifestylebd.com/wp-content/uploads/2026/05/Black-Maniq.jpg',
              'https://menslifestylebd.com/wp-content/uploads/2026/05/Mst-Ash-Maniq.jpg',
              'https://menslifestylebd.com/wp-content/uploads/2026/05/Navy-Q.jpg',
              'https://menslifestylebd.com/wp-content/uploads/2025/12/175915197042389039174_mf_719_3-1-1.webp',
            ].map((src, i) => (
              <div key={`dup-${i}`} className="w-48 h-48 bg-gray-200 flex-shrink-0 overflow-hidden group relative">
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
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
