import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import "../styles/root.css";

const menuLinks = {
	titles: [
		"Home",
		"About",
		"Services",
		"Products",
		"Lab Equipments",
		"Projects",
		"Contact Us",
	],
	paths: [
		"/",
		"/About",
		"/Services",
		"/Products",
		"/LabEquipments",
		"/Projects",
		"/ContactUs",
	],
};

const menuLink = menuLinks.titles.map((title, index) => (
	<NavLink
		to={menuLinks.paths[index]}
		key={title}
	>
		{title}
	</NavLink>
));

const Root = () => {
	return (
		<div className="sticky top-0 left-0 w-full max-h-28 flex justify-between items-center z-10 bg-light">
			<video
				className="w-44"
				muted
				autoPlay
			>
				<source src="videos/logoMotion/sava-energy-logo-motion-500x200.webm" />
				Your browser doesn't support video
			</video>
			<div className="h-full w-3/4 flex flex-col justify-between items-end gap-2">
				<Link
					to="/Login"
					className="w-32 m-2 py-2 text-white text-sm font-bold text-center rounded-lg transition bg-gold hover:bg-cyan"
				>
					Login
				</Link>
				<div className="Navbar flex justify-between items-center relative pl-4 pr-8 bg-darkblue min-w-[54rem]">
					<ul className="flex">{menuLink}</ul>
					<FaBars
						size="18px"
						color="#fff"
						className="cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Root;
