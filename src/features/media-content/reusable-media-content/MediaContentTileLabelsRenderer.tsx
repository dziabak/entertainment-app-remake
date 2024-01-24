// INTERNAL IMPORTS
import MediaContentTileLabels from "./MediaContentTileLabels";

const MediaContentTileLabelsRenderer = ({
	displayType,
	title,
	year,
	category,
	rating,
}: {
	displayType: "standard" | "trending" | undefined;
	title: string;
	year: number;
	category: string;
	rating: string;
}) => {
	let content: JSX.Element;

	if (displayType === "standard") {
		content = (
			<div>
				<MediaContentTileLabels
					title={title}
					year={year}
					category={category}
					rating={rating}
				/>
			</div>
		);
	} else {
		content = (
			<div className="absolute left-8 bottom-4">
				<MediaContentTileLabels
					title={title}
					year={year}
					category={category}
					rating={rating}
				/>
			</div>
		);
	}
	return <>{content}</>;
};

export default MediaContentTileLabelsRenderer;
