import React from "react";

const TitleSample = ({ title }) => {
	return (
		<div className="flex items-center w-[576px] relative h-14">
			<img
				className="absolute top-0 left-0 h-full w-3/4 md:w-full"
				src="/images/samples/title.webp"
				alt="sample"
			/>
			<h2 className="z-10 text-2xl text-grey font-bold px-6">{title}</h2>
		</div>
	);
};

export default TitleSample;
