// Import Main Page Files Here
import Root from "../pages/Root";
import LabEquipments from "../pages/LabEquipments";
import ContactUs from "../pages/ContactUs";

// Import 404 Error Handler Page
import NotFound from "../pages/NotFound";

const routes = [
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "LabEquipments",
				element: <LabEquipments />
			},
			{
				path: "ContactUs",
				element: <ContactUs />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
];

export default routes;
