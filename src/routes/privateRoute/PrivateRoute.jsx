/* eslint-disable react/prop-types */
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import LoadingSpinner from "../../components/LoadingSpinner";


const PrivateRoute = ({ children }) => {
	const { user, isLoading } = useContext(AuthContext);
	const location = useLocation();

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
