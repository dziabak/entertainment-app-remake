// BUILT-IN IMPORTS
import { Link } from "react-router-dom";
//INTERNAL IMPORTS
import { MediaContentTileProps } from "../../../types/types";
import MediaContentTileLabels from "../reusable-media-content/MediaContentTileLabels";
import MediaContentTilePlayHover from "../reusable-media-content/MediaContentTilePlayHover";

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
		<Link to={`/${title}`}>
			<div className="relative group">
				<img src={thumbnail.regular.small} alt="" className="rounded-lg" />
				<MediaContentTilePlayHover />
			</div>
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
