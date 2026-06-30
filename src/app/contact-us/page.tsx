import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Contact Us</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-widest uppercase mb-2 text-center">Contact Us</h1>
        <div className="h-0.5 w-16 bg-black mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-2">Address</h3>
                <p className="text-gray-600">414/415 4th Floor, Shah Smriti Market</p>
                <p className="text-gray-600">Road-10, Block-D, Mirpur-1</p>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-2">Phone</h3>
                <p className="text-gray-600">01980-035808</p>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-2">Email</h3>
                <p className="text-gray-600">info@classydrip.com</p>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-2">Business Hours</h3>
                <p className="text-gray-600">Saturday - Thursday: 10:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Friday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-2">Name</label>
                <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black transition" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-2">Email</label>
                <input type="email" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black transition" placeholder="Your email address" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-2">Message</label>
                <textarea rows={5} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black transition" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white font-bold uppercase tracking-wider py-4 hover:bg-gray-800 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
