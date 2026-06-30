import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="py-20 bg-white min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-widest uppercase mb-2 text-center">My Account</h1>
        <div className="h-0.5 w-16 bg-black mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {/* Login */}
          <div className="bg-gray-50 p-8">
            <h2 className="text-xl font-bold mb-6 uppercase tracking-wider">Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username or email address</label>
                <input type="text" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
              </div>
              <button type="submit" className="w-full bg-black text-white font-bold uppercase tracking-wider py-3 hover:bg-gray-800 transition">
                Log In
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                <Link href="#" className="hover:underline">Lost your password?</Link>
              </p>
            </form>
          </div>

          {/* Register */}
          <div className="bg-gray-50 p-8">
            <h2 className="text-xl font-bold mb-6 uppercase tracking-wider">Register</h2>
            <p className="text-sm text-gray-600 mb-6">Create an account to enjoy faster checkout, order tracking, and more.</p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input type="email" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black" />
              </div>
              <button type="submit" className="w-full bg-black text-white font-bold uppercase tracking-wider py-3 hover:bg-gray-800 transition">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
