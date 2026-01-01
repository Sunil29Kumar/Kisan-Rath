import { useContext, useState } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTruck,
  FaArrowRight,
  FaUserTie
} from "react-icons/fa";
import { Link, redirect } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {

  const { register } = useContext(AuthContext)


  const [role, setRole] = useState("farmer");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log({ role, ...data });
    try {
      const result = await register({ role, ...data });
      console.log("Registration successful:", result);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Link to="/" className="absolute top-6 left-6 text-green-600 font-bold cursor-pointer hover:underline">Back to Home</Link>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-400 text-sm">Join the logistics network</p>
        </div>

        {/* Minimalist Role Selector */}
        <div className="flex justify-center gap-6 mb-10  ">
          <div className="flex flex-col items-center cursor-pointer ">
            <button
              type="button"
              onClick={() => setRole("farmer")}
              className={`p-4 rounded-full transition-all duration-300 cursor-pointer ${role === "farmer"
                ? "bg-green-600 text-white shadow-lg scale-110"
                : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
            >
              <FaUser size={24} />
            </button>
            <span className={`text-xs mt-2 font-semibold ${role === "farmer" ? "text-green-600" : "text-gray-400"}`}>
              FARMER
            </span>
          </div>

          <div className="flex flex-col items-center cursor-pointer ">
            <button
              type="button"
              onClick={() => setRole("truck")}
              className={`p-4 rounded-full transition-all duration-300 cursor-pointer ${role === "truck"
                ? "bg-green-600 text-white shadow-lg scale-110"
                : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
            >
              <FaTruck size={24} />
            </button>
            <span className={`text-xs mt-2 font-semibold ${role === "truck" ? "text-green-600" : "text-gray-400"}`}>
              OWNER
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="relative flex items-center">
            <FaUserTie className="absolute left-4 text-gray-400" />
            <input
              name="name"
              type="text"
              required
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none"
            />
          </div>

          {/* Mobile Input */}
          <div className="relative flex items-center">
            <FaPhoneAlt className="absolute left-4 text-gray-400" size={14} />
            <input
              name="mobile"
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none"
            />
          </div>

          {/* Location Input */}
          <div className="relative flex items-center">
            <FaMapMarkerAlt className="absolute left-4 text-gray-400" />
            <input
              name="location"
              type="text"
              required
              placeholder="Village / City"
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none"
            />
          </div>

          {/* Conditional Truck Number */}
          {role === "truck" && (
            <div className="relative flex items-center animate-in fade-in zoom-in duration-200">
              <FaTruck className="absolute left-4 text-gray-400" />
              <input
                name="truckNumber"
                type="text"
                required
                placeholder="Vehicle Number (e.g. RJ14...)"
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none uppercase"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95 mt-4"
          >
            Register <FaArrowRight />
          </button>
        </form>

        <p className="text-center text-gray-400 mt-8 text-sm">
          Have an account? <Link to="/login" className="text-green-600 font-bold cursor-pointer">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;