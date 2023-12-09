// BUILT-IN IMPORTS
import { useParams } from "react-router-dom";
// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
// INTENRAL IMPORTS
import { fetchMediaContentItem } from "../services/api/http";
import MediaContentDetailsView from "../features/details-page/MediaContentDetailsView";
// import { MediaContentTileProps } from "../types/types";

const MediaContentDetails = () => {
	const params = useParams();

	const { data, isPending, isError } = useQuery({
		queryKey: ["mediaContentDetails", params.mediaContentId],
		queryFn: () => fetchMediaContentItem({ id: params.mediaContentId }),
	});

	let content!: JSX.Element | JSX.Element[];

	if (isPending) {
		content = <p>Fetching the data!</p>;
	}

	if (isError) {
		content = <p>There was an error while fetching the data!</p>;
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
		<>
			{content}
		</>
	);
};

export default MediaContentDetails;
