// INTERNAL IMPORTS
import { MediaContentTileProps } from "../../types/types";
import MediaContentTileLabels from "../media-content/reusable-media-content/MediaContentTileLabels";

const MediaContentDetailsView = ({
	title,
	thumbnail,
	category,
	// isBookmarked,
	// isTrending,
	rating,
	year,
	description,
}: MediaContentTileProps) => {
	return (
		<div className="p-8 space-y-8 lg:mt-16 lg:px-16 lg:max-w-prose">
			<div>
				<img src={thumbnail.regular.small} alt="" className="rounded-lg" />
			</div>
			<div className="space-y-4">
				<MediaContentTileLabels
					category={category}
					rating={rating}
					title={title}
					year={year}
				/>
				<p className="font-main font-thin text-c-white max-w-prose opacity-75">
					{description}
				</p>
			</div>
		</div>
	);
};

export default MediaContentDetailsView;
