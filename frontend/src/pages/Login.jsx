import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { auth, isValid } from "../utils/utils";
import { Alert } from "antd";

export default function Login() {
	const [redirect, setRedirect] = useState(false);
	const [fail, setFail] = useState(false);
	const [show, setShow] = useState(false);
	const [userValue, setUserValue] = useState({
		username: "",
		password: "",
	});

	const validation = () => {
		setRedirect(auth(userValue));
		setFail(isValid(userValue));
	};

	return (
		<div className="relative p-4 flex justify-center items-center w-screen h-screen md:gap-4">
			<Link to="/">
				<IoIosClose
					size={42}
					className="absolute top-4 right-4 cursor-pointer"
				/>
			</Link>
			<img
				src="/images/login/login.jpg"
				alt="Login page image"
				className="w-2/5 h-full rounded-lg object-cover object-center hidden md:flex"
			/>

			<div className="w-3/5 h-full flex flex-col justify-center items-center md:border-l-2 gap-5 border-darkblue">
				{redirect ? <Navigate to={`${redirect.pathname}`} /> : null}
				{fail ? (
					<Alert
						message="Invalid username or password"
						type="error"
						showIcon
						className="w-80 md:w-96"
					/>
				) : null}
				<h2 className="text-3xl font-bold text-cyan">Login</h2>
				<span className="relative w-80 md:w-96">
					<input
						onChange={(e) => {
							// Use Spread to save the previous data and update to the new one
							setUserValue({
								...userValue,
								username: e.target.value,
							});
						}}
						type="text"
						id="Username"
						className="w-full p-4 border border-cyan outline-gold text-grey rounded-md"
						autoComplete="false"
						maxLength={25}
					/>
					<label
						htmlFor="Username"
						className="absolute -top-2.5 left-3 text-sm text-grey bg-white px-2 font-medium pointer-events-none select-none"
					>
						Username
					</label>
				</span>
				<span className="relative w-80 md:w-96">
					<input
						onChange={(e) => {
							// Use Spread to save the previous data and update to the new one
							setUserValue({
								...userValue,
								password: e.target.value,
							});
						}}
						type={show ? "text" : "password"}
						id="Password"
						className="w-full p-4 border border-cyan outline-gold text-grey rounded-md"
						autoComplete="false"
						maxLength={25}
					/>
					<label
						htmlFor="Password"
						className="absolute -top-2.5 left-3 text-sm text-grey bg-white px-2 font-medium pointer-events-none select-none"
					>
						Password
					</label>
					<span
						className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
						onClick={() => {
							setShow(!show);
						}}
					>
						{show ? (
							<FiEye
								size={20}
								className="text-grey "
							/>
						) : (
							<FiEyeOff
								size={20}
								className="text-grey"
							/>
						)}
					</span>
				</span>
				<button
					className="bg-cyan w-80 md:w-96 p-3 rounded-md font-bold text-white text-sm select-none"
					onClick={validation}
				>
					Sign in
				</button>
			</div>
		</div>
	);
}
