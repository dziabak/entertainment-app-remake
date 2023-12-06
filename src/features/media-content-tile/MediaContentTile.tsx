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
			<p>{thumbnail.regular.small}</p>
			<p>{title}</p>
			<p>{year}</p>
			<p>{category}</p>
			<p>{rating}</p>
			<p>{isBookmarked}</p>
			<p>{isTrending}</p>
		</div>
	);
};

export default MediaContentTile;
