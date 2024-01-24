// BUILT-IN IMPORTS
import { Link } from "react-router-dom";
// INTERNAL IMPORTS
import useBookmarks from "../../../hooks/useBookmarks";
import useLinkTo from "../../../hooks/useLinkTo";
import { MediaContentTileProps } from "../../../types/types";
import MediaContentTileLabelsRenderer from "./MediaContentTileLabelsRenderer";
import MediaContentTilePlayHover from "./MediaContentTilePlayHover";
import MediaContentTileImage from "./MediaContentTileImage";
import BookmarkButton from "./BookmarkButton";
import MediaContentTileGradient from "./MediaContentTileGradient";

const MediaContentTile = ({
	title,
	thumbnail,
	year,
	category,
	rating,
	isBookmarked,
	mutateQueryKey,
	displayType,
}: MediaContentTileProps) => {
	const linkTo = useLinkTo(title);

	const { bookmarkStateChangeHandler } = useBookmarks(
		title,
		isBookmarked,
		mutateQueryKey
	);

	return (
		<div className="relative font-thin font-main text-c-light-blue">
			<Link to={linkTo} className="group">
				<div className="relative">
					<MediaContentTileImage
						thumbnailMobile={thumbnail.regular.small}
						thumbnailTablet={thumbnail.regular.medium}
						thumbnailDesktop={thumbnail.regular.large}
					/>
					<MediaContentTileGradient displayType={displayType} />
					<MediaContentTilePlayHover />
				</div>
				<MediaContentTileLabelsRenderer
					displayType={displayType}
					category={category}
					rating={rating}
					title={title}
					year={year}
				/>
			</Link>
			<BookmarkButton
				isBookmarked={isBookmarked}
				onClick={bookmarkStateChangeHandler}
			/>
		</div>
	);
};

export default MediaContentTile;
