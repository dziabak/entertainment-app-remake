//INTERNAL IMPORTS
import { fetchSeriesContentData } from "../services/api/http";
import DisplayMediaContent from "../features/media-content/DisplayMediaContent";

const Series = () => {
	return (
		<>
			<div>Series</div>
			<DisplayMediaContent queryFunction={fetchSeriesContentData} />
		</>
	);
};

export default Series;
