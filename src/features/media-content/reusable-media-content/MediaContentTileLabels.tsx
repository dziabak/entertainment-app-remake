type MediaContentTileLabelsProps = {
	year: number;
	category: string;
	rating: string;
	title: string;
};

const MediaContentTileLabels = ({
	year,
	category,
	rating,
	title,
}: MediaContentTileLabelsProps) => {
	return (
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
	);
};

export default MediaContentTileLabels;
