// BUILT-IN IMPORTS
import { Link } from "react-router-dom";
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
}: // isTrending,
MediaContentTileProps) => {
	return (
		// w-[164px] h-[154px]
		<Link to={`/${title}`}>
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
			{/* <Link to={`/${title}`}>LINK</Link> */}
		</Link>
	);
};

export default MediaContentTile;
