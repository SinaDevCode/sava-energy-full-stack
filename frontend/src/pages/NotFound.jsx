import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/notFound.css";

export default function ErrorPage() {
	return (
		<div
			id="error-page"
			className="p-8 w-full h-screen bg-light flex flex-col justify-center items-start text-grey"
		>
			<h2 className="text-9xl font-bold">404</h2>
			<h3 className="text-6xl font-bold">
				Oops!, this page <br /> isn't available
			</h3>
			<p className="font-medium mt-2 mb-10">
				The page you were looking for doesn't exist or has been moved
			</p>
			<Link
				to="/"
				className="Button"
			>
				Back to Home Page
			</Link>
		</div>
	);
}
