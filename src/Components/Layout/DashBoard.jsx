import { Outlet } from "react-router-dom";
import SideNav from "../Pages/DashBoard/SideNav/SideNav";


const DashBoard = () => {
    return (
        <div className="flex">
            <div className="w-[20%] min-h-screen border-r bg-slate-50 py-10 px-5">
            <div className="text-center mb-12">
                <h1 className="lg:text-2xl font-bold">Bistro Boss</h1>
                <p className="lg:text-lg font-medium lg:tracking-[4px] text-orange-600">
                  Restaurant
                </p>
              </div>
                <SideNav />
            </div>
            <div className="container mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;