//INTERNAL IMPORTS
import { fetchBookmarkedContentData } from "../services/api/http";
import DisplayMediaContent from "../features/media-content/main-media-content/DisplayMediaContent";

const Bookmarked = () => {
	return (
		<>
			<DisplayMediaContent title="Bookmarked" queryFunction={fetchBookmarkedContentData} />
		</>
	);
};

export default Bookmarked;
