// Import Main Page Files Here
import Root from "../pages/Root";
import Home from "../pages/Home";
import Products from "../pages/Products";
import LabEquipments from "../pages/LabEquipments";
import ContactUs from "../pages/ContactUs";
// Import Login Page
import Login from "../pages/Login";
// Import 404 Error Handler Page
import NotFound from "../pages/NotFound";

import Panel from "../pages/panel/panel";

const routes = [
	{
		path: "/",
		element: <Root />,
		children: [
			{
				element: <Home />,
				index: true,
			},

			{
				path: "Products",
				element: <Products />,
			},
			{
				path: "LabEquipments",
				element: <LabEquipments />,
			},
			{
				path: "ContactUs",
				element: <ContactUs />,
			},
		],
	},
	{
		path: "/Login",
		element: <Login />,
	},
	{
		path: "/panel",
		element: <Panel />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];

export default routes;
