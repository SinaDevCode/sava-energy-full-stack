import React from "react";
import BusinessCard from "../components/BusinessCard";

const Business = () => {
	return (
		<div className="flex flex-wrap justify-center gap-5 ">
			<BusinessCard
				svgUrl="/svgs/services.svg"
				title="Services"
				desc="SAVA oilfield drilling fluid & cement materials are value-added materials which are customer-focused and solution-driven, respecting all specifications, environmental regulations and the strictest quality assurance criteria."
				path="/"
			/>
			<BusinessCard
				svgUrl="/svgs/products.svg"
				title="Products"
				desc="SAVA helps oil and gas operators increase efficiency and lower costs by designing and engineering drilling fluid systems and additives that accommodate a wide range of drilling environments and demanding applications-HPHT, deep water, shale gas, heavy oil, depleted wells, and more."
				path="/"
			/>
			<BusinessCard
				svgUrl="/svgs/lab-equipments.svg"
				title="Lab Equipments"
				desc="Our drilling fluids testing equipment sales line includes innovative designs such as the inline Rheometer, VG Meter, Retorts, Aging Cells, Roller Ovens, Mud Balances, Filter Presses, HT HP Filter Press, Marsh Funnel-Cup, Sand Content kit, Mixer, spare parts and all other instruments required to evaluate drilling fluid properties."
				path="/"
			/>
		</div>
	);
};

export default Business;
