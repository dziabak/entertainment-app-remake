//INTERNAL IMPORTS
import { fetchBookmarkedContentData } from "../services/api/http";
import DisplayMediaContent from "../features/media-content/DisplayMediaContent";

const Bookmarked = () => {
	return (
		<>
			<div>Bookmarked</div>
			<DisplayMediaContent queryFunction={fetchBookmarkedContentData} />
		</>
	);
};

export default Bookmarked;
