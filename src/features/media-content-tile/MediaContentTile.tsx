//INTERNAL IMPORTS
import { MediaContentTileProps } from "../../types/types";

const MediaContentTile = ({
	title,
	thumbnail,
	year,
	category,
	rating,
	isBookmarked,
	isTrending,
}: MediaContentTileProps) => {
	return (
		<div>
			<p>MediaContentTile</p>
			<img src={thumbnail.regular.small} alt="" />
			<p>{title}</p>
			<p>{year}</p>
			<p>{category}</p>
			<p>{rating}</p>
			{isBookmarked && <p>isBookmarked</p>}
			{isTrending && <p>isTrending</p>}
		</div>
	);
};

export default MediaContentTile;
