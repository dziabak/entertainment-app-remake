// BUILT-IN IMPORTS
import { useParams } from "react-router-dom";
// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
// INTENRAL IMPORTS
import { fetchMediaContentItem } from "../services/api/http";
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
			<div key={item.title}>
				<p>{item.year}</p>
				<p>{item.title}</p>
				<p>{item.category}</p>
				<p>{item.rating}</p>
			</div>
		));
	}

	return (
		<>
			<div>MediaContentDetails</div>
			{content}
		</>
	);
};

export default MediaContentDetails;
