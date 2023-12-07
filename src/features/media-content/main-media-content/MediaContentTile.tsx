//INTERNAL IMPORTS
import { MediaContentTileProps } from "../../../types/types";
import MediaContentTileLabels from "../reusable-media-content/MediaContentTileLabels";

const MediaContentTile = ({
	title,
	thumbnail,
	year,
	category,
	rating,
	isBookmarked,
	// isTrending,
}: MediaContentTileProps) => {
	return (
		// w-[164px] h-[154px]
		<div className="">
			<img src={thumbnail.regular.small} alt="" className="rounded-lg" />
			<MediaContentTileLabels
				title={title}
				year={year}
				category={category}
				rating={rating}
			/>
			<div className="font-thin font-main text-c-light-blue">
				{isBookmarked && <p>isBookmarked</p>}
				{/* {isTrending && <p>isTrending</p>} */}
			</div>
		</div>
	);
};

export default MediaContentTile;
