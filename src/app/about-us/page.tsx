import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">About Us</span>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-widest uppercase mb-2 text-center">About Classy Drip</h1>
          <p className="text-gray-500 text-center mb-4">we try our best for you</p>
          <div className="h-0.5 w-16 bg-black mx-auto mb-12"></div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Welcome to <strong>Classy Drip</strong>, your ultimate destination for premium men&apos;s clothing in Bangladesh.
              We believe that style is a reflection of your personality, and our mission is to provide you with apparel that defines class.
            </p>
            <p className="mb-6">
              Our collections are carefully curated, focusing on modern trends while maintaining timeless elegance. From everyday casual t-shirts to formal shirts and traditional panjabis, every piece is crafted with the highest quality materials.
            </p>
            <p className="mb-6">
              Located in <strong>Mirpur, Dhaka</strong>, we serve customers nationwide with fast delivery and cash on delivery service. Our commitment to quality and customer satisfaction sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 bg-gray-50">
              <h3 className="font-bold text-lg mb-2 uppercase tracking-wider">Our Mission</h3>
              <p className="text-gray-500 text-sm">To provide premium quality men&apos;s clothing at affordable prices with exceptional customer service.</p>
            </div>
            <div className="text-center p-8 bg-gray-50">
              <h3 className="font-bold text-lg mb-2 uppercase tracking-wider">Our Vision</h3>
              <p className="text-gray-500 text-sm">To become Bangladesh&apos;s most trusted online destination for men&apos;s fashion.</p>
            </div>
            <div className="text-center p-8 bg-gray-50">
              <h3 className="font-bold text-lg mb-2 uppercase tracking-wider">Our Values</h3>
              <p className="text-gray-500 text-sm">Quality, authenticity, customer satisfaction, and continuous innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
