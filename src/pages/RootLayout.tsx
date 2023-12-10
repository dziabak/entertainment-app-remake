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
			<div className="flex flex-col lg:flex-row">
				<div>
					<Navigation />
				</div>
				<div className="container">
					<Outlet />
					{children}
				</div>
			</div>
		</main>
	);
};

export default RootLayout;
