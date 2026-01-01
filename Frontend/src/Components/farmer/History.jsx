import React, { useContext } from 'react';
import { FaDownload, FaSearch, FaFilter, FaArrowRight, FaFileInvoiceDollar } from 'react-icons/fa';
import { translations } from "../utils/translations";
import { GlobalContext } from '../../context/GlobalContext';

function History() {

  const { lang } = useContext(GlobalContext);
  const t = translations[lang].history;

  const historyData = [
    { date: "12 Sep 2023", route: "Alwar to Jaipur Mandi", amount: "₹3,200", crop: "Wheat", status: t.delivered, truck: "RJ-14-GA-1234" },
    { date: "05 Sep 2023", route: "Chomu to Unjha Mandi", amount: "₹8,500", crop: "Mustard", status: t.delivered, truck: "GJ-01-XX-5678" },
    { date: "28 Aug 2023", route: "Sikar to Jaipur Mandi", amount: "₹2,100", crop: "Bajra", status: t.delivered, truck: "RJ-23-BB-9900" },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-700 pb-10">

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">{t.title} 📖</h2>
          <p className="text-slate-500 font-medium">{t.subtitle}</p>
        </div>
        <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:bg-black transition-all shadow-lg">
          <FaDownload /> {t.downloadBtn}
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-[1.5rem] outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm transition-all"
          />
        </div>
        <button className="flex items-center justify-center gap-2 bg-white border border-slate-100 px-6 py-4 rounded-[1.5rem] font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
          <FaFilter /> {t.filterBtn}
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.tableDate}</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.tableRoute}</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.tableCrop}</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.tableAmount}</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.tableStatus}</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{t.tableAction}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {historyData.map((item, i) => (
                <tr key={i} className="hover:bg-emerald-50/30 transition-colors group">
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-slate-800">{item.date}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                      <span>{item.route.split(' to ')[0]}</span>
                      <FaArrowRight className="text-[10px] text-emerald-400" />
                      <span className="text-slate-800">{item.route.split(' to ')[1]}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-700">{item.crop}</p>
                    <p className="text-[10px] font-bold text-slate-400">{item.truck}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-slate-800">{item.amount}</p>
                    <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-tighter">{t.paidVia}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-black text-[10px] bg-emerald-100/50 px-3 py-1.5 rounded-full uppercase">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <button className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm group-hover:scale-110">
                      <FaFileInvoiceDollar size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Suggestion Box */}
      <div className="text-center p-12 bg-emerald-50/50 rounded-[3rem] border-2 border-dashed border-emerald-100">
        <p className="text-slate-500 font-medium">{t.footerNote}</p>
      </div>

    </div>
  );
}

export default History;