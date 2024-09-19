import React from "react";
import Title from "../components/Title";

const About = () => {
	return (
		<div className="flex flex-col py-20 xs:px-6 sm:px-12 md:px-24 lg:px-36 gap-5 text-grey">
			<Title title={`About Us`} />
			<p>
				<span className="font-semibold">SAVA ENERGY&nbsp;</span>
				began operations on 2021. While the company is new to the
				industry the staff is comprised of some of the most seasoned
				industry.
			</p>
			<p>
				SAVA Energy goal is to ensure your success, and to help you
				become better equipped to meet the future. Therefore, the focus
				at SAVA Energy has been on rigorous internal R&D to develop cost
				effective environmentally friendly processes for producing
				technically complex products of the highest quality
			</p>
			<p>
				SAVA continuously works to improve our products. Secured access
				to high-grade raw materials and significant investments in
				energy recovery are ways SAVA works to achieve this. We believe
				that safe and environmentally responsible production is the only
				way forward and that together we can develop solutions to many
				of the world’s challenges.
			</p>
			<p>
				Our <span className="font-semibold">R&D team&nbsp;</span>
				consist of several graduate chemical engineers and some
				experience oil field persons that have worked many years to
				optimize properties in all kind of different downhole
				conditions, fine tuning setting times, viscosity, density and
				other important parameters. Checking compatibilities with
				various fluids.
			</p>
		</div>
	);
};

export default About;
