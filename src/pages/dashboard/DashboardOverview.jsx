// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthProvider";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

import shieldIcon from "../../assets/icon/shield.png";
import LogoutButton from "../../components/button/LogoutButton";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import PrimaryButton from "../../components/button/PrimaryButton";
// import PrimaryButton from "../../components/Button/PrimaryButton";
// import LogoutButton from "../../components/Button/LogoutButton";

const DashboardOverview = () => {
	const { user } = useContext(AuthContext);
	const { avatar, name } = user;
	return (
		<div className="min-h-screen">
			<div className="flex gap-5 items-center">
				{/* <img src={avatar} className="w-24 rounded-full" /> */}
				<div>
					<div className="flex gap-1 items-center">
						<img className="w-5 h-5" src={shieldIcon} />
						<Typography variant="paragraph" className=" text-color-primary text-md md:text-xl font-bold ">
							Admin
						</Typography>
					</div>
					<Typography variant="h5" className="mb-2 text-color-header text-3xl md:text-4xl  font-bold">
						{name}
					</Typography>
				</div>
			</div>
			<div className="py-5 flex flex-col md:flex-row gap-5 ">
				<Link to="/dashboard/profile-update" className="w-[196px]">
					<PrimaryButton className="w-full">Update Profile</PrimaryButton>
				</Link>
				<Link to="/dashboard/password-update" className="w-[196px]">
					<PrimaryButton className="w-full">Update Paswsword</PrimaryButton>
				</Link>
			</div>
			<div className="lg: gap-3 w-full flex flex-col">
				{/* <Link to="/" className="w-[196px]">
					<PrimaryButton className="px-10 py-2.5 w-full">Home</PrimaryButton>
				</Link> */}
				<div className="w-[196px]">
					<div className="w-full">
						<LogoutButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardOverview;
