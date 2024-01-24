//BUILT-IN IMPORTS
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
//EXTERNAL IMPORTS
import { useDocumentTitle, useOnClickOutside } from "usehooks-ts";
//INTERNAL IMPORTS
import { MediaContentTileProps } from "../../types/types";
import MediaContentTileImage from "../media-content/media-content-tile/MediaContentTileImage";
import MediaContentTileLabels from "../media-content/media-content-tile/MediaContentTileLabels";

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

	const ref = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const handleClickOutside = () => {
		navigate("..");
	};

	useOnClickOutside(ref, handleClickOutside);

	return (
		<div
			ref={ref}
			className="z-20 p-8 space-y-8 rounded-lg cursor-default lg:mt-16 lg:p-16 lg:max-w-prose bg-c-dark-blue">
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
