// BUILT-IN IMPORTS
import { useState } from "react";
// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
//INTERNAL IMPORT
import { fetchAllMediaContentData } from "../../services/api/http";
import MediaContentTile from "../media-content-tile/MediaContentTile";
import Searchbar from "../search/Searchbar";

const HomeContent = () => {
	const [query, setQuery] = useState("");

	const getSearchValue = (searchValue: string) => {
		setQuery(searchValue);
	};

	let content!: JSX.Element | JSX.Element[];

	const { data, isFetching, isError } = useQuery({
		queryKey: ["mediaContent"],
		queryFn: fetchAllMediaContentData,
	});

	if (isFetching) {
		content = <p>Fetching the data!</p>;
	}

	if (isError) {
		content = <p>There was an error while fetching the data!</p>;
	}

	if (data) {
		const filteredData = data.filter((item) => {
			return item.title.toLowerCase().includes(query.toLowerCase());
		});

		content = filteredData.map((item) => (
			<MediaContentTile
				key={item.title}
				category={item.category}
				isBookmarked={item.isBookmarked}
				isTrending={item.isTrending}
				rating={item.rating}
				thumbnail={item.thumbnail}
				title={item.title}
				year={item.year}
			/>
		));
	}

	return (
		<>
			<div>HomeContent</div>
			<Searchbar onSearch={getSearchValue} />
			{content}
		</>
	);
};

export default HomeContent;
