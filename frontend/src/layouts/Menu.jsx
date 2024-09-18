import React from "react";
import { NavLink } from "react-router-dom";
import menuLinks from "../database/jsons/menuLinks.json";
import "../styles/menu.css";

const menuLink = menuLinks.titles.map((title, index) => (
	<NavLink
		to={menuLinks.paths[index]}
		key={title}
	>
		{title}
	</NavLink>
));

const Menu = ({ left }) => {
	return (
		<ul
			className={`Menu fixed top-0 ${left} hidden flex-col w-[325px] h-screen py-4 bg-darkblue text-white border-r-2 border-gold transition-all`}
		>
			{menuLink}
		</ul>
	);
};

export default Menu;
