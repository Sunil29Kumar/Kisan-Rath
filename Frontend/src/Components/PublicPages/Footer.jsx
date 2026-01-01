import { FaTruck, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-green-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
                <FaTruck className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Kisan Rath
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Bharat ka sabse bharosemand agri-logistics platform. Hum kisanon aur truck owners ko jodkar kranti la rahe hain.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-green-500 transition-colors">Our Services</Link></li>
              <li><Link to="/faq" className="hover:text-green-500 transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-green-500 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/register" className="hover:text-green-500 transition-colors">For Farmers</Link></li>
              <li><Link to="/register" className="hover:text-green-500 transition-colors">For Truck Owners</Link></li>
              <li><Link to="/tracking" className="hover:text-green-500 transition-colors">Shipment Tracking</Link></li>
              <li><Link to="/insurance" className="hover:text-green-500 transition-colors">Cargo Insurance</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Latest updates aur mandi rates ke liye subscribe karein.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-green-600 transition-all outline-none text-white text-sm"
              />
              <button className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-green-900/20">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500 tracking-wider uppercase">
          <p>© 2025 LogiAgri Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-all shadow-xl fixed bottom-8 right-8 z-40 lg:static lg:shadow-none"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;