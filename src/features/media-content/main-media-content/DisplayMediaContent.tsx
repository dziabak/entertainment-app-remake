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
import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import ErrorBlock from "../../../components/ui/ErrorBlock";

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
	let utilityContent!: JSX.Element;
	let filteredData: MediaContentData;

	const { data, isFetching, isError, isSuccess } = useQuery({
		queryKey: ["mediaContent"],
		queryFn: queryFunction,
	});

	if (isFetching) {
		utilityContent = <LoadingSpinner />;
	}

	if (isError) {
		utilityContent = (
			<ErrorBlock
				errorHeader="We are sorry :("
				errorMessage="We could not load your next favourite movie."
			/>
		);
	}

	if (data) {
		filteredData = data.filter((item) => {
			return item.title.toLowerCase().includes(query.toLowerCase());
		});

		// content = <LoadingSpinner />;

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
		<section className="px-6 lg:px-16">
			{isSuccess && <Searchbar onSearch={getSearchValue} />}
			{location.pathname === "/home" && isSuccess && query === "" ? (
				<DisplayTrendingMediaContent />
			) : undefined}
			<div className="my-2 space-y-6">
				{isSuccess && query === "" && (
					<p className="text-xl font-thin tracking-tight font-main text-c-white">
						{title}
					</p>
				)}
				{query !== "" && filteredData!.length === 1 && (
					<p className="text-xl font-thin tracking-tight font-main text-c-white">
						Found {filteredData!.length} result for "{query}"
					</p>
				)}
				{query !== "" && (
					<p className="text-xl font-thin tracking-tight font-main text-c-white">
						Found {filteredData!.length} results for "{query}"
					</p>
				)}
				<div className="flex items-center justify-center mt-64 lg:mt-96">
					{utilityContent}
				</div>
				<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
					{content}
				</div>
			</div>
		</section>
	);
};

export default DisplayMediaContent;
