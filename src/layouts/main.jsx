import { Outlet } from "react-router-dom";


const Main = () => {
	return (
		<div className="w-full">
			<div className="w-full h-full">
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
