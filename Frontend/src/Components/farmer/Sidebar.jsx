import { useContext, useState, useRef, useEffect } from "react";
import {
  FaTruck, FaHistory, FaMapMarkedAlt,
  FaGlobe, FaSignOutAlt, FaBars, FaTimes, FaUserAlt, FaChevronUp
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { translations } from "../utils/translations.js";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const { lang, setLang } = useContext(GlobalContext);

  const t = translations[lang].sidebar;

  // Dropdown ke bahar click karne par close karne ka logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: 'en', label: 'English', sub: 'Default' },
    { code: 'hi', label: 'हिन्दी', sub: 'Hindi' },
    { code: 'hg', label: 'Hinglish', sub: 'Mix' }
  ];

  const menuItems = [
    { name: t.dashboard, icon: <FaHistory />, path: "/farmer" },
    { name: t.newBooking, icon: <FaTruck />, path: "/farmer/new-booking" },
    { name: t.myBookings, icon: <FaTruck />, path: "/farmer/bookings" },
    { name: t.liveTracking, icon: <FaMapMarkedAlt />, path: "/farmer/tracking" },
    { name: t.history, icon: <FaHistory />, path: "/farmer/history" },
  ];

  const NavItem = ({ item }) => {
    const isActive = location.pathname === item.path;
    return (
      <Link
        to={item.path}
        onClick={() => setIsOpen(false)}
        className={`flex items-center gap-4 px-5 py-3 rounded-2xl font-bold transition-all mb-2 ${isActive
          ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
          : "text-slate-500 hover:bg-emerald-50 hover:text-emerald-600"
          }`}
      >
        <span className="text-xl">{item.icon}</span>
        <span>{item.name}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-[60]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-emerald-600 text-white rounded-xl shadow-lg"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[50] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`fixed top-0 left-0 h-full bg-white border-r border-emerald-100 z-[55] transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0 w-72" : "-translate-x-full w-72 lg:translate-x-0 lg:w-72"}`}
      >
        <div className="p-5 flex flex-col justify-between   h-full">

          <div className="  ">

            {/* logo   */}
            <div className="flex items-center gap-3 mb-12">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <FaTruck className="text-white text-xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black text-slate-800 leading-none">Farm Truck</span>
                <span className="text-[10px] font-bold text-emerald-600 tracking-widest uppercase">Connect</span>
              </div>
            </div>


            <nav className="flex-1">
              {menuItems.map((item) => (
                <NavItem key={item.path} item={item} />
              ))}
            </nav>

          </div>


          {/* Bottom Actions Section */}
          <div className="  border-t border-slate-100 space-y-3 ">

            {/* Custom Language Selection Button */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl font-bold transition-all border ${showLangMenu ? "border-emerald-600 bg-emerald-50 text-emerald-600" : "border-slate-100 text-slate-500 hover:bg-slate-50"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <FaGlobe className="text-xl" />
                  <span className="text-sm">{languages.find(l => l.code === lang)?.label}</span>
                </div>
                <FaChevronUp className={`transition-transform duration-300 ${showLangMenu ? "rotate-0" : "rotate-180"}`} />
              </button>

              {/* Language Dropdown Menu */}
              {showLangMenu && (
                <div className="absolute bottom-full left-0 w-full mb-2 bg-white border border-slate-100 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full flex flex-col items-start px-6 py-3 transition-all ${lang === l.code ? "bg-emerald-600 text-white" : "hover:bg-emerald-50 text-slate-600"
                        }`}
                    >
                      <span className="font-bold text-sm">{l.label}</span>
                      <span className={`text-[10px] uppercase ${lang === l.code ? "text-emerald-100" : "text-slate-400"}`}>
                        {l.sub}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* user profile  */}
            <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-2xl ">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <FaUserAlt />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-black text-slate-800 truncate">Veda Ram</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase">{t.role}</p>
              </div>
            </div>
            {/* 
            <Link
              to="/login"
              className="flex items-center gap-4 px-5 py-3 text-red-500 font-bold hover:bg-red-50 rounded-2xl transition-all"
            >
              <FaSignOutAlt className="text-xl" /> {t.logout}
            </Link> */}
          </div>

        </div>
      </div>
    </>
  );
};

export default Sidebar;