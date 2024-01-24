//BUILT-IN IMPORTS
import { Outlet } from "react-router-dom";
//EXTERNAL IMPORTS
import { useDocumentTitle } from "usehooks-ts";
//INTERNAL IMPORTS
import useSearch from "../hooks/use-search";
import { fetchMoviesContentData } from "../services/api/http";
import Searchbar from "../features/search/Searchbar";
import DisplayMediaContent from "../features/media-content/display-media-content/DisplayMediaContent";

const Movies = () => {
	useDocumentTitle("Movies | Entertainment App");
	const { query, getSearchValue } = useSearch();

	return (
		<>
			<Outlet />
			<Searchbar onSearch={getSearchValue} />
			<DisplayMediaContent
				title="Movies"
				queryFunction={fetchMoviesContentData}
				query={query}
				queryKey={["media"]}
				displayType="standard"
			/>
		</>
	);
};

export default Movies;
