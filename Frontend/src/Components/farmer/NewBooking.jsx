import React, { useContext, useState } from 'react';
import { FaWeightHanging, FaMapMarkerAlt, FaCalendarAlt, FaTruck, FaLeaf, FaRupeeSign } from 'react-icons/fa';
import { translations } from "../utils/translations"; // Path check karein
import { GlobalContext } from '../../context/GlobalContext';

function NewBooking() {

    const { lang } = useContext(GlobalContext);

    const t = translations[lang].newBooking;

    return (
        <div className="space-y-8 animate-in slide-in-from-top duration-700 pb-10">

            {/* Header */}
            <div>
                <h2 className="text-3xl font-black text-slate-800">{t.newBookingTitle} 🚛</h2>
                <p className="text-slate-500 font-medium">{t.newBookingSub}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left: Booking Form */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Crop Type */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-600 flex items-center gap-2 ml-2">
                                <FaLeaf className="text-emerald-500" /> {t.cropLabel}
                            </label>
                            <select className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-bold text-slate-700">
                                <option>Wheat (Gehu)</option>
                                <option>Mustard (Sarson)</option>
                                <option>Pearl Millet (Bajra)</option>
                                <option>Chickpea (Chana)</option>
                            </select>
                        </div>

                        {/* Weight */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-600 flex items-center gap-2 ml-2">
                                <FaWeightHanging className="text-emerald-500" /> {t.weightLabel}
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. 500kg or 5 Tons"
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                            />
                        </div>

                        {/* Pickup Location */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-600 flex items-center gap-2 ml-2">
                                <FaMapMarkerAlt className="text-red-500" /> {t.pickupLabel}
                            </label>
                            <input
                                type="text"
                                placeholder="Village or Farm name"
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                            />
                        </div>

                        {/* Destination Mandi */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-600 flex items-center gap-2 ml-2">
                                <FaMapMarkerAlt className="text-emerald-600" /> {t.mandiLabel}
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Jaipur Mandi"
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                            />
                        </div>

                        {/* Date */}
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-bold text-slate-600 flex items-center gap-2 ml-2">
                                <FaCalendarAlt className="text-blue-500" /> {t.dateLabel}
                            </label>
                            <input
                                type="date"
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 font-bold text-slate-600"
                            />
                        </div>
                    </div>

                    <button className="w-full py-5 bg-emerald-600 text-white rounded-[1.5rem] font-black text-lg shadow-xl shadow-emerald-100 hover:bg-emerald-700 hover:-translate-y-1 transition-all active:scale-95">
                        {t.findTruckBtn}
                    </button>
                </div>

                {/* Right: Info & Pricing Estimate */}
                <div className="space-y-6">
                    <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <FaTruck size={100} />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{t.estFare}</h3>
                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-slate-400 font-medium">Base Fare:</span>
                                <span className="font-bold">₹1,200</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-slate-400 font-medium">Distance (50km):</span>
                                <span className="font-bold">₹800</span>
                            </div>
                            <div className="flex justify-between pt-2">
                                <span className="text-emerald-400 font-black text-lg">{t.totalAmt}:</span>
                                <span className="text-2xl font-black text-white">₹2,000*</span>
                            </div>
                            <p className="text-[10px] text-slate-400 italic font-medium">{t.fareNote}</p>
                        </div>
                    </div>

                    {/* Trust Badge */}
                    <div className="bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100 flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                            <FaRupeeSign size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-black text-emerald-800 uppercase tracking-tight">{t.trustTitle}</p>
                            <p className="text-[10px] text-emerald-600 font-bold">{t.trustSub}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NewBooking;