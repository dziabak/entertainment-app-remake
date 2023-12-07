// BUILT_IN IMPORTS
import { createBrowserRouter } from "react-router-dom";
// EXTERNAL IMPORTS
import RootLayout from "./RootLayout";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Movies from "./Movies";
import Series from "./Series";
import Bookmarked from "./Bookmarked";
import MediaContentDetails from "./MediaContentDetails";

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
				index: true,
				element: <Home />,
			},
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
			{ path: "/:mediaContentId", element: <MediaContentDetails /> },
		],
	},
]);
