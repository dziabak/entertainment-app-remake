// BUILT-IN IMPORTS
import { createBrowserRouter } from "react-router-dom";
// INTERNAL IMPORTS
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
				children: [
					{ path: "/home/:mediaContentId", element: <MediaContentDetails /> },
				],
			},
			{
				path: "/movies",
				element: <Movies />,
				children: [
					{ path: "/movies/:mediaContentId", element: <MediaContentDetails /> },
				],
			},
			{
				path: "/series",
				element: <Series />,
				children: [
					{ path: "/series/:mediaContentId", element: <MediaContentDetails /> },
				],
			},
			{
				path: "/bookmarked",
				element: <Bookmarked />,
				children: [
					{
						path: "/bookmarked/:mediaContentId",
						element: <MediaContentDetails />,
					},
				],
			},
		],
	},
]);
