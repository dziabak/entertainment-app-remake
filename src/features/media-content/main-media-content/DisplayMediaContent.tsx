// BUILT-IN IMPORTS
import { useState } from "react";
import { useLocation } from "react-router-dom";
// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
//INTERNAL IMPORT
import { MediaContentData } from "../../../types/types";
import MediaContentTile from "./MediaContentTile";
import Searchbar from "../../search/Searchbar";
import DisplayTrendingMediaContent from "../trending-media-content/DisplayTrendingMediaContent";

type DisplayMediaContentProps = {
	queryFunction: () => Promise<MediaContentData>;
	title: string;
};

const DisplayMediaContent = ({
	queryFunction,
	title,
}: DisplayMediaContentProps) => {
	const [query, setQuery] = useState("");
	const location = useLocation();

	const getSearchValue = (searchValue: string) => {
		setQuery(searchValue);
	};

	let content!: JSX.Element | JSX.Element[];
	let filteredData: MediaContentData;

	const { data, isFetching, isError, isSuccess } = useQuery({
		queryKey: ["mediaContent"],
		queryFn: queryFunction,
	});

	if (isFetching) {
		content = <p>Fetching the data!</p>;
	}

	if (isError) {
		content = <p>There was an error while fetching the data!</p>;
	}

	if (data) {
		filteredData = data.filter((item) => {
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
		<section className="px-6">
			{isSuccess && <Searchbar onSearch={getSearchValue} />}
			{location.pathname === "/home" && isSuccess && query === "" ? (
				<DisplayTrendingMediaContent />
			) : undefined}
			<div className="my-2 space-y-6">
				{query === "" && (
					<p className="text-xl font-thin tracking-tight font-main text-c-white">
						{title}
					</p>
				)}
				{query !== "" && (
					<p className="text-xl font-thin tracking-tight font-main text-c-white">
						Found {filteredData!.length} results for "{query}"
					</p>
				)}
				<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
					{content}
				</div>
			</div>
		</section>
	);
};

export default DisplayMediaContent;
