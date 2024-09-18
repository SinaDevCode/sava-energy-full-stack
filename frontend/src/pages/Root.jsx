import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Navbar from "../layouts/Navbar";
import Menu from "../layouts/Menu";
import "../styles/media.css";

const Root = () => {
	const [isOpen, setIsOpen] = useState(false);

	let location = useLocation();

	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	return (
		<>
			<div className="sticky top-0 left-0 w-full max-h-28 flex justify-between items-center z-50 bg-light">
				<video
					className="w-44"
					muted
					autoPlay
				>
					<source src="videos/logoMotion/sava-energy-logo-motion-500x200.webm" />
					Your browser doesn't support video
				</video>
				<div className="h-full flex flex-col justify-between items-end gap-2">
					<Link
						to="/Login"
						className="w-32 m-2 py-2 text-white text-sm font-bold text-center rounded-lg transition bg-gold hover:bg-cyan"
					>
						Login
					</Link>

					<div className="Navbar max-h-[52px] flex justify-between items-center relative pl-2 lg:pl-4 pr-4 lg:pr-8 bg-darkblue min-w-[8rem] xs:min-w-[11rem] md:min-w-[44rem] lg:min-w-[54rem]">
						<Navbar />
						{isOpen ? (
							<IoClose
								size="18px"
								className="MenuButton text-white cursor-pointer flex md:hidden m-4"
								onClick={() => setIsOpen(!isOpen)}
							/>
						) : (
							<FaBars
								size="18px"
								className="MenuButton text-white cursor-pointer flex md:hidden m-4"
								onClick={() => setIsOpen(!isOpen)}
							/>
						)}
					</div>
				</div>
				{isOpen ? (
					<Menu left="left-0" />
				) : (
					<Menu left="-left-[350px]" />
				)}
			</div>

			<div id="content">
				<Outlet />
			</div>

			<div className="flex items-center justify-center bg-darkblue border-t-[3px] border-gold">
				<p className="py-4 text-white text-sm font-medium">
					Copyright &copy; SAVA Energy 2021
				</p>
			</div>
		</>
	);
};

export default Root;
