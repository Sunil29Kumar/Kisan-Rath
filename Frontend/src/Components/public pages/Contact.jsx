import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form handling logic
    console.log("Form Submitted");
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-600 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Side: Contact Info */}
          <div className="lg:w-1/3 p-10 lg:p-16 text-white space-y-8 relative">
            {/* Decorative Circle */}
            <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold">Get in Touch</h2>
              <p className="text-green-100 opacity-90">
                Koi sawal hai ya sujhav? Humse kabhi bhi baat karein. Hum aapki madad ke liye taiyar hain.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-green-600 transition-all">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-green-200 font-bold uppercase tracking-wider">Call Us</p>
                  <p className="font-bold text-lg">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-green-600 transition-all">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-green-200 font-bold uppercase tracking-wider">Email Us</p>
                  <p className="font-bold text-lg">support@logiagri.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-green-600 transition-all">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-green-200 font-bold uppercase tracking-wider">Visit Us</p>
                  <p className="font-bold text-lg">Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Link */}
            <div className="pt-8">
              <button className="flex items-center gap-3 bg-white text-green-600 px-6 py-3 rounded-2xl font-bold shadow-lg hover:bg-gray-100 transition-all active:scale-95">
                <FaWhatsapp size={22} /> Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:w-2/3 bg-white p-10 lg:p-16">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Ram Kumar"
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Mobile Number</label>
                <input 
                  type="tel" 
                  placeholder="98XXXXXXXX"
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                <textarea 
                  rows="4"
                  placeholder="Aap kya puchna chahte hain?"
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-green-600 text-white rounded-2xl font-bold shadow-xl shadow-green-100 hover:bg-green-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
                >
                  Send Message <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;