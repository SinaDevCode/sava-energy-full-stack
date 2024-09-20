import React from "react";
import LabItems from "../database/jsons/lab-equipments.json";

const equipmentItem = LabItems.map((LabItem) => (
	<div
		className="flex flex-col gap-4 max-w-[350px] lg:max-w-[320px] w-full"
		key={LabItem.id}
	>
		<img
			src={LabItem.imgUrl}
			className="rounded-3xl w-full"
			alt={LabItem.name}
			loading="lazy"
		/>
		<p className="text-center font-bold text-grey">{LabItem.name}</p>
	</div>
));

const LabEquipments = () => {
	return (
		<div className="flex flex-wrap justify-center gap-x-4 gap-y-8 py-16">
			{equipmentItem}
		</div>
	);
};

export default LabEquipments;
