import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import LandingPage from "../../pages/landingPage";
import { Button } from "@material-tailwind/react";
import { PiSmileySadThin } from "react-icons/pi";
import Main from "../../layouts/main";
// import MagazinPage2 from "../../pages/magazinPage/magazinPage2";
import MagazinPage from "../../pages/magazinPage/magazinPage";

const MainRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* ---------------------------public route--------------------- */}
				<Route element={<Main />}>
					<Route path="/" element={<LandingPage />} />
					<Route path=":slug" element={<MagazinPage />} />
					{/* <Route path=":slug" element={<MagazinPage2 />} /> */}
				</Route>

				<Route
					path="*"
					element={
						<div className="flex flex-col gap-3 justify-center items-center min-h-screen">
							<p className="text-center text-color-primary font-bold text-3xl">
								Page not found
							</p>
							<PiSmileySadThin className="text-color-primary w-12 h-12" />
							<Link to="/">
								<Button>Home</Button>
							</Link>
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;
