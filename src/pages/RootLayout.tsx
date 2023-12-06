// BUILT-IN IMPORTS
import { Outlet } from "react-router-dom";

type RootLayoutProps = {
	children?: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<>
			<div>RootLayout</div>
			<Outlet />
			{children}
		</>
	);
};

export default RootLayout;
