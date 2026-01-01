import React, { useState } from 'react';
import { 
  FaHistory, FaCalendarAlt, FaMapMarkerAlt, FaStar, 
  FaRupeeSign, FaInfoCircle, FaSearch, FaFilter, FaCheckCircle, FaTimesCircle 
} from 'react-icons/fa';

const TripHistory = () => {
  const [activeTab, setActiveTab] = useState('Completed');

  const historyData = [
    {
      id: "TRIP-8821",
      date: "24 Oct, 2025",
      crop: "Wheat (Gehu)",
      amount: "12,500",
      pickup: "Chomu, Jaipur",
      dropoff: "Bikaner Mandi",
      status: "Completed",
      rating: 5,
      weight: "15 Tons"
    },
    {
      id: "TRIP-9012",
      date: "20 Oct, 2025",
      crop: "Mustard Seeds",
      amount: "4,200",
      pickup: "Dudu, Jaipur",
      dropoff: "Jaipur Main Mandi",
      status: "Completed",
      rating: 4,
      weight: "5 Tons"
    },
    {
      id: "TRIP-7734",
      date: "15 Oct, 2025",
      crop: "Potatoes",
      amount: "8,900",
      pickup: "Sanganer",
      dropoff: "Kota Mandi",
      status: "Cancelled",
      reason: "Farmer changed mind",
      weight: "10 Tons"
    }
  ];

  const filteredHistory = historyData.filter(trip => trip.status === activeTab);

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-6 bg-slate-50 min-h-screen pb-24">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Trip History</h2>
          <p className="text-slate-500 font-bold">Review your past performance and ratings</p>
        </div>
        
        {/* Search Bar - Responsive */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by ID or Crop..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 ring-blue-500 outline-none font-bold transition-all text-sm"
          />
        </div>
      </div>

      {/* Status Tabs - Full Width on Mobile */}
      <div className="flex bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm w-full sm:w-fit">
        {['Completed', 'Cancelled'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 sm:flex-none px-8 py-3 rounded-xl font-black text-xs sm:text-sm transition-all ${
              activeTab === tab 
              ? "bg-blue-600 text-white shadow-lg" 
              : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* History List - Responsive Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
        {filteredHistory.length > 0 ? (
          filteredHistory.map((trip) => (
            <HistoryCard key={trip.id} trip={trip} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-bold italic">No {activeTab.toLowerCase()} trips found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const HistoryCard = ({ trip }) => {
  return (
    <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl ${
            trip.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
          }`}>
            {trip.status === 'Completed' ? <FaCheckCircle /> : <FaTimesCircle />}
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-800 tracking-tight">{trip.crop}</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{trip.id} • {trip.date}</p>
          </div>
        </div>
        <div className="text-left sm:text-right w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-50">
          <p className="text-2xl font-black text-slate-900 flex items-center sm:justify-end">
            <FaRupeeSign size={18} />{trip.amount}
          </p>
          <div className="flex items-center sm:justify-end gap-1 text-yellow-500 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={12} className={i < trip.rating ? "fill-current" : "text-slate-200"} />
            ))}
          </div>
        </div>
      </div>

      {/* Trip Details - 2 Column on Tablet+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-100/50">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-emerald-500 mt-1 shrink-0" />
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Pickup</p>
              <p className="text-sm font-bold text-slate-700">{trip.pickup}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-blue-600 mt-1 shrink-0" />
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Drop-off</p>
              <p className="text-sm font-bold text-slate-700">{trip.dropoff}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-slate-200 pt-4 sm:pt-0 sm:pl-6">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-400">Total Weight:</span>
            <span className="text-sm font-black text-slate-800">{trip.weight}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs font-bold text-slate-400">Trip Status:</span>
            <span className={`text-[10px] font-black px-2 py-1 rounded-lg uppercase ${
              trip.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
            }`}>{trip.status}</span>
          </div>
          <button className="mt-4 w-full py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-xs hover:bg-slate-900 hover:text-white transition-all">
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripHistory;