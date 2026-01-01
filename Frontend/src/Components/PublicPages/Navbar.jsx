import { useState } from "react";
import { FaTruck, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-green-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <FaTruck className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Kisan Rath
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600 font-medium transition-colors">About</Link>
            
            <div className="flex items-center gap-4 ml-4">
              <Link 
                to="/login" 
                className="text-gray-700 font-semibold hover:text-green-600 transition-all"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="bg-green-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-md hover:bg-green-700 hover:shadow-green-200 transition-all active:scale-95"
              >
                Join Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      <div className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
          <Link to="/" className="block px-4 py-3 text-gray-600 font-medium hover:bg-green-50 hover:text-green-600 rounded-xl transition-all">Home</Link>
          <Link to="/services" className="block px-4 py-3 text-gray-600 font-medium hover:bg-green-50 hover:text-green-600 rounded-xl transition-all">Services</Link>
          <Link to="/about" className="block px-4 py-3 text-gray-600 font-medium hover:bg-green-50 hover:text-green-600 rounded-xl transition-all">About</Link>
          <div className="pt-4 flex flex-col gap-3">
            <Link to="/login" className="w-full text-center py-3 text-green-600 font-bold border border-green-600 rounded-xl">Login</Link>
            <Link to="/register" className="w-full text-center py-3 bg-green-600 text-white font-bold rounded-xl shadow-lg">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;