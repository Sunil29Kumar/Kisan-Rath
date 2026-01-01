import { Routes, Route } from "react-router-dom"; // react-router-dom use karein
import PublicDashboard from "./pages/PublicDashboard";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import FarmerDashboard from "./Components/farmer/FarmerDashboard";
import MyBookings from "./Components/farmer/MyBookings";
import History from "./Components/farmer/History";
import DashboardHome from "./Components/farmer/DashboardHome.JSX";
import LiveTracking from "./Components/farmer/LiveTracking";
import NewBooking from "./Components/farmer/NewBooking";
import TruckDashboard from "./Components/truck/TruckDashboard";
import TruckDashboardHome from "./Components/truck/TruckDashboardHome";
import AvailableLoads from "./Components/truck/AvailableLoads";
import Earnings from "./Components/truck/Earnings";
import TripHistory from "./Components/truck/TripHistory";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicDashboard />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Farmer Dashboard Routes (Nested) */}
      <Route path="/farmer" element={<FarmerDashboard />}>
        <Route index element={<DashboardHome />} /> {/* Ye /farmer par dikhega */}
        <Route path="new-booking" element={<NewBooking />} />
        <Route path="bookings" element={<MyBookings />} />
        <Route path="tracking" element={<LiveTracking />} />
        <Route path="history" element={<History />} />
      </Route>

      <Route path="/truck" element={<TruckDashboard />}>
        <Route index element={<TruckDashboardHome />} />
        <Route path="loads" element={<AvailableLoads />} />
        <Route path="earnings" element={<Earnings />} />
        <Route path="history" element={<TripHistory />} />

      </Route>

    </Routes>
  );
}

export default App;