//INTERNAL IMPORTS
import { Outlet } from "react-router-dom";
import DisplayMediaContent from "../features/media-content/main-media-content/DisplayMediaContent";
import { fetchAllMediaContentData } from "../services/api/http";

const Home = () => {
	return (
		<>
			<div>Home</div>
			<Outlet />
			<DisplayMediaContent queryFunction={fetchAllMediaContentData} />
		</>
	);
};

export default Home;
