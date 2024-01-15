//BUILT-IN IMPORTS
import { Outlet } from "react-router-dom";
//EXTERNAL IMPORTS
import { useDocumentTitle } from "usehooks-ts";
//INTERNAL IMPORTS
import { fetchAllMediaContentData } from "../services/api/http";
import DisplayMediaContent from "../features/media-content/main-media-content/DisplayMediaContent";
import DisplayTrendingMediaContent from "../features/media-content/trending-media-content/DisplayTrendingMediaContent";

import Searchbar from "../features/search/Searchbar";
import useSearch from "../hooks/use-search";

const Home = () => {
	useDocumentTitle("Home | Entertainment App");
	const { query, getSearchValue } = useSearch();

	return (
		<>
			<Outlet />
			<Searchbar onSearch={getSearchValue} />
			{query === "" && <DisplayTrendingMediaContent />}
			<DisplayMediaContent
				title="Recommended for you"
				queryFunction={fetchAllMediaContentData}
				query={query}
				queryKey={["media"]}
			/>
		</>
	);
};

export default Home;
