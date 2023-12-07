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
		// w-[164px] h-[154px]
		<div className="">
			<img src={thumbnail.regular.small} alt="" className="rounded-lg" />
			<div className="mt-3 font-main text-c-white">
				<div className="flex flex-row items-center space-x-1 text-xs font-thin">
					<p className="opacity-75 ">{year}</p>
					<p className="opacity-75">•</p>
					{category === "Movie" ? (
						<img src="../../assets/icon-category-movie.svg" />
					) : (
						<img src="../../assets/icon-category-tv.svg" />
					)}
					<p className="opacity-75">{category}</p>
					<p className="opacity-75">•</p>
					<p className="opacity-75">{rating}</p>
				</div>
				<div className="font-medium tracking-wide">
					<p>{title}</p>
				</div>
			</div>

			<div className="font-thin font-main text-c-light-blue">
				{isBookmarked && <p>isBookmarked</p>}
				{isTrending && <p>isTrending</p>}
			</div>
		</div>
	);
};

export default MediaContentTile;
