import { useContext, useState } from "react";
import {
  FaPhoneAlt,
  FaLock,
  FaArrowRight,
  FaSignInAlt
} from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

  const { login } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Login Data:", data);
    login(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Link to="/" className="absolute top-6 left-6 text-green-600 font-bold cursor-pointer hover:underline">Back to Home</Link>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        {/* Icon & Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
            <FaSignInAlt size={28} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-400 text-sm">Login to manage your bookings</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Mobile Input */}
          <div className="relative flex items-center">
            <FaPhoneAlt className="absolute left-4 text-gray-400" size={14} />
            <input
              name="mobile"
              type="tel"
              required
              placeholder="Mobile Number"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="relative flex items-center">
            <FaLock className="absolute left-4 text-gray-400" />
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all outline-none"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <span className="text-xs font-semibold text-green-600 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95 mt-2"
          >
            Login <FaArrowRight />
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-gray-400 mt-8 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-600 font-bold cursor-pointer hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;