import React from "react";
import { IconContext } from "react-icons";

const ContactInfo = ({ icon, href = null, target = null, text }) => {
	return (
		<IconContext.Provider value={{ size: 20 }}>
			<span className="flex items-center gap-3">
				{icon}
				<a
					href={href}
					target={target}
				>
					{text}
				</a>
			</span>
		</IconContext.Provider>
	);
};

export default ContactInfo;
