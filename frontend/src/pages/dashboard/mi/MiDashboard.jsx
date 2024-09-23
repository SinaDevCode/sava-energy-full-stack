import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const MiDashboard = () => {
	const [isLogin, setIsLogin] = useState(true);

	useEffect(() => {
		let login = sessionStorage.getItem("pathname");
		setIsLogin(login);
	}, []);

	return isLogin ? <h1>login</h1> : <Navigate to="/Login" />;
};

export default MiDashboard;
