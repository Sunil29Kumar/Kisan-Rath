import { useState } from "react";
import { FaChevronDown, FaQuestionCircle, FaSearch } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Kisan truck kaise book kar sakte hain?",
      answer: "Kisan app par login karke apni location aur fasal ki jaankari daal sakte hain. Uske baad aas-paas ke available trucks ki list dikhegi jise aap turant book kar sakte hain."
    },
    {
      question: "Truck owner ko payment kab milti hai?",
      answer: "Jaise hi delivery confirm hoti hai, payment direct truck owner ke bank account mein transfer kar di jaati hai. Humne security ke liye escrow system rakha hai."
    },
    {
      question: "Kya loading aur unloading ki suvidha milti hai?",
      answer: "Ye aapke booking type par depend karta hai. Booking ke waqt aap 'With Labor' ya 'Self Loading' ka option chuna sakte hain."
    },
    {
      question: "Fasal ka insurance kaise hota hai?",
      answer: "LogiAgri ne kai insurance companies ke saath partnership ki hai. Booking ke waqt aap 'Secure My Load' checkbox par click karke sasta insurance le sakte hain."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
            Help Center
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">Sawal Jo Aksar <span className="text-green-600">Puche Jaate Hain</span></h2>
          <p className="text-gray-500">Aapke har sawal ka jawab yahan milega. Agar aur kuch puchna ho toh support team se baat karein.</p>
        </div>

        {/* Search Bar (Visual Only) */}
        <div className="relative mb-12">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search your question..." 
            className="w-full pl-14 pr-6 py-5 bg-white border-none rounded-[2rem] shadow-sm focus:ring-2 focus:ring-green-500 transition-all outline-none text-gray-700"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[2rem] overflow-hidden transition-all duration-300 border border-transparent ${
                activeIndex === index ? "shadow-xl border-green-100 ring-1 ring-green-50" : "shadow-sm hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <FaQuestionCircle className={`${activeIndex === index ? "text-green-600" : "text-gray-300"} transition-colors`} size={20} />
                  <span className={`font-bold text-lg ${activeIndex === index ? "text-green-700" : "text-gray-800"}`}>
                    {faq.question}
                  </span>
                </div>
                <FaChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-green-600" : ""}`} 
                />
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 pt-0 ml-9 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Footer */}
        <div className="mt-16 p-8 bg-white rounded-[2.5rem] border border-dashed border-gray-300 text-center">
          <p className="text-gray-500 mb-4 font-medium">Abhi bhi koi sawal hai?</p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all active:scale-95">
            Contact Support
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;