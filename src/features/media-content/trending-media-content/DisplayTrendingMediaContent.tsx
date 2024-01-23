// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { fetchTrendingContentData } from "../../../services/api/http";
import TrendingMediaContentTile from "./TrendingMediaContentTile";
import TrendingCarousel from "./TrendingCarousel";

const DisplayTrendingMediaContent = () => {
	let content!: JSX.Element | JSX.Element[];

	const { data, isFetching, isError, isSuccess } = useQuery({
		queryKey: ["trendingMediaContent"],
		queryFn: fetchTrendingContentData,
	});

	if (isFetching) {
		content = <p>Fetching the data!</p>;
	}

	if (isError) {
		content = <p>There was an error while fetching the data!</p>;
	}

	if (data) {
		content = data.map((item) => (
			<TrendingMediaContentTile
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
		<div className="mb-16 space-y-2">
			{isSuccess && (
				<p className="text-xl font-thin tracking-tight font-main text-c-white">
					Trending
				</p>
			)}
			{/* <div className="grid grid-flow-col gap-4 mt-0 mb-6 overflow-x-auto overscroll-x-contain auto-cols-max snap-x snap-mandatory no-scrollbar">
				{content}
			</div> */}
			<TrendingCarousel>{content}</TrendingCarousel>
		</div>
	);
};

export default DisplayTrendingMediaContent;
