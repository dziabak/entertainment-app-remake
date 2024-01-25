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
				<Navigation />
				<section className="container px-6 md:px-0 lg:px-16 lg:pl-24">
					<Outlet />
					{children}
				</section>
			</div>
		</main>
	);
};

export default RootLayout;
