// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { MediaContentData } from "../../../types/types";
import MediaContentTile from "../media-content-tile/MediaContentTile";
import MediaContentHeader from "./MediaContentHeader";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import ErrorBlock from "../../../components/ui/ErrorBlock";
import TrendingCarousel from "./TrendingCarousel";
import MediaGrid from "./MediaGrid";

type DisplayMediaContentProps = {
	queryFunction: () => Promise<MediaContentData>;
	title: string;
	query: string;
	queryKey: string[];
	displayType: "trending" | "standard";
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
				errorMessage="There was an error while loading the data"
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
				alt={item.alt}
				title={item.title}
				year={item.year}
				mutateQueryKey={queryKey}
				displayType={displayType}
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
			<div className="flex items-center justify-center mt-32 lg:mt-58">
				{utilityContent}
			</div>
			{isSuccess && displayType === "standard" && (
				<MediaGrid content={content} />
			)}
			{isSuccess && displayType === "trending" && (
				<TrendingCarousel content={content} />
			)}
		</div>
	);
};

export default DisplayMediaContent;
