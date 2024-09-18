import React from "react";

const Title = ({ title }) => {
	return (
		<div className="flex items-center w-[576px]">
			<h2 className="text-3xl text-grey font-bold">{title}</h2>
		</div>
	);
};

export default Title;
