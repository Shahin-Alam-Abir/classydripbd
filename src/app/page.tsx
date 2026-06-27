import Link from 'next/link';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Ironless Micro-Spandex Shirt (Maroon)',
    price: '৳ 1,200',
    image: 'https://placehold.co/600x800/000000/FFFFFF/png?text=Classy+Drip+Shirt',
    category: 'Shirt'
  },
  {
    id: '2',
    name: 'Acid Wash Drop Shoulder T Shirt',
    price: '৳ 850',
    image: 'https://placehold.co/600x800/000000/FFFFFF/png?text=Classy+Drip+T-Shirt',
    category: 'T-Shirt'
  },
  {
    id: '3',
    name: 'Mughal Embroidery Panjabi',
    price: '৳ 2,500',
    image: 'https://placehold.co/600x800/000000/FFFFFF/png?text=Classy+Drip+Panjabi',
    category: 'Panjabi'
  },
  {
    id: '4',
    name: 'Winter Denim Shirt for Men',
    price: '৳ 1,500',
    image: 'https://placehold.co/600x800/000000/FFFFFF/png?text=Classy+Drip+Denim',
    category: 'Shirt'
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 tracking-wider">
            DEFINED BY CLASS. <br /> DRIVEN BY STYLE.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
            Upgrade your wardrobe with our premium collection of Shirts, T-Shirts, and Panjabis. 
            Exclusive designs for the modern man.
          </p>
          <div className="flex space-x-4">
            <Link href="/shop" className="bg-white text-black font-bold uppercase tracking-widest px-8 py-4 hover:bg-gray-200 transition">
              Shop Now
            </Link>
          </div>
        </div>
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://placehold.co/1920x1080/000000/FFFFFF/png?text=Abstract')] bg-cover bg-center"></div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-widest uppercase mb-2">Shop by Category</h2>
            <div className="h-1 w-20 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Shirt', 'T-Shirt', 'Panjabi'].map((cat) => (
              <Link key={cat} href={`/category/${cat.toLowerCase()}`} className="group relative block overflow-hidden bg-gray-100 aspect-[3/4]">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-300"></div>
                <img src={`https://placehold.co/600x800/E5E7EB/000000/png?text=${cat}`} alt={cat} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white text-black font-bold uppercase tracking-widest px-6 py-3 shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300">
                    {cat}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-widest uppercase mb-2">Featured Products</h2>
              <div className="h-1 w-20 bg-black"></div>
            </div>
            <Link href="/shop" className="hidden md:block text-black font-semibold hover:underline">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4 bg-gray-200 aspect-[3/4]">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 text-xs font-bold uppercase tracking-wider">New</div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-600 transition truncate">{product.name}</h3>
                <p className="text-gray-500 font-medium mt-1">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
