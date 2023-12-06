// BUILT-IN IMPORTS
import { Outlet } from "react-router-dom";
// INTERNAL IMPORTS
import Navigation from "../components/ui/Navigation";

type RootLayoutProps = {
	children?: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<main className="min-h-screen bg-c-black">
			<Navigation />
			<Outlet />
			{children}
		</main>
	);
};

export default RootLayout;
