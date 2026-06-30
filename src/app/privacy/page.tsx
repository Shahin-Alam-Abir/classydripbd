import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Privacy Policy</span>
        </nav>
        <h1 className="text-4xl font-bold tracking-widest uppercase mb-8">Privacy Policy</h1>
        <div className="h-0.5 w-16 bg-black mb-8"></div>
        <div className="prose max-w-none text-gray-600 space-y-6">
          <h3 className="font-bold text-lg">1. Information We Collect</h3>
          <p>We collect information you provide when placing an order, including your name, phone number, delivery address, and email address.</p>

          <h3 className="font-bold text-lg">2. How We Use Your Information</h3>
          <p>We use your information to process orders, arrange delivery, and provide customer support. We do not share your personal information with third parties except as necessary for delivery.</p>

          <h3 className="font-bold text-lg">3. Data Security</h3>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>

          <h3 className="font-bold text-lg">4. Cookies</h3>
          <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings.</p>

          <h3 className="font-bold text-lg">5. Contact</h3>
          <p>For privacy-related inquiries, contact us at info@classydrip.com.</p>
        </div>
      </div>
    </div>
  );
}
