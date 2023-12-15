//EXTERNAL IMPORTS
import { useDocumentTitle } from "usehooks-ts";
//INTERNAL IMPORTS
import { fetchSeriesContentData } from "../services/api/http";
import DisplayMediaContent from "../features/media-content/main-media-content/DisplayMediaContent";

const Series = () => {
	useDocumentTitle("TV Series | Entertainment App");

	return (
		<>
			<DisplayMediaContent title="TV Series" queryFunction={fetchSeriesContentData} />
		</>
	);
};

export default Series;
