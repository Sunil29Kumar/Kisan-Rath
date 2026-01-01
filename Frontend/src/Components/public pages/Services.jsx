import { FaCalendarCheck, FaRoute, FaWallet, FaShieldAlt, FaHeadset, FaFileContract } from "react-icons/fa";
import { Link } from "react-router";

const Services = () => {
  const serviceList = [
    {
      icon: <FaCalendarCheck size={30} />,
      title: "Instant Booking",
      desc: "Farmers can book trucks instantly with real-time availability and transparent pricing.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <FaRoute size={30} />,
      title: "Live Tracking",
      desc: "Monitor your goods throughout the journey with our GPS-enabled tracking system.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <FaWallet size={30} />,
      title: "Secure Payments",
      desc: "Multiple payment options with an escrow system to ensure safety for both parties.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: "Cargo Insurance",
      desc: "Get your valuable harvest insured against accidents or unforeseen damages.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <FaFileContract size={30} />,
      title: "Digital Invoicing",
      desc: "Go paperless! Get GST-compliant invoices and digital receipts for every trip.",
      color: "bg-rose-50 text-rose-600"
    },
    {
      icon: <FaHeadset size={30} />,
      title: "24/7 Support",
      desc: "Our dedicated support team is always available to help you with any queries.",
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-green-600 font-bold uppercase tracking-widest text-sm">What We Offer</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Integrated Solutions for <br /> Modern <span className="text-green-600">Agri-Logistics</span>
          </h3>
          <p className="text-gray-500 text-lg">
            Humne technology aur bharose ko milakar aise features banaye hain jo kisan aur truck owners dono ki life asan banate hain.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => (
            <div 
              key={index}
              className="group p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-100 hover:-translate-y-2 transition-all duration-300 text-left"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.desc}
              </p>
              
              <div className="mt-6 flex items-center gap-2 text-green-600 font-bold text-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <span className="text-lg">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call-to-action */}
        <div className="mt-20 p-8 bg-green-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-green-200">
          <div className="text-left">
            <h4 className="text-2xl font-bold">Ready to streamline your business?</h4>
            <p className="text-green-100 opacity-90">Join 50,000+ users today and experience the difference.</p>
          </div>
          <Link to="/register" className="whitespace-nowrap px-8 py-4 bg-white text-green-700 font-bold rounded-2xl hover:bg-gray-100 transition-colors shadow-lg">
            Register for Free
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;