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
			<div className="flex flex-col p-20 gap-5 text-grey">
				<Title title={`Contact Us`} />
				<p>
					<span className="font-semibold">SAVA ENERGY&nbsp;</span>
					began operations on 2021. While the company is new to the
					industry the staff is comprised of some of the most seasoned
					industry.
				</p>
				<p>
					SAVA Energy goal is to ensure your success, and to help you
					become better equipped to meet the future. Therefore, the
					focus at SAVA Energy has been on rigorous internal R&D to
					develop cost effective environmentally friendly processes
					for producing technically complex products of the highest
					quality
				</p>
				<p>
					SAVA continuously works to improve our products. Secured
					access to high-grade raw materials and significant
					investments in energy recovery are ways SAVA works to
					achieve this. We believe that safe and environmentally
					responsible production is the only way forward and that
					together we can develop solutions to many of the world’s
					challenges.
				</p>
				<p>
					Our <span className="font-semibold">R&D team&nbsp;</span>
					consist of several graduate chemical engineers and some
					experience oil field persons that have worked many years to
					optimize properties in all kind of different downhole
					conditions, fine tuning setting times, viscosity, density
					and other important parameters. Checking compatibilities
					with various fluids.
				</p>
			</div>

			<Map />

			<div className="flex flex-col p-20 gap-5 text-grey">
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
