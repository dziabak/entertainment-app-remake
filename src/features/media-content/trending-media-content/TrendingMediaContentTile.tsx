// INTERNAL IMPORTS
import { MediaContentTileProps } from "../../../types/types";
import MediaContentTileLabels from "../reusable-media-content/MediaContentTileLabels";

const TrendingMediaContentTile = ({
	title,
	thumbnail,
	year,
	category,
	rating,
	isBookmarked,
	isTrending,
}: MediaContentTileProps) => {
	return (
		<div className="relative w-full h-full">
			<img
				src={thumbnail.regular.small}
				alt=""
				className="rounded-lg w-[200px] h-[200px]"
			/>
			<div className="absolute top-0 left-0 w-full h-full">
				<MediaContentTileLabels
					title={title}
					year={year}
					category={category}
					rating={rating}
				/>
			</div>

			<div className="font-thin font-main text-c-light-blue">
				{isBookmarked && <p>isBookmarked</p>}
				{isTrending && <p>isTrending</p>}
			</div>
		</div>
	);
};

export default TrendingMediaContentTile;
