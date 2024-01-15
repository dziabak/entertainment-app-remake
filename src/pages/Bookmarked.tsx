//BUILT-IN IMPORTS
import { Outlet } from "react-router-dom";
//EXTERNAL IMPORTS
import { useDocumentTitle } from "usehooks-ts";
//INTERNAL IMPORTS
import useSearch from "../hooks/use-search";
import {
	fetchBookmarkedContentData,
	fetchBookmarkedMoviesData,
	fetchBookmarkedSeriesData,
} from "../services/api/http";
import DisplayMediaContent from "../features/media-content/main-media-content/DisplayMediaContent";
import Searchbar from "../features/search/Searchbar";

const Bookmarked = () => {
	useDocumentTitle("Bookmarked | Entertainment App");
	const { query, getSearchValue } = useSearch();

	return (
		<>
			<Outlet />
			<Searchbar onSearch={getSearchValue} />
			{query === "" && (
				<>
					<DisplayMediaContent
						title="Bookmarked Movies"
						queryFunction={fetchBookmarkedMoviesData}
						query={query}
						queryKey={["movies"]}
					/>
					<DisplayMediaContent
						title="Bookmarked TV Series"
						queryFunction={fetchBookmarkedSeriesData}
						query={query}
						queryKey={["series"]}
					/>
				</>
			)}
			{query !== "" && (
				<DisplayMediaContent
					title="Bookmarked"
					queryFunction={fetchBookmarkedContentData}
					query={query}
					queryKey={["media"]}
				/>
			)}
		</>
	);
};

export default Bookmarked;
