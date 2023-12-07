//INTERNAL IMPORTS
import { fetchMoviesContentData } from "../services/api/http";
import DisplayMediaContent from "../features/media-content/main-media-content/DisplayMediaContent";

const Movies = () => {
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
