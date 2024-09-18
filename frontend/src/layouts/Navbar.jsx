import React from "react";
import { NavLink } from "react-router-dom";
import menuLinks from "../database/jsons/menu-links.json";
import "../styles/navbar.css";

const menuLink = menuLinks.titles.map((title, index) => (
	<NavLink
		to={menuLinks.paths[index]}
		key={title}
		className="xs:hidden md:flex"
	>
		{title}
	</NavLink>
));

const Navbar = () => {
	return <ul className="flex">{menuLink}</ul>;
};

export default Navbar;
