import { FaCloudSun, FaArrowRight, FaHistory, FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { translations } from "../utils/translations"; // Path sahi karein
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

function DashboardHome() {
    const { lang } = useContext(GlobalContext);
  const t = translations[lang].dashboard; // Language selection logic

  const mandiRates = [
    { crop: "Wheat", price: "₹2,150", change: "+10", color: "text-emerald-500" },
    { crop: "Mustard", price: "₹5,400", change: "-5", color: "text-red-500" },
    { crop: "Pearl Millet (Bajra)", price: "₹1,900", change: "+15", color: "text-emerald-500" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-10">
      
      {/* 1. Welcome & Weather Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-8 rounded-[2.5rem] border border-emerald-50 shadow-sm gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-800 italic">{t.welcome}</h2>
          <p className="text-slate-500 font-medium">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-4 bg-emerald-50 px-6 py-3 rounded-2xl border border-emerald-100">
          <FaCloudSun className="text-emerald-600 text-3xl" />
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase">{t.weatherLoc}</p>
            <p className="text-lg font-black text-slate-800">28°C • Sunny</p>
          </div>
        </div>
      </div>

      {/* 2. Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-100 shadow-sm hover:shadow-md transition-all">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t.totalSavings}</p>
          <h3 className="text-4xl font-black text-slate-800 my-2">₹4,500</h3>
          <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
            <span className="bg-emerald-100 px-2 py-0.5 rounded-lg">↑ 30%</span>
            <span>{t.savingsNote}</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-100 shadow-sm hover:shadow-md transition-all">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t.activeShipment}</p>
          <h3 className="text-4xl font-black text-slate-800 my-2">01</h3>
          <div className="flex items-center gap-2 text-blue-500 font-bold text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
            <span>RJ-14-GB-5521 ({t.inTransit})</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-100 shadow-sm hover:shadow-md transition-all">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t.totalTrips}</p>
          <h3 className="text-4xl font-black text-slate-800 my-2">12</h3>
          <p className="text-slate-400 text-xs font-bold">{t.successDeliveries}</p>
        </div>
      </div>

      {/* 3. Main Content: Mandi Rates & Booking CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <FaBullhorn className="text-emerald-600" /> {t.mandiTitle}
            </h3>
            <button className="text-emerald-600 font-bold text-sm hover:underline">{t.viewAll}</button>
          </div>
          <div className="space-y-4">
            {mandiRates.map((rate, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                <span className="font-bold text-slate-700">{rate.crop}</span>
                <div className="text-right">
                  <p className="font-black text-slate-800">{rate.price}</p>
                  <p className={`text-xs font-bold ${rate.color}`}>{rate.change}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-emerald-100 relative overflow-hidden flex flex-col justify-center">
          <h3 className="text-3xl font-black mb-4 leading-tight">{t.bannerTitle}</h3>
          <p className="text-emerald-100 mb-8 font-medium">{t.bannerSub}</p>
          <Link to="/farmer/new-booking" className="flex items-center justify-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all w-full md:w-fit">
            {t.bookBtn} <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* 4. Recent Activity */}
      <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <FaHistory className="text-slate-400" /> {t.recentUpdates}
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm font-medium p-3 hover:bg-slate-50 rounded-xl transition-colors">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <p className="text-slate-600">{t.update1}</p>
            <span className="ml-auto text-slate-400 text-xs font-bold uppercase">2h ago</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium p-3 hover:bg-slate-50 rounded-xl transition-colors">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-slate-600">{t.update2}</p>
            <span className="ml-auto text-slate-400 text-xs font-bold uppercase">5h ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;