import { FaArrowRight, FaTruck, FaLeaf, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-bold animate-bounce">
              <FaLeaf /> #1 Agriculture Logistics Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Connecting <span className="text-green-600">Farmers</span> to <br /> 
              Reliable <span className="text-emerald-500">Trucks</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Apni fasal ko sahi waqt par mandi pahunchayein. Book trucks instantly 
              at the best prices or register your fleet to grow your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/register" 
                className="px-8 py-4 bg-green-600 text-white rounded-2xl font-bold shadow-xl shadow-green-200 hover:bg-green-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
              >
                Get Started Now <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <button className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-100 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-gray-900">10k+</span>
                <span className="text-sm text-gray-500 font-medium">Farmers</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-gray-900">500+</span>
                <span className="text-sm text-gray-500 font-medium">Trucks</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-gray-900">24/7</span>
                <span className="text-sm text-gray-500 font-medium">Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="mt-16 lg:mt-0 relative">
            <div className="relative z-10 bg-gradient-to-tr from-green-100 to-emerald-50 rounded-[3rem] p-8 lg:p-12 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-[2rem] shadow-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white">
                      <FaTruck size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">Active Shipment</p>
                      <p className="text-xs text-gray-500">Tracking RJ14-2025</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">On Time</span>
                </div>
                
                {/* Visual Placeholder for Map/Truck */}
                <div className="h-48 w-full bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
                  <FaShieldAlt size={40} className="mb-2 text-green-200" />
                  <p className="text-sm">Verified Truck Tracking</p>
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce flex items-center gap-3 border border-gray-50">
               <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                 ★
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-800">Top Rated Service</p>
                 <p className="text-[10px] text-gray-400">4.9/5 Rating</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;