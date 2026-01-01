import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; // Jo humne abhi banaya tha

const FarmerDashboard = () => {
    return (
        <div className="w-full h-[100vh] flex bg-white">
            {/* 1. Sidebar hamesha dikhega */}
            <Sidebar />
            <main className="flex-1 lg:ml-72 bg-slate-50 min-h-screen p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default FarmerDashboard;