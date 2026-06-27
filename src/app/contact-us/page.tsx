export default function ContactUsPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-widest uppercase mb-12 text-center">Contact Us</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-2">Name</label>
            <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-2">Email</label>
            <input type="email" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 uppercase tracking-wide mb-2">Message</label>
            <textarea rows={5} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black"></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white font-bold uppercase tracking-wider py-4 hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>

        <div className="mt-16 text-center text-gray-600">
          <p className="mb-2"><strong>Address:</strong> Mirpur, Dhaka, Bangladesh</p>
          <p className="mb-2"><strong>Email:</strong> info@classydrip.com</p>
          <p><strong>Phone:</strong> +880 1234-567890</p>
        </div>
      </div>
    </div>
  );
}
