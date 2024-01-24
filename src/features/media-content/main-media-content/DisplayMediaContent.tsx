// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
//INTERNAL IMPORT
import { MediaContentData } from "../../../types/types";
import MediaContentTile from "./MediaContentTile";
import MediaContentHeader from "./MediaContentHeader";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import ErrorBlock from "../../../components/ui/ErrorBlock";
import TrendingCarousel from "../trending-media-content/TrendingCarousel";
import MediaGrid from "./MediaGrid";

type DisplayMediaContentProps = {
	queryFunction: () => Promise<MediaContentData>;
	title: string;
	query: string;
	queryKey: string[];
	displayType: "trending" | "standard"
};

const DisplayMediaContent = ({
	queryFunction,
	title,
	query,
	queryKey,
	displayType,
}: DisplayMediaContentProps) => {
	let content!: JSX.Element | JSX.Element[];
	let utilityContent!: JSX.Element;
	let filteredData: MediaContentData;

	const { data, isFetching, isError, isSuccess } = useQuery({
		queryKey: queryKey,
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
				mutateQueryKey={queryKey}
			/>
		));
	}

	return (
		<div className="my-2 mb-12 space-y-2">
			<MediaContentHeader
				filteredData={filteredData!}
				isSuccess={isSuccess}
				query={query}
				title={title}
			/>
			<div className="flex items-center justify-center mt-64 lg:mt-96">
				{utilityContent}
			</div>
			{!isFetching && displayType === "standard" && <MediaGrid content={content} />}
			{!isFetching && displayType === "trending" && <TrendingCarousel content={content} />}
		</div>
	);
};

export default DisplayMediaContent;
