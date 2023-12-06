// BUILT_IN IMPORTS
import { createBrowserRouter } from "react-router-dom";
// EXTERNAL IMPORTS
import RootLayout from "./RootLayout";
import ErrorPage from "./ErrorPage";
import RootHomeLayout from "./RootHomeLayout";
import Home from "./Home";
import Movies from "./Movies";
import Series from "./Series";
import Bookmarked from "./Bookmarked";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: (
			<RootLayout>
				<ErrorPage />
			</RootLayout>
		),
		children: [
			{
				path: "/",
				element: <RootHomeLayout />,
				children: [
					{
						path: "/home",
						element: <Home />,
					},
					{
						path: "/movies",
						element: <Movies />,
					},
					{
						path: "/series",
						element: <Series />,
					},
					{
						path: "/bookmarked",
						element: <Bookmarked />,
					},
				],
			},
		],
	},
]);
