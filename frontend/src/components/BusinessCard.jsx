import React from "react";
import { Link } from "react-router-dom";

const BusinessCard = ({ svgUrl, title, desc, path }) => {
	return (
		<div className="BusinessCard w-[350px] flex flex-col text-grey px-4">
			<img
				className="w-[50%] mx-auto "
				src={svgUrl}
				alt={`${title}.svg`}
			/>
			<h3 className="text-center font-bold text-3xl uppercase my-3">{title}</h3>
			<p className="text-justify text-sm">{desc}</p>
			<Link to={path} className="mt-4">More</Link>
		</div>
	);
};

export default BusinessCard;
