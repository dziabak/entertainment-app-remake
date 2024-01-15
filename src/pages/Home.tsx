//EXTERNAL IMPORTS
import { useDocumentTitle } from "usehooks-ts";
//INTERNAL IMPORTS
import { Outlet } from "react-router-dom";
import { fetchAllMediaContentData } from "../services/api/http";
import DisplayMediaContent from "../features/media-content/main-media-content/DisplayMediaContent";

const Home = () => {
	useDocumentTitle("Home | Entertainment App");

	return (
		<>
			<Outlet />
			<DisplayMediaContent
				title="Recommended for you"
				queryFunction={fetchAllMediaContentData}
			/>
		</>
	);
};

export default Home;
