// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
//INTERNAL IMPORT
import { fetchAllMediaContentData } from "../../services/api/http";
import MediaContentTile from "../media-content-tile/MediaContentTile";

const HomeContent = () => {
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
		content = data.map((item) => (
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
			{content}
		</>
	);
};

export default HomeContent;
