//BUILT-IN IMPORTS
import { Outlet } from "react-router-dom";
//EXTERNAL IMPORTS
import { useDocumentTitle } from "usehooks-ts";
//INTERNAL IMPORTS
import {
	fetchTrendingContentData,
	fetchAllMediaWithoutTrendingContentData,
} from "../services/api/http";
import DisplayMediaContent from "../features/media-content/display-media-content/DisplayMediaContent";
import Searchbar from "../features/search/Searchbar";
import useSearch from "../hooks/useSearch";

const Home = () => {
	useDocumentTitle("Home | Entertainment App");
	const { query, getSearchValue } = useSearch();

	return (
		<>
			<Outlet />
			<Searchbar
				onSearch={getSearchValue}
				placeholderText="Search for movies or TV series"
			/>
			{query === "" && (
				<DisplayMediaContent
					title="Trending"
					queryFunction={fetchTrendingContentData}
					query={query}
					queryKey={["trending"]}
					displayType="trending"
				/>
			)}
			<DisplayMediaContent
				title="Recommended for you"
				queryFunction={fetchAllMediaWithoutTrendingContentData}
				query={query}
				queryKey={["media"]}
				displayType="standard"
			/>
		</>
	);
};

export default Home;
