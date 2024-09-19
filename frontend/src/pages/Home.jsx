import React from "react";
import About from "../layouts/About";

import Typewriter from "typewriter-effect";

const Home = () => {
	return (
		<>
			<About />

			<div className="relative w-full h-[75vh] flex justify-center items-center">
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							// .pauseFor(2500)
							.typeString(
								"A simple yet powerful native javascript"
							)
							.pauseFor(300)
							.deleteChars(10)
							.typeString(
								"<strong>JS</strong> plugin for a cool typewriter effect and "
							)
							.typeString(
								'<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
							)
							.pauseFor(1000)
							.start();
					}}
					options={{ wrapperClassName: "text-3xl" }}
				/>
			</div>
		</>
	);
};

export default Home;
