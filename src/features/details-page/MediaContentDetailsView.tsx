//EXTERNAL IMPORTS
import { useDocumentTitle } from "usehooks-ts";
//INTERNAL IMPORTS
import { MediaContentTileProps } from "../../types/types";
import MediaContentTileImage from "../media-content/media-content-tile/MediaContentTileImage";
import MediaContentTileLabels from "../media-content/media-content-tile/MediaContentTileLabels";

import DetailsViewModal from "./DetailsViewModal";

const MediaContentDetailsView = ({
	title,
	thumbnail,
	category,
	// isBookmarked,
	// isTrending,
	rating,
	year,
	description,
	alt,
}: MediaContentTileProps) => {
	useDocumentTitle(`${title} | Entertainment App`);

	return (
		<DetailsViewModal>
			<div>
				<div>
					<MediaContentTileImage
						thumbnailMobile={thumbnail.regular.small}
						thumbnailTablet={thumbnail.regular.medium}
						thumbnailDesktop={thumbnail.regular.large}
						alt={alt}
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
		</DetailsViewModal>
	);
};

export default MediaContentDetailsView;
