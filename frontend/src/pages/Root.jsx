import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
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
		className="xs:hidden md:flex"
	>
		{title}
	</NavLink>
));

const Root = () => {
	return (
		<>
			<div className="sticky top-0 left-0 w-full max-h-28 flex justify-between items-center z-10 bg-light">
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
					<div className="Navbar max-h-[52px] flex justify-between items-center relative pl-2 lg:pl-4 pr-4 lg:pr-8 bg-darkblue xs:min-w-[16rem] md:min-w-[44rem] lg:min-w-[54rem]">
						<ul className="flex">{menuLink}</ul>
						<FaBars
							size="18px"
							color="#fff"
							className="MenuButton cursor-pointer flex md:hidden m-4"
						/>
					</div>
				</div>
			</div>
			<div id="content">
				<Outlet />
			</div>
		</>
	);
};

export default Root;
