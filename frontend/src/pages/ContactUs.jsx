import React from "react";
import Map from "../layouts/Map";
import { IconContext } from "react-icons";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsMailbox2Flag } from "react-icons/bs";

const ContactUs = () => {
	return (
		<>
			<div className="relative flex items-center w-[576px]">
				<p className="text-xl text-white font-semibold absolute top-1/2 left-5 -translate-y-1/2">
					Contact Us
				</p>
				<img
					className="w-full"
					src="images/webp/title.webp"
					loading="eager"
					alt=""
				/>
			</div>
			<div className="flex flex-col p-20 gap-5 text-grey">
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
				<IconContext.Provider value={{ size: 20 }}>
					<span className="flex items-center gap-3">
						<IoMail title="Email" />
						{/* <p className="font-bold">Email: &nbsp;</p> */}
						<a
							href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@savaenergyco.com"
							target="_blank"
						>
							Info@savaenergyco.com
						</a>
					</span>
					<span className="flex items-center gap-3">
						{/* <p className="font-bold">Tel: &nbsp;</p> */}
						<FaPhoneAlt title="Phone" />
						<a href="tel:+98-937-4656-460">+98-937-4656-460</a>
					</span>
					<span className="flex items-center gap-3">
						{/* <p className="font-bold">Address: &nbsp;</p> */}
						<FaLocationDot title="Location" />
						<a
							href="https://www.google.com/maps/@34.997242,50.464352,307m/data=!3m1!1e3?hl=en&entry=ttu"
							target="_blank"
						>
							NO. Ch43, Chemical Zone, Saveh Industried Town,
							Saveh, Markazi Provience
						</a>
					</span>
					<span className="flex items-center gap-3">
						<BsMailbox2Flag title="Postal Code" />
						{/* <p className="font-bold">Postal Code: &nbsp;</p> */}
						<a type="Postal">3914171293</a>
					</span>
				</IconContext.Provider>
			</div>
		</>
	);
};

export default ContactUs;
