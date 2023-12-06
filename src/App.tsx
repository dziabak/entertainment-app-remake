// BUILT-IN IMPORTS
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// EXTERNAL IMPORTS
// INTERNAL IMPORTS
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarked from "./pages/Bookmarked";

const router = createBrowserRouter([
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
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
