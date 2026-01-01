import React, { useContext, useState } from 'react';
import { FaTruckLoading, FaCheckCircle, FaMapMarkerAlt, FaPhoneAlt, FaFileInvoice, FaBox } from 'react-icons/fa';
import { translations } from '../utils/translations';
import { GlobalContext } from '../../context/GlobalContext';
import { Link } from 'react-router';

function MyBookings() {

  const { lang } = useContext(GlobalContext);

  const [activeTab, setActiveTab] = useState('ongoing');
  const t = translations[lang].myBookings;

  const bookings = [
    {
      id: "FT-9921",
      truckNo: "RJ 14 GB 5521",
      driver: "Rajesh Kumar",
      crop: "Mustard (Sarson)",
      weight: "10 Tons",
      date: "24 Oct, 2023",
      status: "In Transit",
      type: "ongoing",
      location: "Chomu, Jaipur"
    },
    {
      id: "FT-9850",
      truckNo: "GJ 01 XX 1234",
      driver: "Suresh Meena",
      crop: "Wheat (Gehu)",
      weight: "5 Tons",
      date: "15 Oct, 2023",
      status: "Delivered",
      type: "completed",
      location: "Ahmedabad Mandi"
    }
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-500 pb-10">

      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-800">{t.title} 🚚</h2>
          <p className="text-slate-500 font-medium">{t.subtitle}</p>
        </div>

        <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100">
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'ongoing' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-emerald-600'}`}
          >
            {t.tabOngoing}
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'completed' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-emerald-600'}`}
          >
            {t.tabHistory}
          </button>
        </div>
      </div>

      {/* Bookings List */}
      <div className="grid grid-cols-1 gap-6">
        {bookings.filter(b => b.type === (activeTab === 'ongoing' ? 'ongoing' : 'completed')).map((booking) => (
          <div key={booking.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden hover:border-emerald-200 transition-all">

            <div className="p-8 flex flex-col md:flex-row justify-between gap-6">
              <div className="flex gap-6">
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center text-2xl shadow-inner ${booking.type === 'ongoing' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
                  {booking.type === 'ongoing' ? <FaTruckLoading /> : <FaCheckCircle />}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-black bg-slate-800 text-white px-2 py-0.5 rounded tracking-widest">{booking.id}</span>
                    <h4 className="font-black text-slate-800 text-xl">{booking.truckNo}</h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm font-bold text-slate-500">
                    <span className="flex items-center gap-1.5"><FaBox className="text-emerald-500" /> {booking.crop}</span>
                    <span className="text-slate-300">|</span>
                    <span>{t.vajan}: {booking.weight}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:items-end justify-center">
                <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${booking.type === 'ongoing' ? 'bg-blue-100 text-blue-700 animate-pulse' : 'bg-emerald-100 text-emerald-700'}`}>
                  {booking.status}
                </span>
                <p className="text-slate-400 text-xs mt-2 font-bold uppercase">{booking.date}</p>
              </div>
            </div>

            {/* Progress Bar */}
            {booking.type === 'ongoing' && (
              <div className="px-8 pb-4">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[65%] rounded-full"></div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                  <span>{t.journeyStart}</span>
                  <span className="text-blue-600">65% {lang === 'en' ? 'Travelled' : t.completedTask}</span>
                  <span>{t.journeyEnd}</span>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="bg-slate-50/50 px-8 py-4 flex flex-wrap items-center justify-between border-t border-slate-50 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="font-bold text-slate-600">{t.location}: <span className="text-slate-800">{booking.location}</span></span>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
                  <FaPhoneAlt size={12} /> {t.callDriver}
                </button>
                {booking.type === 'ongoing' ? (
                  <Link to="/farmer/tracking" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all">
                    {t.trackLive}
                  </Link>
                ) : (
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-xl font-bold text-sm hover:bg-black transition-all">
                    <FaFileInvoice size={12} /> {t.billDownload}
                  </button>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;