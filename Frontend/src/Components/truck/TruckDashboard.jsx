import React from 'react'
import { Outlet } from 'react-router'
import TSidebar from './TSidebar'

function TruckDashboard() {
    return (
        <div className="w-full h-[100vh] flex bg-white">
            {/* 1. Sidebar hamesha dikhega */}
            <TSidebar />
            <main className="flex-1 lg:ml-72 bg-slate-50 min-h-screen p-8">
                <Outlet />
            </main>
        </div>
    )
}

export default TruckDashboard