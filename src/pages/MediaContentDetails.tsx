//BUILT-IN IMPORTS
import { useParams } from "react-router-dom";
//EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
//INTENRAL IMPORTS
import { fetchMediaContentItem } from "../services/api/http";
import MediaContentDetailsView from "../features/details-page/MediaContentDetailsView";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorBlock from "../components/ui/ErrorBlock";

const MediaContentDetails = () => {
	const params = useParams();

	const { data, isPending, isError } = useQuery({
		queryKey: ["mediaContentDetails", params.mediaContentId],
		queryFn: () => fetchMediaContentItem({ id: params.mediaContentId }),
	});

	let content!: JSX.Element | JSX.Element[];
	let utilityContent!: JSX.Element;

	if (isPending) {
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
		content = data.map((item) => (
			<MediaContentDetailsView
				category={item.category}
				isBookmarked={item.isBookmarked}
				isTrending={item.isTrending}
				rating={item.rating}
				thumbnail={item.thumbnail}
				title={item.title}
				year={item.year}
				key={item.title}
				description={item.description}
			/>
		));
	}

	return (
		<section className="fixed top-0 left-0 z-10 w-full h-full cursor-pointer bg-c-dark-blue/50">
			<div className="flex items-center justify-center w-full h-full">
				{utilityContent}
				{content}
			</div>
		</section>
	);
};

export default MediaContentDetails;
