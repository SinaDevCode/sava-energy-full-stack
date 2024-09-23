// Import Main Page Files Here
import Root from "../pages/Root";
import Home from "../pages/Home";
import Products from "../pages/Products";
import LabEquipments from "../pages/LabEquipments";
import ContactUs from "../pages/ContactUs";
// Import Login Page
import Login from "../pages/Login";
// Import Mi Pages Here
import MiDashboard from "../pages/dashboard/mi/MiDashboard";

// Import 404 Error Handler Page
import NotFound from "../pages/NotFound";

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
		path: "/Mi",
		element: <MiDashboard />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];

export default routes;
