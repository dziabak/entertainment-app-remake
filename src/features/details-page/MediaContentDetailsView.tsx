//EXTERNAL IMPORTS
import { useDocumentTitle, useScrollLock } from "usehooks-ts";
//INTERNAL IMPORTS
import { MediaContentTileProps } from "../../types/types";
// import MediaContentTileImage from "../media-content/media-content-tile/MediaContentTileImage";
// import MediaContentTileLabels from "../media-content/media-content-tile/MediaContentTileLabels";

import { useParams } from "react-router-dom";

import DetailsViewModal from "./DetailsViewModal";

import MediaContentTile from "../media-content/media-content-tile/MediaContentTile";

const MediaContentDetailsView = ({
	title,
	thumbnail,
	category,
	isBookmarked,
	isTrending,
	rating,
	year,
	description,
	alt,
}: MediaContentTileProps) => {
	useDocumentTitle(`${title} | Entertainment App`, {
		preserveTitleOnUnmount: false,
	});

	useScrollLock();

	const params = useParams();

	return (
		<DetailsViewModal>
			<div className="space-y-4">
				<MediaContentTile
					alt={alt}
					category={category}
					isBookmarked={isBookmarked}
					isTrending={isTrending}
					rating={rating}
					thumbnail={thumbnail}
					title={title}
					key={title}
					year={year}
					displayType={"standard"}
					mutateQueryKey={["mediaContentDetails", params.mediaContentId]}
				/>
				<p className="font-thin opacity-75 font-main text-c-white max-w-prose">
					{description}
				</p>
				<p className="text-xs font-thin opacity-75 font-main text-c-white max-w-prose">
					NOTE: Since the project does not include a media player, the link to
					play the media is not functional in this example.
				</p>
			</div>
		</DetailsViewModal>
	);
};

export default MediaContentDetailsView;
