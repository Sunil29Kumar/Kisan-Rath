import React from "react";
import { FaRupeeSign, FaClock, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const TruckDashboardHome = () => {
  return (
    <div className="p-6 md:p-10 space-y-8 animate-in slide-in-from-bottom-4 duration-500">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800">
            Welcome Back 👋
          </h1>
          <p className="text-slate-500 font-medium">
            Aaj aapke liye 3 naye load requests available hain
          </p>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-2xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="text-xs font-black uppercase">On Duty</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Today's Earnings" value="₹4,250" icon={<FaRupeeSign />} color="bg-blue-600" trend="+12%" />
        <StatCard title="Trips Completed" value="08" icon={<FaCheckCircle />} color="bg-emerald-600" trend="+2 Trips" />
        <StatCard title="Hours Online" value="10.5 Hrs" icon={<FaClock />} color="bg-orange-600" trend="85%" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Load Requests */}
        <div className="space-y-4">
          <h3 className="text-xl font-black text-slate-800">
            🚛 New Load Requests
          </h3>

          <div className="space-y-4">
            <LoadCard
              from="Village Rampura"
              to="Jaipur Mandi"
              weight="1.8 Ton"
              price="₹2,200"
            />
            <LoadCard
              from="Sikar"
              to="Ajmer"
              weight="2.5 Ton"
              price="₹3,100"
            />
          </div>
        </div>

        {/* Recent Trips */}
        <div className="space-y-4">
          <h3 className="text-xl font-black text-slate-800">
            📊 Recent Trip Status
          </h3>

          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-6 space-y-4">
            <TripStatus
              route="Kota → Jaipur"
              status="Completed"
              earning="₹2,800"
            />
            <TripStatus
              route="Bhilwara → Udaipur"
              status="In Transit"
              earning="₹1,900"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Components ---------- */

const StatCard = ({ title, value, icon, color, trend }) => (
  <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between group hover:border-blue-200 transition-all">
    <div className="space-y-2">
      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
        {title}
      </p>
      <h2 className="text-3xl font-black text-slate-800">{value}</h2>
      <span className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded">
        {trend}
      </span>
    </div>

    <div className={`${color} w-14 h-14 rounded-3xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
  </div>
);

const LoadCard = ({ from, to, weight, price }) => (
  <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-5 flex flex-col gap-4 hover:shadow-lg transition">
    <div className="flex items-center gap-2 text-slate-700 font-semibold">
      <FaMapMarkerAlt className="text-green-600" />
      {from} → {to}
    </div>

    <div className="flex justify-between text-sm text-slate-500 font-medium">
      <span>Load: {weight}</span>
      <span className="font-bold text-slate-800">{price}</span>
    </div>

    <div className="flex gap-3">
      <button className="flex-1 py-2 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition">
        Accept
      </button>
      <button className="flex-1 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition">
        Reject
      </button>
    </div>
  </div>
);

const TripStatus = ({ route, status, earning }) => (
  <div className="flex justify-between items-center border border-slate-100 rounded-xl p-4">
    <div>
      <p className="font-semibold text-slate-800">{route}</p>
      <p className={`text-xs font-bold ${status === "Completed" ? "text-emerald-600" : "text-orange-600"}`}>
        {status}
      </p>
    </div>
    <p className="font-bold text-slate-800">{earning}</p>
  </div>
);

export default TruckDashboardHome;
