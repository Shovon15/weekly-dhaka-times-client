// import { useContext } from "react";
// import { DashboardContext } from "../context/DashboardContext";

import { Outlet } from "react-router-dom";
import DashboardDrawer from "../components/dashboard/dashboardHeader/DashboardDrawer";
import DashboardNav from "../components/dashboard/dashboardHeader/DashboardNav";
import AdminSidebar from "../components/dashboard/sidebar/AdminSidebar";
import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";


const DashboardLayout = () => {
	const { isSidebarOpen } = useContext(DashboardContext);

	return (
		<div className="bg-[#324b91]">
			<DashboardDrawer />
			<DashboardNav />
			<div className="flex">
				<AdminSidebar />
				<div
					className={`${isSidebarOpen ? "w-full lg:ml-72" : "w-full"
						} min-h-screen p-5 transition-all duration-300 ease-in-out dark:bg-bgSecondary`}
				>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
