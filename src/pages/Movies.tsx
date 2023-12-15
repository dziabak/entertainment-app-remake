//EXTERNAL IMPORTS
import { useDocumentTitle } from "usehooks-ts";
//INTERNAL IMPORTS
import { fetchMoviesContentData } from "../services/api/http";
import DisplayMediaContent from "../features/media-content/main-media-content/DisplayMediaContent";

const Movies = () => {
	useDocumentTitle("Movies | Entertainment App");

	return (
		<>
			<DisplayMediaContent
				title="Movies"
				queryFunction={fetchMoviesContentData}
			/>
		</>
	);
};

export default Movies;
