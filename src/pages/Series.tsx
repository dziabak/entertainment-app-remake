//INTERNAL IMPORTS
import { fetchSeriesContentData } from "../services/api/http";
import DisplayMediaContent from "../features/media-content/main-media-content/DisplayMediaContent";

const Series = () => {
	return (
		<>
			<DisplayMediaContent title="TV Series" queryFunction={fetchSeriesContentData} />
		</>
	);
};

export default Series;
