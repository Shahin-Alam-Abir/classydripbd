import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Terms of Service</span>
        </nav>
        <h1 className="text-4xl font-bold tracking-widest uppercase mb-8">Terms of Service</h1>
        <div className="h-0.5 w-16 bg-black mb-8"></div>
        <div className="prose max-w-none text-gray-600 space-y-6">
          <h3 className="font-bold text-lg">1. Introduction</h3>
          <p>Welcome to Classy Drip. By using our website and services, you agree to these terms. Please read them carefully.</p>

          <h3 className="font-bold text-lg">2. Products & Pricing</h3>
          <p>All prices are in Bangladeshi Taka (৳). We reserve the right to modify prices without prior notice. Product images are for illustration purposes; actual products may vary slightly.</p>

          <h3 className="font-bold text-lg">3. Orders & Payment</h3>
          <p>We accept Cash on Delivery (COD) for all orders. Orders are processed within 24 hours. We reserve the right to cancel any order due to stock unavailability or pricing errors.</p>

          <h3 className="font-bold text-lg">4. Shipping & Delivery</h3>
          <p>Inside Dhaka: 24 hours delivery. Outside Dhaka: 24-48 hours delivery. Delivery times may vary during peak seasons or adverse weather conditions.</p>

          <h3 className="font-bold text-lg">5. Returns & Exchange</h3>
          <p>We offer a 7-day easy exchange policy. Products must be unused, unwashed, and in original packaging. Exchange is subject to stock availability.</p>

          <h3 className="font-bold text-lg">6. Contact</h3>
          <p>For any questions about these terms, contact us at info@classydrip.com or call 01980-035808.</p>
        </div>
      </div>
    </div>
  );
}
