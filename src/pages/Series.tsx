//BUILT-IN IMPORTS
import { Outlet } from "react-router-dom";
//EXTERNAL IMPORTS
import { useDocumentTitle } from "usehooks-ts";
//INTERNAL IMPORTS
import useSearch from "../hooks/use-search";
import { fetchSeriesContentData } from "../services/api/http";
import Searchbar from "../features/search/Searchbar";
import DisplayMediaContent from "../features/media-content/main-media-content/DisplayMediaContent";

const Series = () => {
	useDocumentTitle("TV Series | Entertainment App");
	const { query, getSearchValue } = useSearch();

	return (
		<>
			<Outlet />
			<Searchbar onSearch={getSearchValue} />
			<DisplayMediaContent
				title="TV Series"
				queryFunction={fetchSeriesContentData}
				query={query}
				queryKey={["media"]}
			/>
		</>
	);
};

export default Series;
