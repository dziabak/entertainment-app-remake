//INTERNAL IMPORTS
import { Outlet } from "react-router-dom";
import HomeContent from "../features/home-page/HomeContent";

const Home = () => {
	return (
		<>
			<div>Home</div>
			<Outlet />
			<HomeContent />
		</>
	);
};

export default Home;
