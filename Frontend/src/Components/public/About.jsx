import { FaCheckCircle, FaAward, FaUsers, FaHandshake } from "react-icons/fa";

const About = () => {
  const features = [
    { title: "Direct Connect", desc: "No middleman, direct farmer to truck owner communication." },
    { title: "Fair Pricing", desc: "Transparent bidding system for the best market rates." },
    { title: "Verified Partners", desc: "Every driver and farmer is KYC verified for safety." }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Visual Story */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              {/* Replace with a real image of a farm or truck later */}
              <div className="h-[500px] bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center p-12 text-center">
                <div className="text-white space-y-4">
                  <FaHandshake size={80} className="mx-auto opacity-50" />
                  <h3 className="text-3xl font-bold italic">"Empowering the hands that feed the nation."</h3>
                </div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block border border-green-50">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-green-600">05+</span>
                <div className="text-sm font-bold text-gray-700 leading-tight">
                  Years of <br /> Excellence
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-200/30 rounded-full blur-2xl"></div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm">Our Mission</h2>
              <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
                Revolutionizing Rural <br /> <span className="text-emerald-600 text-3xl">Logistics for Everyone</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                LogiAgri was born out of a simple need: making it easier for farmers to find trucks 
                and for truck owners to find loads. We bridge the gap between the field and 
                the market with technology that is simple, fast, and secure.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <FaCheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                <FaUsers className="text-green-600" size={24} />
                <div>
                  <p className="font-black text-gray-900 text-xl">50k+</p>
                  <p className="text-xs text-gray-400 font-semibold uppercase">Community</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                <FaAward className="text-green-600" size={24} />
                <div>
                  <p className="font-black text-gray-900 text-xl">100%</p>
                  <p className="text-xs text-gray-400 font-semibold uppercase">Trust Factor</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;