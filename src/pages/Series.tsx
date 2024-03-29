//BUILT-IN IMPORTS
import { Outlet } from "react-router-dom";
//EXTERNAL IMPORTS
import { useDocumentTitle } from "usehooks-ts";
//INTERNAL IMPORTS
import useSearch from "../hooks/useSearch";
import { fetchSeriesContentData } from "../services/api/http";
import Searchbar from "../features/search/Searchbar";
import DisplayMediaContent from "../features/media-content/display-media-content/DisplayMediaContent";

const Series = () => {
	useDocumentTitle("TV Series | Entertainment App");
	const { query, getSearchValue } = useSearch();

	return (
		<>
			<Outlet />
			<Searchbar onSearch={getSearchValue} placeholderText="Search for TV series" />
			<DisplayMediaContent
				title="TV Series"
				queryFunction={fetchSeriesContentData}
				query={query}
				queryKey={["media"]}
				displayType="standard"
			/>
		</>
	);
};

export default Series;
