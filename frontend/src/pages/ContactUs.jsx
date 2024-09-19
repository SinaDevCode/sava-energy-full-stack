import React from "react";
import Title from "../components/Title";
import Map from "../layouts/Map";
import ContactInfo from "../components/ContactInfo";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsMailbox2Flag } from "react-icons/bs";

const ContactUs = () => {
	return (
		<>
			<Map />
			<div className="flex flex-col py-20 xs:px-6 sm:px-12 md:px-24 lg:px-36 gap-5 text-grey">
				<Title title={`Contact Us`} />
				<ContactInfo
					icon={<IoMail title="Email" />}
					href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@savaenergyco.com"
					target="_blank"
					text="Info@savaenergyco.com"
				/>
				<ContactInfo
					icon={<FaPhoneAlt title="Phone" />}
					href="tel:+98-937-4656-460"
					text="+98-937-4656-460"
				/>
				<ContactInfo
					icon={<FaLocationDot title="Location" />}
					href="https://www.google.com/maps/@34.997242,50.464352,307m/data=!3m1!1e3?hl=en&entry=ttu"
					target="_blank"
					text="NO. Ch43, Chemical Zone, Saveh Industried Town, Saveh, Markazi Provience"
				/>
				<ContactInfo
					icon={<BsMailbox2Flag title="Postal Code" />}
					text="3914171293"
				/>
			</div>
		</>
	);
};

export default ContactUs;
