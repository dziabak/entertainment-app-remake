//BUILT-IN IMPORTS
import { Link } from "react-router-dom";
// INTERNAL IMPORTS
import { MediaContentTileProps } from "../../../types/types";
import MediaContentTileLabels from "../reusable-media-content/MediaContentTileLabels";

const TrendingMediaContentTile = ({
	title,
	thumbnail,
	year,
	category,
	rating,
}: // isBookmarked,
// isTrending,
MediaContentTileProps) => {
	return (
		<Link to={`/${title}`} className="relative w-[240px] h-[140px] snap-start">
			<img
				src={thumbnail.regular.small}
				alt=""
				className="object-cover w-full h-full rounded-lg"
			/>
			<div className="absolute top-0 w-full h-full rounded-lg bg-gradient-to-t from-black via-transparent"></div>
			<div className="absolute left-4 bottom-2">
				<MediaContentTileLabels
					title={title}
					year={year}
					category={category}
					rating={rating}
				/>
			</div>
			<div className="font-thin font-main text-c-light-blue">
				{/* {isBookmarked && <p>isBookmarked</p>} */}
				{/* {isTrending && <p>isTrending</p>} */}
			</div>
		</Link>
	);
};

export default TrendingMediaContentTile;
