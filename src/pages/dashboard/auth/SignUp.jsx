import { Card, Input, Spinner } from "@material-tailwind/react";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import loginIcon from "../../../assets/icon/user.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../../components/button/PrimaryButton";
import { post } from "../../../utils/fetchApi";
import { showErrorToast, showSuccessToast } from "../../../helper/ToastMessage";
// import { AuthContext } from "../../context/AuthProvider";
// import { showErrorToast, showSuccessToast } from "../../helper/ToastMessage";



const SignUpPage = () => {
	// const { user, fetchData } = useContext(AuthContext);
	const [passwordShown, setPasswordShown] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const location = useLocation();
	const from = location.state?.from?.pathname || "/dashboard";
	const navigate = useNavigate();

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await get("admin");
	// 		const hasUsers = response.data.payload.data;
	// 		if (hasUsers.length > 0 && user) {
	// 			navigate("/dashboard");
	// 		} else if (hasUsers.length > 0) {
	// 			navigate("/login");
	// 		}
	// 	};
	// 	fetchData();
	// });

	const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};

	const handleSignup = async (data) => {
		const signupData = {
			name: data.name,
			email: data.email,
			password: data.password,
		};
		try {
			setIsLoading(true);

			const response = await post("/admin/signup", signupData);
			// const userToken = response.data.payload?.token;
			// Cookies.set("token", userToken, {
			// 	expires: 30,
			// });
			// fetchData();

			showSuccessToast(response.data.message);
			setIsLoading(false);
			navigate(from, { replace: true });
		} catch (error) {
			// console.log(error);
			showErrorToast(error?.response?.data.message);
			setIsLoading(false);
		}
	};

	return (
		<div className="flex justify-center items-center bg-color-primary dark:bg-darkPrimary min-h-screen">
			<Card className="px-5 py-10 bg-color-secondary">
				<div className="mx-auto flex flex-col items-center gap-3">
					<p className="font-bold text-3xl text-color-header text-center">Admin Signup</p>
					<img src={loginIcon} alt="..." className="w-20 h-20" />
				</div>

				<form onSubmit={handleSubmit(handleSignup)} className="my-8 mb-2 w-80 max-w-screen-lg">
					<div className="mb-4 flex flex-col gap-6 text-start">
						<div>
							<Input
								size="lg"
								label="name"
								color="blue"
								type="text"
								{...register("name", {
									required: "Name is Required *",
								})}
								className="text-color-primary"
							/>
							{errors.name && <p className="text-red-500">{errors.name.message}</p>}
						</div>
						<div>
							<Input
								size="lg"
								label="email"
								color="blue"
								type="text"
								{...register("email", {
									required: "Email is Required *",
								})}
								className="text-color-primary"
							/>
							{errors.email && <p className="text-red-500">{errors.email.message}</p>}
						</div>
						<div className="relative">
							<Input
								size="lg"
								label="password"
								color="blue"
								type={passwordShown ? "text" : "password"}
								{...register("password", {
									required: "password is Required *",
								})}
								className="text-color-primary"
							/>
							<div className="absolute inset-y-0 right-0 pr-3 flex items-center h-12">
								<span onClick={togglePassword} className="cursor-pointer text-xl">
									{passwordShown === true ? (
										<PiEye className="text-color-primary" />
									) : (
										<PiEyeClosed className="text-color-primary" />
									)}
								</span>
							</div>
							{errors.password && <p className="text-red-500">{errors.password.message}</p>}
						</div>
					</div>

					<PrimaryButton buttonType={"submit"} disabled={isLoading} className="px-10 w-full">
						{isLoading ? <Spinner color="gray" className="mx-auto my-0.5 h-5 w-5" /> : "submit"}
					</PrimaryButton>
				</form>
			</Card>
		</div>
	);
};

export default SignUpPage;
