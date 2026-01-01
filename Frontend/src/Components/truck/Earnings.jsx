import React, { useState } from 'react';
import { 
  FaWallet, FaArrowUp, FaArrowDown, FaRupeeSign, 
  FaCalendarAlt, FaDownload, FaHistory, FaCheckCircle ,FaClock
} from 'react-icons/fa';

const Earnings = () => {
  const [timeframe, setTimeframe] = useState('This Month');

  const stats = [
    { title: "Total Balance", value: "₹45,280", icon: <FaWallet />, color: "bg-blue-600", trend: "+12.5%" },
    { title: "Today's Income", value: "₹3,400", icon: <FaArrowUp />, color: "bg-emerald-600", trend: "2 Trips" },
    { title: "Pending Payout", value: "₹8,150", icon: <FaHistory />, color: "bg-orange-500", trend: "Expected Friday" },
    { title: "Total Trips", value: "142", icon: <FaCheckCircle />, color: "bg-purple-600", trend: "Lifetime" },
  ];

  const transactions = [
    { id: "TXN-102", crop: "Organic Wheat", date: "Oct 24, 2025", amount: "12,500", status: "Paid" },
    { id: "TXN-101", crop: "Mustard Seeds", date: "Oct 22, 2025", amount: "5,400", status: "Processing" },
    { id: "TXN-099", crop: "Fresh Onions", date: "Oct 20, 2025", amount: "9,100", status: "Paid" },
    { id: "TXN-098", crop: "Potatoes", date: "Oct 18, 2025", amount: "7,200", status: "Paid" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-8 bg-slate-50 min-h-screen pb-24">
      
      {/* Header - Responsive Flex */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Earnings & Wallet</h2>
          <p className="text-slate-500 font-bold">Track your daily income and payouts</p>
        </div>
        
        <button className="flex items-center gap-2 bg-white border-2 border-slate-100 px-6 py-3 rounded-2xl font-bold text-slate-600 hover:border-blue-500 transition-all shadow-sm w-full sm:w-auto justify-center">
          <FaDownload /> Download Statement
        </button>
      </div>

      {/* Stats Grid - 1 col (Mobile), 2 col (Tablet), 4 col (Laptop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={`${item.color} p-4 rounded-2xl text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <span className="text-[10px] font-black px-2 py-1 bg-slate-50 text-slate-400 rounded-lg uppercase tracking-widest">{item.trend}</span>
            </div>
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-tighter mb-1">{item.title}</p>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics & Transactions - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Earnings Chart Placeholder - 2/3 width on Large screens */}
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-[3rem] border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black text-slate-800">Income Overview</h3>
            <select className="bg-slate-50 border-none rounded-xl px-4 py-2 font-bold text-sm outline-none focus:ring-2 ring-blue-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          
          {/* Chart Area */}
          <div className="h-64 w-full bg-slate-50 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-slate-200">
             <div className="flex items-end gap-2 sm:gap-4 h-32">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="w-4 sm:w-8 bg-blue-600 rounded-t-lg opacity-80 hover:opacity-100 transition-all cursor-pointer shadow-lg shadow-blue-100" />
                ))}
             </div>
             <p className="mt-6 text-slate-400 font-bold text-sm">Visual Analytics (MTD Performance)</p>
          </div>
        </div>

        {/* Recent Transactions - 1/3 width */}
        <div className="bg-white p-6 sm:p-8 rounded-[3rem] border border-slate-100 shadow-sm">
          <h3 className="text-xl font-black text-slate-800 mb-6">Recent Payments</h3>
          <div className="space-y-6">
            {transactions.map((txn, idx) => (
              <div key={idx} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold shadow-sm transition-colors ${txn.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'}`}>
                    {txn.status === 'Paid' ? <FaCheckCircle /> : <FaClock />}
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-800 group-hover:text-blue-600 transition-colors">{txn.crop}</p>
                    <p className="text-[10px] font-bold text-slate-400">{txn.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-slate-800">₹{txn.amount}</p>
                  <p className={`text-[9px] font-black uppercase tracking-widest ${txn.status === 'Paid' ? 'text-emerald-500' : 'text-orange-500'}`}>{txn.status}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-4 bg-slate-50 text-slate-500 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 hover:text-blue-600 transition-all">
            View All Transactions
          </button>
        </div>
      </div>

    </div>
  );
};

export default Earnings;