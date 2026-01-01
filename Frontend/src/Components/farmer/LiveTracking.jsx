import React, { useContext } from 'react';
import { FaTruck, FaPhoneAlt, FaMapMarkerAlt, FaRoute, FaShieldAlt } from 'react-icons/fa';
import { translations } from "../utils/translations";
import { GlobalContext } from '../../context/GlobalContext';

function LiveTracking() {

  const { lang } = useContext(GlobalContext);
  const t = translations[lang].liveTracking;

  return (
    <div className="space-y-8 animate-in zoom-in duration-700 pb-10">

      {/* Header with Live Pulse */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800 flex items-center gap-3">
            {t.title} 🛰️
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">{t.gpsStatus}</p>
          </div>
        </div>
        <div className="bg-white px-6 py-3 rounded-2xl border border-emerald-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase">{t.estArrival}</p>
          <p className="text-lg font-black text-emerald-600">{t.timeLeft}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left: Map Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-200 h-[450px] rounded-[3rem] border-4 border-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/basic-v2/static/75.81,26.91,12/800x450.png?key=get_your_own_key')] bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-10000"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-500/20 rounded-full animate-ping"></div>
                <div className="bg-emerald-600 text-white p-4 rounded-2xl shadow-2xl relative border-2 border-white">
                  <FaTruck size={24} />
                </div>
              </div>
            </div>

            <div className="absolute top-1/4 right-1/4 text-red-600">
              <FaMapMarkerAlt size={32} />
              <div className="bg-white px-3 py-1 rounded-lg text-[10px] font-black shadow-lg mt-1 uppercase">{t.mandi}</div>
            </div>

            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase">{t.currentSpeed}</span>
                <span className="font-black text-slate-800">42 km/h</span>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase">{t.nextHalt}</span>
                <span className="font-black text-slate-800">Reengus Toll</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Journey Details & Driver */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-sm font-black text-slate-400 uppercase mb-4 tracking-widest">{t.driverJankari}</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400">
                <FaShieldAlt size={24} />
              </div>
              <div>
                <p className="font-black text-slate-800 text-lg">Rajesh Kumar</p>
                <p className="text-emerald-600 text-xs font-bold">{t.verified}</p>
              </div>
            </div>
            <button className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
              <FaPhoneAlt size={14} /> {t.callBtn}
            </button>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl">
            <h3 className="text-sm font-black text-slate-400 uppercase mb-6 tracking-widest flex items-center gap-2">
              <FaRoute className="text-emerald-400" /> {t.routeTitle}
            </h3>
            <div className="space-y-8 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-white/10"></div>

              <div className="flex gap-4 relative">
                <div className="w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-900 z-10"></div>
                <div>
                  <p className="text-xs text-emerald-400 font-black">{t.start} (08:30 AM)</p>
                  <p className="font-bold text-sm">{t.farm}</p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900 z-10 animate-pulse"></div>
                <div>
                  <p className="text-xs text-blue-400 font-black">{t.current} (10:15 AM)</p>
                  <p className="font-bold text-sm">National Highway 48</p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-6 h-6 bg-slate-700 rounded-full border-4 border-slate-900 z-10"></div>
                <div>
                  <p className="text-xs text-slate-500 font-black">{t.destination}</p>
                  <p className="font-bold text-sm">{t.mandi}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LiveTracking;