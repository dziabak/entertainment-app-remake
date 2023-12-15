//EXTERNAL IMPORTS
import { useDocumentTitle } from "usehooks-ts";
//INTERNAL IMPORTS
import { fetchBookmarkedContentData } from "../services/api/http";
import DisplayMediaContent from "../features/media-content/main-media-content/DisplayMediaContent";

const Bookmarked = () => {
	useDocumentTitle("Bookmarked | Entertainment App");
	
	return (
		<>
			<DisplayMediaContent title="Bookmarked" queryFunction={fetchBookmarkedContentData} />
		</>
	);
};

export default Bookmarked;
