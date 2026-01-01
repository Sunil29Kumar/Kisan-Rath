import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const FFooter = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* About Section */}
          <div className="space-y-6">
            <h4 className="text-white text-xl font-black">FarmTruck Connect</h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Kisanon aur Truck owners ko seedha jodkar, kheti ki logistics ko aasaan aur sasta banane ka ek prayas. 
              Developed at <span className="text-emerald-400 font-bold">Swarrnim University</span>.
            </p>
          </div>

          {/* Quick Support (PPT points) */}
          <div className="space-y-4">
            <h4 className="text-white font-bold">Sahayata (Help)</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-3"><FaPhoneAlt className="text-emerald-500"/> +91 94614 26608</p>
              <p className="flex items-center gap-3"><FaEnvelope className="text-emerald-500"/> support@farmtruck.com</p>
              <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-emerald-500"/> Swarrnim Startup Hub, Gujarat</p>
            </div>
          </div>

          {/* Action Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold">Emergency</h4>
            <button className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-bold shadow-lg transition-all">
              <FaWhatsapp size={20} /> Chat with Support
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 uppercase tracking-widest">
          <p>© 2025 FarmTruck Connect | Project by Veda Ram & Team</p>
        </div>
      </div>
    </footer>
  );
};

export default FFooter;