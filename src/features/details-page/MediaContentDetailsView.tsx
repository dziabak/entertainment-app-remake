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
		<section className="p-8 space-y-8 md:flex md:flex-row md:justify-center md:space-y-0 md:space-x-8">
			<div className="space-y-4 md:w-1/2 lg:w-1/4">
				<img src={thumbnail.regular.small} alt="" className="rounded-lg" />
			</div>
			<div className="space-y-4">
				<MediaContentTileLabels
					category={category}
					rating={rating}
					title={title}
					year={year}
				/>
				<p className="font-main text-c-white max-w-prose">{description}</p>
			</div>
		</section>
	);
};

export default MediaContentDetailsView;
