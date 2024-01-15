//EXTERNAL IMPORTS
import { useDocumentTitle } from "usehooks-ts";
// INTERNAL IMPORTS
import { MediaContentTileProps } from "../../types/types";
import MediaContentTileImage from "../media-content/reusable-media-content/MediaContentTileImage";
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
	useDocumentTitle(`${title} | Entertainment App`);

	return (
		<div className="p-8 space-y-8 lg:mt-16 lg:px-16 lg:max-w-prose">
			<div>
				<MediaContentTileImage
					thumbnailMobile={thumbnail.regular.small}
					thumbnailTablet={thumbnail.regular.medium}
					thumbnailDesktop={thumbnail.regular.large}
				/>
			</div>
			<div className="space-y-4">
				<MediaContentTileLabels
					category={category}
					rating={rating}
					title={title}
					year={year}
				/>
				<p className="font-thin opacity-75 font-main text-c-white max-w-prose">
					{description}
				</p>
			</div>
		</div>
	);
};

export default MediaContentDetailsView;
