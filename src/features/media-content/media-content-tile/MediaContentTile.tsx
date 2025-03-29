// BUILT-IN IMPORTS
import { Link } from "react-router-dom";
// INTERNAL IMPORTS
import useBookmarks from "../../../hooks/useBookmarks";
import useLinkTo from "../../../hooks/useLinkTo";
import { MediaContentTileProps } from "../../../types/types";
import { slugifyString } from "../../../utils/slugify-string";
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
	alt,
}: MediaContentTileProps) => {
	const linkTo = useLinkTo(title);

	const { bookmarkStateChangeHandler } = useBookmarks(
		title,
		isBookmarked,
		mutateQueryKey
	);

	const slugifiedTitle = slugifyString(title);

	return (
		<div
			className="relative font-thin font-main text-c-light-blue"
			data-testid={`${slugifiedTitle}-media-tile`}>
			<Link to={linkTo} className="group">
				<div className="relative">
					<MediaContentTileImage
						thumbnailMobile={thumbnail.regular.small}
						thumbnailTablet={thumbnail.regular.medium}
						thumbnailDesktop={thumbnail.regular.large}
						alt={alt}
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
