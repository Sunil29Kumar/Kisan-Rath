import React, { useState, useContext } from 'react';
import { 
  FaMapMarkerAlt, FaWeightHanging, FaRupeeSign, 
  FaRoute, FaFilter, FaSearch, FaFire, FaClock, 
  FaArrowRight, FaShieldAlt, FaPhoneAlt, FaStar
} from 'react-icons/fa';
import { GlobalContext } from '../../context/GlobalContext';

const AvailableLoads = () => {
  const { lang } = useContext(GlobalContext);
  const [filter, setFilter] = useState('all');

  const availableLoads = [
    {
      id: "ORD-7721",
      crop: "Organic Wheat",
      weight: "12.5 Tons",
      price: "18,200",
      pickup: "Agricultural Hub, Jaipur",
      dropoff: "Bikaner Central Mandi",
      distance: "185 KM",
      time: "Just Now",
      type: "Heavy",
      isUrgent: true,
      rating: 4.9
    },
    {
      id: "ORD-9902",
      crop: "Mustard Seeds",
      weight: "4.2 Tons",
      price: "5,400",
      pickup: "Dudu Farm Cluster",
      dropoff: "Jaipur City Terminal",
      distance: "42 KM",
      time: "12 mins ago",
      type: "Mini",
      isUrgent: false,
      rating: 4.7
    },
    {
      id: "ORD-5543",
      crop: "Fresh Onions",
      weight: "8.0 Tons",
      price: "9,100",
      pickup: "Sanganer Mandi",
      dropoff: "Kota Logistics Park",
      distance: "245 KM",
      time: "45 mins ago",
      type: "Medium",
      isUrgent: true,
      rating: 4.8
    }
  ];

  return (
    <div className="p-4 md:p-10 space-y-8 animate-in fade-in duration-700 pb-28 bg-slate-50">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="space-y-1">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Available Loads</h2>
          <p className="text-slate-500 font-bold">Discover 12 new high-paying loads in your area</p>
        </div>

        <div className="relative w-full lg:w-96 group">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
          <input 
            type="text" 
            placeholder="Search by Mandi or Location..." 
            className="w-full pl-14 pr-6 py-4 bg-white border-2 border-slate-100 rounded-3xl shadow-sm focus:border-blue-500 focus:outline-none font-bold transition-all"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
        <button className="p-4 bg-slate-900 text-white rounded-2xl flex items-center gap-2 shadow-xl hover:bg-slate-800 transition-all">
          <FaFilter /> <span className="font-bold text-sm">Filter</span>
        </button>
        {['all', 'Mini', 'Medium', 'Heavy'].map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-8 py-4 rounded-2xl font-black text-sm whitespace-nowrap transition-all border-2 ${
              filter === t 
              ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200" 
              : "bg-white border-white text-slate-500 hover:border-blue-100"
            }`}
          >
            {t === 'all' ? 'All Loads' : t}
          </button>
        ))}
      </div>

      {/* Loads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {availableLoads
          .filter(load => filter === 'all' || load.type === filter)
          .map((load) => (
          <LoadCard key={load.id} load={load} />
        ))}
      </div>
    </div>
  );
};

const LoadCard = ({ load }) => {
  return (
    <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 relative flex flex-col group">
      
      {/* Top Meta */}
      <div className="flex justify-between items-center mb-6">
        {load.isUrgent ? (
          <div className="flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest border border-orange-100">
            <FaFire className="animate-pulse" /> Hot Load
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest border border-blue-100">
             Verified
          </div>
        )}
        <div className="flex items-center gap-1.5 text-slate-400 font-bold text-xs">
          <FaClock /> {load.time}
        </div>
      </div>

      {/* Title & Price */}
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-black text-slate-900 leading-tight">{load.crop}</h3>
          <div className="flex items-center gap-2 text-yellow-500 font-bold text-sm">
            <FaStar /> {load.rating} <span className="text-slate-300 font-medium">Farmer Rating</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-blue-600 flex items-center justify-end">
            <FaRupeeSign size={20} />{load.price}
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Est. Payout</p>
        </div>
      </div>

      {/* Route Info */}
      <div className="bg-slate-50 rounded-[2.5rem] p-6 mb-6 space-y-6 relative border border-slate-100/50">
        <div className="absolute left-9 top-12 bottom-12 w-[1px] bg-gradient-to-b from-blue-400 to-emerald-400 opacity-40 dashed border-l border-dashed border-slate-400"></div>
        
        <div className="flex items-center gap-5 relative">
          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center border-4 border-white shadow-sm z-10">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pickup Mandi</p>
            <p className="text-md font-bold text-slate-800">{load.pickup}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 relative">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-sm z-10">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Drop-off Terminal</p>
            <p className="text-md font-bold text-slate-800">{load.dropoff}</p>
          </div>
        </div>
      </div>

      {/* Load Specs */}
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
            <FaWeightHanging />
          </div>
          <div>
            <p className="text-[8px] font-black text-slate-400 uppercase">Weight</p>
            <p className="text-sm font-black text-slate-800">{load.weight}</p>
          </div>
        </div>
        <div className="h-8 w-[1px] bg-slate-100"></div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
            <FaRoute />
          </div>
          <div>
            <p className="text-[8px] font-black text-slate-400 uppercase">Distance</p>
            <p className="text-sm font-black text-slate-800">{load.distance}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-auto">
        <button className="w-14 h-14 bg-slate-100 text-slate-500 rounded-2xl flex items-center justify-center hover:bg-slate-200 transition-all border border-slate-200 shadow-sm active:scale-90">
          <FaPhoneAlt />
        </button>
        <button className="flex-1 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-blue-100 hover:bg-blue-700 hover:shadow-blue-200 transition-all active:scale-[0.98]">
          Book Now <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AvailableLoads;