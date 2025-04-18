import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center py-4">
              <Link href="/" className="font-bold text-xl text-gray-800">
                My Website
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="py-4 px-2 text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link href="/blog" className="py-4 px-2 text-gray-500 hover:text-gray-900">
                Blog
              </Link>
              <Link href="/contact" className="py-4 px-2 text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
