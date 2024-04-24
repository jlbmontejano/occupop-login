import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/LogIn";
import NeedHelp from "../pages/NeedHelp";
import ForgotPassword from "../pages/ForgotPassword";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <LogIn /> },
			{ path: "/needhelp", element: <NeedHelp /> },
			{ path: "/forgotpassword", element: <ForgotPassword /> },
		],
	},
]);

export default router;
